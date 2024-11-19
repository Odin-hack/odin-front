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

import { formatNumberWithSpacesAndSuffix } from '@/utils/formatters';

// import WebApp from '@twa-dev/sdk';
import { useHashStore } from '@/stores/hash';
import type { IHashLastBlock } from '@/types/socket-data.interface';


const { user, alreadyInApp } = storeToRefs(useAuthStore());
const { hashCash, energy } = storeToRefs(useSocketDataStore());
const { isMiningStarted } = storeToRefs(useHashStore());
// const { invoice } = storeToRefs(useInvoiceStore());
// const { setInvoice } = useInvoiceStore();

const isMiningEnabled = ref(true);

if (!alreadyInApp.value) isMiningEnabled.value = false;

const isDrawerVisible = ref(false);

const miningContent = computed(() => {
  if (!isMiningEnabled.value) {
    return {
      buttonTheme: ButtonThemeEnum.DISABLED,
      text: 'Start mining',
      buttonDisabled: true,
      buttonIcon: IconBatteryCrossed,
      status: StatusEnum.BATTERY_LOW,
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
  if ((user.value?.info?.energy < 10 || val?.energy < 100) && isMiningEnabled.value) {
    isMiningEnabled.value = false;
    isMiningStarted.value && stopMining();
    return;
  }

  alreadyInApp.value && (isMiningEnabled.value = true);
}, { immediate: true });

const difficulty = computed(() => {
  const shareFactor = hashCash.value?.config?.shareFactor || 0;
  const mainFactor = hashCash.value?.config?.mainFactor || 0;

  return formatNumberWithSpacesAndSuffix( shareFactor / mainFactor, 1);
});

const lastBlock = computed(() => hashCash.value?.lastBlock);

setInterval(() => {
  socket.emit('mining.get_energy');
}, 10000);

const toggleMining = () => {
  isMiningStarted.value = !isMiningStarted.value;

  if (isMiningStarted.value) {
    socket.emit('mining.start');
    return useHashStore().startMining({});
  }

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
          :value="user?.blocks"
        />

        <InfoBlock
          :type="InfoBlockTypeEnum.DIFFICULTY"
          :value="difficulty"
        />

        <InfoBlock
          :type="InfoBlockTypeEnum.REWARD"
        />

        <InfoBlock
          :type="InfoBlockTypeEnum.ONLINE"
          :value="hashCash?.miners"
        />
      </InfoBlocks>
    </div>

    <div class="MiningPage__mining">
      <InfoBlocks title="MINING">
        <InfoBlock
          :type="InfoBlockTypeEnum.STATUS"
          :value="miningContent.status"
        />
        <InfoBlock :type="InfoBlockTypeEnum.SHARES" />
        <InfoBlock :type="InfoBlockTypeEnum.HASHES" />
        <InfoBlock :type="InfoBlockTypeEnum.EARNINGS" />
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
