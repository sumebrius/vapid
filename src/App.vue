<script setup>
import NavMenu from './components/NavMenu.vue'
import SpecInfo from './pages/SpecInfo.vue'

import { openapi } from './state/openapi.js'
import { ref, shallowRef } from 'vue'

const activePage = shallowRef(SpecInfo)
const activePageProps = ref({})
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <NavMenu v-model:activePage="activePage" v-model:activePageProps="activePageProps" />
      <div class="col py-3">
        <div class="p-4">
          <h1 class="mb-4">
            {{ openapi.title }}
          </h1>
          <component :is="activePage" v-bind="activePageProps" />
        </div>
      </div>
    </div>
  </div>
</template>
