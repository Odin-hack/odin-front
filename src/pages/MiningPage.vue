<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import socket from '@/api/socket';

import { useAuthStore } from '@/stores/auth';
import { useSocketDataStore } from '@/stores/socket-data';

import { ButtonThemeEnum } from '@/types/enums/button.enum';
import { InfoBlockTypeEnum } from '@/types/enums/info-block.enum';
import { StatusEnum } from '@/types/enums/status.enum';

import Button from '@/components/UI/Button.vue';
import InfoBlocks from '@/components/mining/InfoBlocks.vue';
import InfoBlock from '@/components/UI/InfoBlock.vue';
import BatteryInfo from '@/components/BatteryInfo.vue';
import EarnedBlock from '@/components/EarnedBlock.vue';
import MiningBlockDrawer from '@/components/mining/BlockDrawer.vue';

import IconPlay from '@/components/Icon/play.vue';
import IconPause from '@/components/Icon/pause.vue';
import IconBatteryCrossed from '@/components/Icon/baterryCrossed.vue';

import { useHashStore } from '@/stores/hash';
import type { IHashLastBlock } from '@/types/socket-data.interface';
import { useInvoiceStore } from '@/stores/invoice';
import WebApp from '@twa-dev/sdk';
import { formatNumberWithSpacesAndSuffix } from '@/utils/formatters';
import Drawer from '@/components/Drawer.vue';
import { useTurboModeStore } from '@/stores/turbo-mode';


const { user, blockchainStats } = storeToRefs(useAuthStore());
const { hashCash, energy, statistics, rewardsData, totalRewards, onlineMiners } = storeToRefs(useSocketDataStore());
const { isMiningStarted, totalShares, totalHashes, baselineHashRate,
  currentHashRate,
  performanceRatio } = storeToRefs(useHashStore());
const { invoice } = storeToRefs(useInvoiceStore());
const { isTurboModeActive } = storeToRefs(useTurboModeStore());

const { setInvoice } = useInvoiceStore();

const isMiningEnabled = ref(true);
const isEnergy = ref(true);
const isInvoiceModal = ref(false);

if (!user.value?.info.allowMining) isMiningEnabled.value = false;

const isDrawerVisible = ref(false);

const miningContent = computed(() => {
  if (!isEnergy.value) {
    return {
      buttonTheme: ButtonThemeEnum.DISABLED,
      text: 'Start mining',
      buttonDisabled: true,
      buttonIcon: IconBatteryCrossed,
      status: StatusEnum.BATTERY_LOW,
    };
  }

  if (!isMiningEnabled.value) {
    return {
      buttonTheme: ButtonThemeEnum.PRIMARY,
      text: 'Start mining',
      buttonDisabled: false,
      buttonIcon: IconBatteryCrossed,
      status: StatusEnum.AWAITING,
    };
  }

  if (isMiningStarted.value) {
    return {
      buttonTheme: ButtonThemeEnum.WARNING,
      text: 'Stop mining',
      buttonIcon: IconPause,
      buttonDisabled: false,
      status: StatusEnum.MINING,
    };
  }

  return {
    buttonTheme: ButtonThemeEnum.PRIMARY,
    text: 'Start mining',
    buttonIcon: IconPlay,
    buttonDisabled: false,
    status: StatusEnum.AWAITING,
  };
});

watch(energy, (val) => {
  if ((user.value?.info?.energy <= 0 || val?.energy <= 0) && isMiningEnabled.value) {
    isEnergy.value = false;
    isMiningStarted.value && stopMining();
    return;
  }

  user.value?.info.allowMining && (isMiningEnabled.value = true);
}, { immediate: true });

const lastBlock = computed(() => hashCash.value?.lastBlock);

setInterval(() => {
  socket.emit('mining.get_energy');
}, 10000);

const openInvoiceModal = async () => {
  await setInvoice('00000000-0000-0000-0000-000000000001');

  if (invoice.value?.link) {
    WebApp.openInvoice(invoice.value.link);
  }

  WebApp.onEvent('invoiceClosed', (event) => {
    if (event.status === 'paid') {
      isInvoiceModal.value = false;
    }
  });
};

