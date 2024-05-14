<script setup>
defineProps(['buttonIcon', 'placeholder'])
</script>

<template>
  <form class="d-flex w-100">
    <button class="btn btn-outline-primary me-2" type="button"><i :class="buttonIcon"></i></button>
    <input type="text" class="form-control" :placeholder />
  </form>
</template>
