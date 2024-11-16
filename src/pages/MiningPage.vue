<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/auth';

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


const { user } = storeToRefs(useAuthStore());

const isDrawerVisible = ref(false);
</script>

<template>
  <div class="MiningPage">
    <BatteryInfo
      :user
    />

    <div class="MiningPage__info">
      <InfoBlocks title="INFORMATION">
        <InfoBlock :type="InfoBlockTypeEnum.BLOCK" />
        <InfoBlock :type="InfoBlockTypeEnum.DIFFICULTY" />
        <InfoBlock :type="InfoBlockTypeEnum.REWARD" />
        <InfoBlock :type="InfoBlockTypeEnum.ONLINE" />
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
          v-for="n in 29"
          :key="n"
          @click="isDrawerVisible = true"
        />
      </div>
    </div>

    <div class="FixedButton--bottom">
      <Button
        :theme="ButtonThemeEnum.PRIMARY"
      >
        <template #icon>
          <IconPlay size="18" />
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
