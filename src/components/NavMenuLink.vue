<script setup>
defineProps(['icon', 'title'])
</script>

<template>
  <li class="nav-item">
    <a href="#" class="nav-link align-middle px-0">
      <i class="fs-4" :class="icon"></i> <span class="ms-1 d-none d-sm-inline">{{ title }}</span>
    </a>
    <slot></slot>
  </li>
</template>
