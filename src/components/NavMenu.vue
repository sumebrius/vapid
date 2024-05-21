<script setup>
import NavMenuLink from './NavMenuLink.vue'
import NavMenuInput from './NavMenuInput.vue'
import NavSubMenu from './NavSubMenu.vue'

import ApiOperations from '@/pages/ApiOperations.vue'
import SpecDump from '@/pages/SpecDump.vue'
import SpecInfo from '@/pages/SpecInfo.vue'

import { openapi } from '../state/openapi.js'

const activePage = defineModel()

function selectLink(page) {
  activePage.value = page
}

async function loadSpec(url) {
  openapi.loadSpec(url)
}
</script>

<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary-subtle text-primary-emphasis">
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
      <a href="#" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
        <span class="fs-5 d-none d-sm-inline">Vapid</span>
      </a>
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
      >
        <NavMenuInput
          buttonIcon="bi-bar-chart-steps"
          placeholder="Spec Location"
          @submit="loadSpec"
        />
        <template v-if="openapi.loaded">
          <NavMenuLink
            icon="bi-info-square"
            title="API Information"
            @click="selectLink(SpecInfo)"
          />
          <NavMenuLink
            icon="bi-braces-asterisk"
            title="Operations by path"
            @click="selectLink(ApiOperations)"
          >
            <NavSubMenu
              :children="Object.keys(openapi.schema.paths)"
              v-show="activePage === ApiOperations"
            />
          </NavMenuLink>
          <NavMenuLink icon="bi-house" title="Spec Dump" @click="selectLink(SpecDump)" />
        </template>
      </ul>
      <hr />
    </div>
  </div>
</template>
