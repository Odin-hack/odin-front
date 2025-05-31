<template>
  <v-dialog v-model="modal" max-width="400">
    <v-card>
      <v-card-title>Edit Image</v-card-title>
      <v-card-text>
        <v-text-field v-model="localImage" label="Image URL" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="save">Save</v-btn>
        <v-btn text @click="close">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps<{ modelValue: boolean, image: string }>()
const emit = defineEmits(['update:modelValue', 'save'])
const localImage = ref(props.image)

const close = () => emit('update:modelValue', false)
const save = () => emit('save', localImage.value); close()

const modal = computed({
  get() {
    if (props.modelValue) localImage.value = props.image
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script> 