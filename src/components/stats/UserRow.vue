<script setup lang="ts">
import { getAvatarColor } from '@/utils/getAvatarColor';

import UserPlace from '@/components/animations/UserPlace.vue';
import UITag from '@/components/UI/Tag.vue';


defineProps({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: [String, Number],
    required: true,
  },
  amount: {
    type: [String, Number],
    required: true,
  },
  photoUrl: {
    type: String,
    default: null,
  },
  ignoreBorder: Boolean,
});
</script>

<template>
  <div class="StatsUserRow">
    <div class="StatsUserRow__avatar-wrapper">
      <img
        v-if="photoUrl"
        :src="photoUrl"
        alt="User avatar"
      >

      <div
        v-else
        class="StatsUserRow__avatar"
        :style="{ backgroundColor: getAvatarColor(name)}"
      >
        <p class="StatsUserRow__name StatsUserRow__avatar-name">
          {{ name[0] }}
        </p>
      </div>
    </div>

    <div class="StatsUserRow__name-wrapper">
      <p class="StatsUserRow__name">
        {{ name.length > 12 ? `${name.slice(0, 12)}...` : name }}
      </p>

      <UITag
        :amount
      />
    </div>

    <UserPlace
      :place="place"
      class="StatsUserRow__place"
    />
  </div>
</template>

<style scoped lang="scss">
.StatsUserRow {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;

  &__avatar {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &-name {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__name {
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.4px;
    font-weight: 500;

    &-wrapper {
      display: flex;
      gap: 4px;
    }
  }

  &__amount {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.08px;
    font-weight: 500;

    &-wrapper {
      display: flex;
      gap: 2px;
      align-items: center;
      padding: 2px 6px 2px 4px;
      border-radius: 20px;
      background-color: var(--color-secondary-green-darken);
    }
  }

  &__place {
    margin-left: auto;
  }
}
</style>
