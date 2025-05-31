<template>
  <v-dialog v-model="modal" max-width="400">
    <v-card>
      <v-card-title>Edit Company</v-card-title>
      <v-card-text>
        <v-text-field v-model="localCompany.name" label="Company Name" />
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

const props = defineProps<{ modelValue: boolean, company: { name: string } }>()
const emit = defineEmits(['update:modelValue', 'save'])
const localCompany = ref({ ...props.company })

const close = () => emit('update:modelValue', false)
const save = () => { emit('save', localCompany.value); close() }

const modal = computed({
  get() {
    if (props.modelValue) localCompany.value = { ...props.company };
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script> 