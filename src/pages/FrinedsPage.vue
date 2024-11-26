<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import WebApp from '@twa-dev/sdk';

import { ButtonThemeEnum } from '@/types/enums/button.enum';

import { useAuthStore } from '@/stores/auth';
import { useFriendsStore } from '@/stores/friends';

import FriendsDashboard from '@/components/frineds/Dashboard.vue';
import FriendsUserRow from '@/components/frineds/UserRow.vue';
import Button from '@/components/UI/Button.vue';

import IconInviteUser from '@/components/Icon/InviteUser.vue';


const { referralStats, friendList } = storeToRefs(useFriendsStore());
const { user } = storeToRefs(useAuthStore());

onMounted(async () => await useFriendsStore().getFriendsList());

const inviteFriend = () => WebApp?.openTelegramLink(`https://t.me/share/url?url=${ user.value?.info?.refLink }`);
</script>

<template>
  <div class="FriendsPage">
    <div class="FriendsPage__general">
      <h1 class="FriendsPage__title">
        Friends
      </h1>

      <FriendsDashboard
        :referral-stats
      />

      <div
        v-if="referralStats?.referralEnergy"
        class="FriendsPage__invite"
      >
        <Button
          :theme="ButtonThemeEnum.PRIMARY"
          @click="inviteFriend"
        >
          <IconInviteUser />

          Invite Friend
        </Button>
      </div>

      <div class="FriendsPage__info">
        <p class="FriendsPage__info-title">
          How to?
        </p>

        <p class="FriendsPage__info-desc">
          Get more energy capacity for each active friend.
          <br>
          After your friend start mining you will get
          +100 and he will get +50
        </p>
      </div>

      <div class="FriendsPage__list">
        <p class="FriendsPage__list-title">
          Friend List
        </p>

        <div class="FriendsPage__list-wrapper">
          <FriendsUserRow
            v-for="(friend, index) in friendList"
            :key="index"
            :friend
            class="FriendsPage__list-row"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.FriendsPage {
  padding-bottom: 18dvh;

  &__title {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.23px;
  }

  &__main-user-row {
    margin-top: 58px;

    background-color: var(--color-grey-darken);
    border-radius: 12px;
  }

  &__invite {
    margin-top: 24px;
  }

  &__info {
    padding: 24px 18px;

    &-title {
      color: var(--color-primary-white);
      font-size: 17px;
      font-weight: 500;
      line-height: 22px;
      margin-bottom: 8px;
    }

    &-desc {
      font-size: 15px;
      font-weight: 400;
      color: var(--color-grey-light);
      line-height: 22px;
    }
  }

  &__list {
    background-color: var(--color-grey-darken);
    padding: 16px;
    border-radius: 12px;

    &-wrapper {
      max-height: 50dvh;
      overflow: auto;
    }

    &-title {
      margin-bottom: 12px;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.23px;
    }

    &-row {
      border-top: 0.5px solid var(--color-divider);
    }
  }
}
</style>
