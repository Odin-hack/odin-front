<script setup lang="ts">
import FriendsDashboard from '@/components/frineds/Dashboard.vue';
import FriendsUserRow from '@/components/frineds/UserRow.vue';
import { storeToRefs } from 'pinia';
import { useFriendsStore } from '@/stores/friends';
import { onMounted } from 'vue';

const { referralStats, friendList } = storeToRefs(useFriendsStore());


onMounted(async () => {
  await useFriendsStore().getFriendsList();
});
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

        <FriendsUserRow
          v-for="(friend, index) in friendList"
          :key="index"
          :friend
          class="FriendsPage__list-row"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.FriendsPage {
  padding-bottom: 24dvh;

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
    &-title {
      margin-top: 28px;
      margin-bottom: 12px;
      padding: 0 16px;
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
