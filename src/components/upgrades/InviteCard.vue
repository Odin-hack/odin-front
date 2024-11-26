<script setup lang="ts">
import WebApp from '@twa-dev/sdk';

import Button from '@/components/UI/Button.vue';
import IconBlizzard from '@/components/Icon/blizzard.vue';
import IconBlizzardDashed from '@/components/Icon/BlizzardDashed.vue';
import IconUserInvite from '@/components/Icon/InviteUser.vue';

import { ButtonThemeEnum } from '@/types/enums/button.enum';

const props = defineProps({
  refLink: {
    type: String,
    required: true,
  },
  referralEnergy: {
    type: Number,
    required: true,
  },
  referrerEnergy: {
    type: Number,
    required: true,
  },
});

const inviteFriend = () => WebApp?.openTelegramLink(`https://t.me/share/url?url=${ props.refLink }`);
</script>

<template>
  <div class="InviteCard">
    <div class="InviteCard__header">
      <div class="InviteCard__header-energy">
        <div class="InviteCard__header-icon">
          <IconBlizzard
            size="12"
            style="color: var(--color-primary-blue)"
          />

          <IconBlizzardDashed
            size="24"
            style="color: var(--color-primary-blue)"
          />
        </div>

        <span>Need More Energy?</span>
      </div>
    </div>

    <div class="InviteCard__content">
      <p>Increase your Capacity</p>
      <span>
        Get more energy capacity for each active friend.
        After your friend start mining you will get +{{ referrerEnergy }} and he will get +{{ referralEnergy }}
      </span>
    </div>

    <div class="InviteCard__footer">
      <div class="InviteCard__footer__diff">
        <p>
          +{{ referrerEnergy }}
        </p>

        <IconBlizzard
          width="10"
          height="10"
          style="color: var(--color-primary-blue)"
        />
      </div>

      <Button
        :theme="ButtonThemeEnum.SECONDARY"
        small
        style="width: fit-content; margin-left: auto;"
        @click="inviteFriend"
      >
        <IconUserInvite size="24" />

        Invite
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.InviteCard {
  padding: 16px;
  background-color: var(--color-primary-grey);
  border-radius: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-icon {
      display: flex;
      gap: 2px;
      align-items: center;
    }

    &-energy {
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 28px;
    }
  }

  &__content {
    padding: 16px 0 24px 0;
    border-bottom: 0.5px solid var(--color-divider);

    p {
      margin-bottom: 4px;
      font-size: 17px;
      line-height: 18px;
    }

    span {
      color: var(--color-grey-medium);
      line-height: 18px;
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
      margin-left: 16px;

      p {
        color: var(--color-grey-medium);
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
