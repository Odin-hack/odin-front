<template>
  <div class="Loader" />
</template>

<style scoped lang="scss">
.Loader {
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: var(--color-primary-grey);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    border: 6px solid var(--color-grey-medium);
    border-top: 6px solid var(--color-primary-white);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    animation: spin 1.5s linear infinite;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
