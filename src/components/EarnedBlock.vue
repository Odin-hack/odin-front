<script setup lang="ts">
const earned = 2.312;
</script>

<template>
  <div class="EarnedBlock">
    <div class="EarnedBlock__header">
      <p>
        Block
        <span>#1543324</span>
      </p>

      <div
        class="EarnedBlock__tag"
        :class="earned && 'EarnedBlock__tag--colored'"
      >
        {{ earned ? `+ ${ earned }` : 0 }} 𝚺
      </div>
    </div>

    <p class="EarnedBlock__earnedBy">
      ⤷ Created by <span>Dmitry</span> in 11:42
    </p>
  </div>
</template>

<style scoped lang="scss">
.EarnedBlock {
  background-color: var(--color-grey-dark);
  padding: 12px 16px;
  border-radius: 16px;

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: var(--color-grey-light);
    }
  }

  &__tag {
    padding: 2px 6px;
    background-color: var(--color-grey-secondary-light);
    border-radius: 20px;
    color: var(--color-primary-grey);
    font-weight: 700;

    &--colored {
      color: var(--color-primary-green);
      background-color: var(--color-secondary-green-dark);
    }
  }

  &__earnedBy {
    margin-top: 4px;
    color: var(--color-grey-light);

    span {
      color: var(--color-primary-white);
    }
  }
}
</style>
