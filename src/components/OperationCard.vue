<script setup>
import { ref } from 'vue'
import { strToId } from '@/util'
import OperationTab from './OperationTab.vue'

const props = defineProps(['path', 'operations'])

let currentTab = ref(Object.keys(props.operations)[0])

// TODO - Make these less garish
const tabColour = {
  get: 'bg-success',
  put: 'bg-warning',
  post: 'bg-primary',
  delete: 'bg-danger',
  options: 'bg-info',
  head: 'bg-info',
  patch: 'bg-warning',
  trace: 'bg-info'
}
</script>

<template>
  <div class="card mb-4" :id="strToId(path)">
    <div class="card-header">
      <h3 class="card-title font-monospace mt-2">{{ path }}</h3>
    </div>
    <div class="card-body">
      <div class="card-text">
        <nav class="nav nav-tabs">
          <a
            v-for="(spec, operation) in operations"
            :key="operation"
            class="nav-link text-uppercase"
            :class="[{ active: currentTab === operation }, tabColour[operation]]"
            role="button"
            @click.stop="currentTab = operation"
          >
            {{ operation }}
          </a>
        </nav>
        <div class="tab-content">
          <OperationTab v-bind:spec="operations[currentTab]" />
        </div>
      </div>
    </div>
  </div>
</template>
