<script setup>
defineProps(['spec'])
</script>

<template>
  <div class="tab-pane active p-3">
    <p>{{ spec.summary }}</p>
  </div>
</template>
