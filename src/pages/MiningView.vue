<script setup lang="ts">
import socket from '@/api/socket';

import { ButtonThemeEnum } from '@/types/enums/button.enum';
import { InfoBlockTypeEnum } from '@/types/enums/info-block.enum';
import { StatusEnum } from '@/types/enums/status.enum';

import Button from '@/components/UI/Button.vue';
import InfoBlocks from '@/components/Section/Mining/InfoBlocks.vue';
import InfoBlock from '@/components/UI/InfoBlock.vue';
import BatteryInfo from '@/components/BatteryInfo.vue';
import EarnedBlock from '@/components/EarnedBlock.vue';

import IconPlay from '@/components/Icon/play.vue';

socket.on('connect', () => {
  console.log('Connected to socket');
});
</script>

<template>
  <div class="MiningView">
    <BatteryInfo />

    <div class="MiningView__info">
      <InfoBlocks title="INFORMATION">
        <InfoBlock :type="InfoBlockTypeEnum.BLOCK" />
        <InfoBlock :type="InfoBlockTypeEnum.DIFFICULTY" />
        <InfoBlock :type="InfoBlockTypeEnum.REWARD" />
        <InfoBlock :type="InfoBlockTypeEnum.ONLINE" />
      </InfoBlocks>
    </div>

    <div class="MiningView__mining">
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

    <div class="MiningView__earned">
      <h3 class="SectionTitle">
        LAST BLOCKS
      </h3>

      <div class="MiningView__earned__wrapper">
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
.MiningView {
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
