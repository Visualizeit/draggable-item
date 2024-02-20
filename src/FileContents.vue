<script setup lang="ts">
import FileContentsItem from './FileContentsItem.vue'

const data = [1, 2, 3, 4, 5, 6]
</script>

<template>
  <div class="bg-gray-100 w-40">
    <FileContentsItem v-for="item in data" :key="item" :directoryId="item.toString()" />
  </div>
</template>

<style scoped></style>
