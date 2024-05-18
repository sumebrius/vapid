<script setup>
import NavMenu from './components/NavMenu.vue'

import ApiOperations from './pages/ApiOperations.vue'
import SpecDump from './pages/SpecDump.vue'
import SpecInfo from './pages/SpecInfo.vue'

import { openapi } from './state/openapi.js'
import { ref } from 'vue'

const activePage = ref('SpecInfo')

const pages = {
  SpecDump,
  SpecInfo,
  ApiOperations
}
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <NavMenu v-model="activePage" />
      <div class="col py-3">
        <div class="p-4">
          <h1 class="mb-4">
            {{ openapi.title }}
          </h1>
          <component :is="pages[activePage]" />
        </div>
      </div>
    </div>
  </div>
</template>
