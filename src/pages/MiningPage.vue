<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

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
import IconBatteryCrossed from '@/components/Icon/baterryCrossed.vue';

import { formatNumberWithSpacesAndSuffix } from '@/utils/formatters';


const { user } = storeToRefs(useAuthStore());
const { userStaff, hashCash } = storeToRefs(useSocketDataStore());

const userInfo = computed(() => userStaff || user);

const isDrawerVisible = ref(false);

const miningContentButton = computed(() => {
  if (user?.powerMode || userStaff?.powerMode) {
    return {
      buttonTheme: ButtonThemeEnum.PRIMARY,
      buttonIcon: IconPlay,
    };
  }

  return {
    buttonTheme: ButtonThemeEnum.DISABLED,
    buttonIcon: IconBatteryCrossed,
  };
});

const difficulty = computed(() => {
  const shareFactor = hashCash.value?.config?.shareFactor || 0;
  const mainFactor = hashCash.value?.config?.mainFactor || 0;

  return formatNumberWithSpacesAndSuffix( shareFactor / mainFactor, 1);
});
</script>

<template>
  <div class="MiningPage">
    <BatteryInfo
      :user-info
    />

    <div class="MiningPage__info">
      <InfoBlocks title="INFORMATION">
        <InfoBlock
          :type="InfoBlockTypeEnum.BLOCK"
          :value="user?.blocks || userStaff?.blocks"
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
          :value="StatusEnum.AWAITING"
        />
        <InfoBlock :type="InfoBlockTypeEnum.SHARES" />
        <InfoBlock :type="InfoBlockTypeEnum.HASHES" />
        <InfoBlock :type="InfoBlockTypeEnum.EARNINGS" />
      </InfoBlocks>
    </div>

    <div class="MiningPage__earned">
      <h3 class="SectionTitle">
        LAST BLOCKS
      </h3>

      <div class="MiningPage__earned__wrapper">
        <EarnedBlock
          v-for="item in hashCash?.lastBlocks"
          :key="item.index"
          :info="item"
          @click="isDrawerVisible = true"
        />
      </div>
    </div>

    <div class="FixedButton--bottom">
      <Button
        :theme="miningContentButton.buttonTheme"
      >
        <template #icon>
          <component
            :is="miningContentButton.buttonIcon"
          />
        </template>

        Start Mining
      </Button>
    </div>
  </div>

  <MiningBlockDrawer v-model:visible="isDrawerVisible" />
</template>

<style scoped lang="scss">
.MiningPage {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24dvh;

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
