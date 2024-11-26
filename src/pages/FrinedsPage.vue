<script setup lang="ts">
import { onMounted, ref } from 'vue';
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

const offset = ref(0);
const limit = ref(100);
const observerTarget = ref<HTMLElement | null>(null);
const isLoading = ref(false);

onMounted(() => {
  loadMoreFriends();

  const observer = new IntersectionObserver(
    async (entries) => {
      if (entries[0].isIntersecting) await loadMoreFriends();
    },
    { threshold: 1.0 },
  );

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
});

const loadMoreFriends = async () => {
  if (isLoading.value) return;

  isLoading.value = true;

  const response = await useFriendsStore().getFriendsList({
    offset: offset.value,
    limit: limit.value,
  });

  if (response && response.length >= limit.value) {
    offset.value += limit.value;
  }

  isLoading.value = false;
};

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
          +{{ referralStats?.referrerEnergy }} and he will get +{{ referralStats?.referralEnergy }}
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

    <div
      ref="observerTarget"
      class="FriendsPage__observer"
    />
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
