<script setup>
import OperationCard from '../components/OperationCard.vue'

import { openapi } from '../state/openapi.js'
</script>

<template>
  <OperationCard v-for="(operations, path) in openapi.schema.paths" :path :operations :key="path" />
  <div class="mb-4" v-for="(value, key) in openapi.schema.paths" :key="key">
    <h2>{{ key }}</h2>
    {{ value }}
  </div>
</template>
