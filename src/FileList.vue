<script setup lang="ts">
import DirectoryItem from './DirectoryItem.vue'
import FileListItem from './FileListItem.vue'
</script>

<template>
  <div class="bg-yellow-50 flex-1 flex flex-col gap-4">
    <div class="flex">
      <DirectoryItem directoryId="x" />
      <DirectoryItem directoryId="y" />
    </div>

    <div class="flex">
      <FileListItem fileId="A" />
      <FileListItem fileId="B" />
    </div>
  </div>
</template>

<style scoped></style>
