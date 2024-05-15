<script setup>
import NavMenu from './components/NavMenu.vue'
import { openapi } from './state/openapi.js'
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <NavMenu />
      <div class="col py-3">
        <div class="p-4">
          <h1 class="mb-4">
            {{ openapi.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
