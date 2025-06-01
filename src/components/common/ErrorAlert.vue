<template>
  <v-alert
    v-if="error"
    type="error"
    variant="tonal"
    class="mb-4"
    closable
    @click:close="$emit('close')"
  >
    <div class="d-flex align-center">
      <v-icon start color="error" class="mr-2">mdi-alert-circle</v-icon>
      <span>{{ error }}</span>
    </div>
  </v-alert>
</template>

<script setup lang="ts">
defineProps<{
  error: string | null
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped>
.v-alert {
  border-radius: 8px;
}
</style> 