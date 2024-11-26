<script setup lang="ts">
import { computed } from 'vue';

import { getAvatarColor } from '@/utils/getAvatarColor';

import type { IReferral } from '@/types/socket-data.interface';
import type { PropType } from 'vue';

import { TaskAwardTypeEnum } from '@/types/enums/task.enum';

import UITag from '@/components/UI/Tag.vue';


const props = defineProps({
  friend: {
    type: Object as PropType<IReferral['payload']>,
    required: true,
  },
  ignoreBorder: Boolean,
});

const formattedName = computed(() => {
  const maxLength =  props.friend?.rewardEnergy ? 12 : 20;

  return props.friend?.firstName.length > maxLength ?
    `${props.friend?.firstName.slice(0, maxLength)}...` :
    props.friend?.firstName;
});
</script>

<template>
  <div class="StatsUserRow">
    <div class="StatsUserRow__avatar-wrapper">
      <img
        v-if="!friend?.photoUrl"
        :src="friend.photoUrl"
        alt="User avatar"
      >

      <div
        v-else
        class="StatsUserRow__avatar"
        :style="{ backgroundColor: getAvatarColor(friend?.firstName)}"
      >
        <p class="StatsUserRow__name StatsUserRow__avatar-name">
          {{ friend?.firstName[0] }}
        </p>
      </div>
    </div>

    <div class="StatsUserRow__name-wrapper">
      <p class="StatsUserRow__name">
        {{ formattedName }}
      </p>

      <UITag
        v-if="props.friend?.rewardEnergy"
        :amount="props.friend?.rewardEnergy"
        :type="TaskAwardTypeEnum.MAX_ENERGY"
      />
    </div>
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
      width: 100%;
      justify-content: space-between;
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
