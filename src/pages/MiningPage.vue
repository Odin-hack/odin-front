<script setup lang="ts">
import { computed, ref } from 'vue';

import WebApp from '@twa-dev/sdk';
import socket from '@/api/socket';

import { useAuthStore } from '@/stores/auth';
import { useSocketDataStore } from '@/stores/socket-data';
import { useHashStore } from '@/stores/hash';
import { useInvoiceStore } from '@/stores/invoice';
import { useTurboModeStore } from '@/stores/turbo-mode';
import { storeToRefs } from 'pinia';

import { ButtonThemeEnum } from '@/types/enums/button.enum';
import { InfoBlockTypeEnum } from '@/types/enums/info-block.enum';
import { StatusEnum } from '@/types/enums/status.enum';

import { formatNumberWithSpacesAndSuffix } from '@/utils/formatters';

import Drawer from '@/components/Drawer.vue';
import Button from '@/components/UI/Button.vue';
import InfoBlock from '@/components/UI/InfoBlock.vue';

import InfoBlocks from '@/components/mining/InfoBlocks.vue';
import BatteryInfo from '@/components/BatteryInfo.vue';
import EarnedBlock from '@/components/EarnedBlock.vue';
import MiningBlockDrawer from '@/components/mining/BlockDrawer.vue';
import IconPlay from '@/components/Icon/play.vue';
import IconPause from '@/components/Icon/pause.vue';
import IconBatteryCrossed from '@/components/Icon/baterryCrossed.vue';

import type { IHashLastBlock } from '@/types/socket-data.interface';
import { MiningStatus } from '@/enum';
import { useUserEnergyStore } from '@/stores/energy';

const { user, blockchainStats } = storeToRefs(useAuthStore());
const {
  hashCash,
  statistics,
  totalRewards,
  onlineMiners,
  isSocketReconnect,
} = storeToRefs(useSocketDataStore());

const { stopMining, startMining } = useUserEnergyStore();
const { totalShares, totalHashes } = storeToRefs(useHashStore());
const { invoice } = storeToRefs(useInvoiceStore());
const { isTurboModeActive } = storeToRefs(useTurboModeStore());
const { energyLeft, miningStatus } = storeToRefs(useUserEnergyStore());

const { setInvoice } = useInvoiceStore();

const isInvoiceModal = ref(false);

const isMiningPurchased = computed(() => {
  return user.value?.info?.allowMining ?? false;
});

const isDrawerVisible = ref(false);

const miningContent = computed(() => {
  if (!isMiningPurchased.value) {
    return {
      buttonTheme: ButtonThemeEnum.PRIMARY,
      text: 'Start mining',
      buttonDisabled: false,
      buttonIcon: IconBatteryCrossed,
      status: StatusEnum.AWAITING,
    };
  }

  switch (miningStatus.value) {
    case MiningStatus.MINING:
      return {
        buttonTheme: ButtonThemeEnum.WARNING,
        text: 'Stop mining',
        buttonIcon: IconPause,
        buttonDisabled: false,
        status: StatusEnum.MINING,
      };
    default:
      return {
        buttonTheme: ButtonThemeEnum.PRIMARY,
        text: 'Start mining',
        buttonIcon: IconPlay,
        buttonDisabled: false,
        status: StatusEnum.AWAITING,
      };
  }
});

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
  if (!socket.connected) return;

  if (!user.value?.info.allowMining) return isInvoiceModal.value = true;

  switch (miningStatus.value) {
    case MiningStatus.MINING:
      stopMining();
      break;
    default:
      startMining();
      break;
  }
};

const drawerData = ref<IHashLastBlock | null>({
  blockReward: 0,
  myReward: 0,
  rewards: [],
  solver: 0,
  solverName: 0,
  timestamp: 0,
  index: 0,
  hash: '',
});

const showMiningBlockDrawer = (item: IHashLastBlock) => {
  drawerData.value = item;
  isDrawerVisible.value = true;
};

</script>

<template>
  <div class="MiningPage">
    <BatteryInfo
      :user
      :energy-left="energyLeft"
      :is-mining-started="miningStatus"
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
      <InfoBlocks
        title="MINING"
        :tag="isSocketReconnect ? 'reconnecting...' : undefined"
      >
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
          :label="isTurboModeActive ? 'Turbo mode' : undefined"
        />
        <InfoBlock
          :type="InfoBlockTypeEnum.EARNINGS"
          :value="formatNumberWithSpacesAndSuffix(Math.round((totalRewards / 1000000)), 1)"
        />
      </InfoBlocks>

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

      <TransitionGroup
        name="list"
        tag="div"
        class="MiningPage__earned__wrapper"
      >
        <EarnedBlock
          v-for="item in lastBlock"
          :key="item.index"
          :info="item"
          :user-id="user?.info?.id"
          :rewards-data
          :hash-cash
          @click="showMiningBlockDrawer(item)"
        />
      </TransitionGroup>
    </div>
  </div>

  <MiningBlockDrawer
    v-model:visible="isDrawerVisible"
    :data="drawerData"
  />

  <Drawer v-model:visible="isInvoiceModal">
    <template #title>
      Pay for the subscription and start mining
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
