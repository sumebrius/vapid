<script setup>
import { ref } from 'vue'

defineProps(['buttonIcon', 'placeholder'])
const emit = defineEmits(['submit'])

const input = ref(null)

function submit() {
  if (input.value) {
    emit('submit', input.value.value)
  }
}
</script>

<template>
  <form class="d-flex w-100" @submit="submit">
    <button class="btn btn-outline-primary me-2" type="button" @click="submit">
      <i :class="buttonIcon"></i>
    </button>
    <input type="text" class="form-control" :placeholder ref="input" />
  </form>
</template>
