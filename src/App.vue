<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const title = ref('Hello World');
</script>

<template>
  <header
    class="class"
    @click="title = 'hello'"
  >
    {{ title }}
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
</style>
