<script setup lang="ts">
import Button from '@/components/UI/Button.vue';
import IconBlizzard from '@/components/Icon/blizzard.vue';
import { ButtonThemeEnum } from '@/types/enums/button.enum';
</script>

<template>
  <div class="UpgradeCard">
    <div class="UpgradeCard__header">
      <p class="UpgradeCard__header__energy">
        <IconBlizzard
          width="16"
          style="color: var(--color-primary-blue)"
        />

        <span>200</span>
      </p>

      <p class="UpgradeCard__header__level">
        1 lvl
      </p>
    </div>

    <div class="UpgradeCard__content">
      <p>Energy amount</p>
      <span>Maximum available energy capacity</span>
    </div>

    <div class="UpgradeCard__footer">
      <div class="UpgradeCard__footer__diff">
        <IconBlizzard
          width="8"
          height="10"
          style="color: var(--color-grey-medium)"
        />

        <p>
          <span>200</span> - 400
        </p>
      </div>

      <Button :theme="ButtonThemeEnum.SECONDARY">
        Upgrade

        <template #badge>
          <span style="color: var(--color-primary-yellow);">★</span> 50
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.UpgradeCard {
  padding: 16px;
  background-color: var(--color-primary-grey);
  border-radius: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__energy {
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 28px;
    }

    &__level {
      color: var(--color-grey-medium);
      font-size: 17px;
    }
  }

  &__content {
    padding: 8px 0 24px 0;
    border-bottom: 0.5px solid var(--color-divider);

    p {
      margin-bottom: 4px;
      font-size: 17px;
    }

    span {
      color: var(--color-grey-medium);
    }
  }

  &__footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 12px;

    &__diff {
      display: flex;
      align-items: center;
      gap: 4px;

      span {
        color: var(--color-grey-medium);
      }
    }
  }
}
</style>
