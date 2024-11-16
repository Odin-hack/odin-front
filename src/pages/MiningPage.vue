<script setup lang="ts">
import { ButtonThemeEnum } from '@/types/enums/button.enum';
import { InfoBlockTypeEnum } from '@/types/enums/info-block.enum';
import { StatusEnum } from '@/types/enums/status.enum';

import Button from '@/components/UI/Button.vue';
import InfoBlocks from '@/components/Section/Mining/InfoBlocks.vue';
import InfoBlock from '@/components/UI/InfoBlock.vue';
import BatteryInfo from '@/components/BatteryInfo.vue';
import EarnedBlock from '@/components/EarnedBlock.vue';

import IconPlay from '@/components/Icon/play.vue';
</script>

<template>
  <div class="MiningPage">
    <BatteryInfo />

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
