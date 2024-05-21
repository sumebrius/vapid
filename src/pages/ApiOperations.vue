<script setup>
import { computed } from 'vue'
import OperationCard from '../components/OperationCard.vue'

import { openapi } from '../state/openapi.js'

const props = defineProps(['tag'])

const operations = computed(() =>
  props.tag === undefined ? openapi.schema.paths : openapi.tags[props.tag].paths
)
</script>

<template>
  <OperationCard v-for="(operations, path) in operations" :path :operations :key="path" />
  <div class="mb-4" v-for="(value, key) in operations" :key="key">
    <h2>{{ key }}</h2>
    {{ value }}
  </div>
</template>
