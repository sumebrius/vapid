<script setup>
defineProps(['title', 'href'])
</script>

<template>
  <li class="nav-item">
    <a class="nav-link" :href>{{ title }}</a>
  </li>
</template>
