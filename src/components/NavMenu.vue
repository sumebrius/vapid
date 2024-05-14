<script setup>
import NavMenuItem from './NavMenuItem.vue'
import NavMenuInput from './NavMenuInput.vue'
</script>

<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary-subtle text-primary-emphasis">
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
      <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
        <span class="fs-5 d-none d-sm-inline">Vapid</span>
      </a>
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
      >
        <NavMenuInput buttonIcon="bi-bar-chart-steps" placeholder="Spec Location" />
      </ul>
      <hr />
    </div>
  </div>
</template>
