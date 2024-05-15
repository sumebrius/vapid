<script setup>
defineProps(['buttonIcon', 'placeholder'])
const emit = defineEmits(['submit'])

let value

function submit() {
  if (value) {
    emit('submit', value)
  }
}
</script>

<template>
  <form class="d-flex w-100" @submit="submit">
    <button class="btn btn-outline-primary me-2" type="button" @click="submit">
      <i :class="buttonIcon"></i>
    </button>
    <input type="text" class="form-control" :placeholder v-model="value" />
  </form>
</template>
