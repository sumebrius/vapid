<script setup>
import { openapi } from '../state/openapi.js'
</script>

<template>
  <div class="container-lg" v-if="openapi.loaded">
    <div>{{ openapi.schema.info.summary }}</div>
    <h3 class="mb-3">Version: {{ openapi.schema.info.version }}</h3>
    <h3 v-if="openapi.description">Description</h3>
    <div v-if="openapi.description" class="mb-3" v-html="openapi.description" />
  </div>
</template>
