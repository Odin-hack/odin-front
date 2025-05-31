<template>
  <v-dialog v-model="modal" max-width="400">
    <v-card>
      <v-card-title>Edit Ad</v-card-title>
      <v-card-text>
        <v-text-field v-model="localAd.name" label="Ad Name" />
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

const props = defineProps<{ modelValue: boolean, ad: { name: string } }>()
const emit = defineEmits(['update:modelValue', 'save'])
const localAd = ref({ ...props.ad })

const close = () => emit('update:modelValue', false)
const save = () => { emit('save', localAd.value); close() }

const modal = computed({
  get() {
    if (props.modelValue) localAd.value = { ...props.ad };
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script> 