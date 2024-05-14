<script setup>
import NavMenu from './components/NavMenu.vue'
import { openapi } from './state/openapi.js'
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <NavMenu />
      <div class="col py-3">
        <div>
          {{ openapi }}
        </div>
      </div>
    </div>
  </div>
</template>
