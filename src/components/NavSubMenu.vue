<script setup>
import { strToId } from '@/util'

defineProps(['children'])

function scrollTo(item) {
  console.log(item, strToId(item))
  document.getElementById(strToId(item)).scrollIntoView()
}
</script>

<template>
  <ul class="nav flex-column ms-1">
    <li class="w-100 ms-4" v-for="title in children" :key="title" @click.stop="scrollTo(title)">
      <a class="nav-link px-0" role="button">
        <span class="d-none d-sm-inline">{{ title }}</span>
      </a>
    </li>
  </ul>
</template>
