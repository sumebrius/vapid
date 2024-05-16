<script setup>
import { openapi } from '../state/openapi.js'
</script>

<template>
  <div class="mb-4" v-for="(value, key) in openapi.schema" :key="key">
    <h2>{{ key }}</h2>
    <div>{{ value }}</div>
  </div>
</template>
