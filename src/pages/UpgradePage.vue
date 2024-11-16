<script setup lang="ts">
import { ButtonThemeEnum } from '@/types/enums/button.enum';

import BatteryInfo from '@/components/BatteryInfo.vue';
import Badge from '@/components/UI/Badge.vue';
import Button from '@/components/UI/Button.vue';
import UpgradeCard from '@/components/UpgradeCard.vue';

import IconBlizzard from '@/components/Icon/blizzard.vue';
</script>

<template>
  <div class="UpgradePage">
    <BatteryInfo />

    <div class="UpgradePage__upgrades">
      <h3 class="SectionTitle">
        UPGRADES
      </h3>

      <div class="UpgradePage__upgrades__wrapper">
        <UpgradeCard />
        <UpgradeCard />
        <UpgradeCard />
      </div>
    </div>

    <div class="UpgradePage__upgrades">
      <h3 class="SectionTitle">
        UPGRADES
      </h3>

      <div class="UpgradePage__upgrades__wrapper">
        <Badge />
        <Badge />
      </div>
    </div>

    <div class="FixedButton--bottom">
      <Button
        :theme="ButtonThemeEnum.PRIMARY"
      >
        Invite Friend

        <template #badge>
          <p>+ 100</p>

          <IconBlizzard
            width="8"
            height="10"
          />
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.UpgradePage {
  padding-bottom: 24dvh;

  &__upgrades {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