const toggleMining = () => {
  if (!user.value?.info.allowMining) return isInvoiceModal.value = true;

  isMiningStarted.value = !isMiningStarted.value;

  if (isMiningStarted.value) {
    socket.emit('mining.start');
    return useHashStore().startMining({
      minerId: user.value?.info.id,
      isTurboMode: isTurboModeActive.value,
    });
  }


  isTurboModeActive.value && (isTurboModeActive.value = false);
  socket.emit('mining.stop');
};

const stopMining = () => {
  isMiningStarted.value = false;
  socket.emit('mining.stop');
};

const drawerData = ref<IHashLastBlock | null>(null);

const showMiningBlockDrawer = (item: IHashLastBlock) => {
  drawerData.value = item;
  isDrawerVisible.value = true;
};
</script>

<template>
  <div class="MiningPage">
    <BatteryInfo
      :user
      :energy
      :is-mining-started
    />

    <div class="MiningPage__info">
      <InfoBlocks title="INFORMATION">
        <InfoBlock
          :type="InfoBlockTypeEnum.BLOCK"
          :value="statistics?.blocksMined || blockchainStats?.blocksMined"
        />

        <InfoBlock
          :type="InfoBlockTypeEnum.HOLDERS"
          :value="statistics?.totalHolders || blockchainStats?.totalHolders"
        />

        <InfoBlock
          :type="InfoBlockTypeEnum.REWARD"
          :value="formatNumberWithSpacesAndSuffix(hashCash?.config?.nextBlockReward / 1000000 || 0, 1)"
        />

        <InfoBlock
          :type="InfoBlockTypeEnum.ONLINE"
          :value="formatNumberWithSpacesAndSuffix(user?.info?.online || onlineMiners, 1)"
        />
      </InfoBlocks>
    </div>

    <div class="MiningPage__mining">
      <InfoBlocks title="MINING">
        <InfoBlock
          :type="InfoBlockTypeEnum.STATUS"
          :value="miningContent.status"
        />
        <InfoBlock
          :type="InfoBlockTypeEnum.SHARES"
          :value="totalShares"
        />
        <InfoBlock
          :type="InfoBlockTypeEnum.HASHES"
          :value="formatNumberWithSpacesAndSuffix(totalHashes, 1)"
        />
        <InfoBlock
          :type="InfoBlockTypeEnum.EARNINGS"
          :value="(totalRewards / 1000000)"
        />
      </InfoBlocks>


      <p style="font-size: 12px; color: green; margin-top: 8px;">
        {{ 'baselineHashRate: ' + baselineHashRate || 0 }}<br>
        {{ 'currentHashRate: ' + currentHashRate || 0 }}<br>
        {{ 'performanceRatio: ' + performanceRatio || 0 }}
      </p>


      <Button
        :theme="miningContent.buttonTheme"
        style="margin-top: 24px"
        :disabled="miningContent.buttonDisabled"
        @click="toggleMining"
      >
        <template #icon>
          <component
            :is="miningContent.buttonIcon"
          />
        </template>

        {{ miningContent.text }}
      </Button>
    </div>

    <div class="MiningPage__earned">
      <h3 class="SectionTitle">
        LAST BLOCKS
      </h3>

      <div class="MiningPage__earned__wrapper">
        <EarnedBlock
          v-for="item in lastBlock"
          :key="item.index"
          :info="item"
          :rewards-data
          @click="showMiningBlockDrawer(item)"
        />
      </div>
    </div>
  </div>

  <MiningBlockDrawer
    v-model:visible="isDrawerVisible"
    :data="drawerData"
  />

  <Drawer v-model:visible="isInvoiceModal">
    <template #title>
      Paid feature
    </template>

    <template #content>
      <div
        style="padding: 20px 16px 40px 16px"
      >
        <p>
          At the moment, to access the launch of mining, you need to pay a fee
        </p>

        <Button
          :theme="ButtonThemeEnum.PRIMARY"
          style="margin-top: 24px;"
          @click="openInvoiceModal"
        >
          Pay
        </Button>
      </div>
    </template>
  </Drawer>
</template>

<style scoped lang="scss">
.MiningPage {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 18dvh;

  &__earned {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0 24px;
    }
  }

}
</style>
