<script setup lang="ts">
import { getAvatarColor } from '@/utils/getAvatarColor';
import UITag from '@/components/UI/Tag.vue';
import { TaskAwardTypeEnum } from '@/types/enums/task.enum';
import type { PropType } from 'vue';
import type { IReferral } from '@/types/socket-data.interface';


const props = defineProps({
  friend: {
    type: Object as PropType<IReferral>,
    required: true,
  },
  ignoreBorder: Boolean,
});
</script>

<template>
  <div class="StatsUserRow">
    <div class="StatsUserRow__avatar-wrapper">
      <img
        v-if="friend?.photoUrl"
        :src="friend.photoUrl"
        alt="User avatar"
      >

      <div
        v-else
        class="StatsUserRow__avatar"
        :style="{ backgroundColor: getAvatarColor(friend?.firstName)}"
      >
        <p class="StatsUserRow__name StatsUserRow__avatar-name">
          {{ friend?.firstName }}
        </p>
      </div>
    </div>

    <div class="StatsUserRow__name-wrapper">
      <p class="StatsUserRow__name">
        {{ friend?.firstName.length > 12 ? `${friend?.firstName.slice(0, 12)}...` : friend?.firstName }}
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
