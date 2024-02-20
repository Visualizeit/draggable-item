<script setup lang="ts">
import { getDraggableProps } from './draggingUtil'

const props = defineProps<{
  fileId: string
}>()
</script>

<template>
  <div
    class="size-20 bg-red-500 text-white"
    v-bind="getDraggableProps({ type: 'file', value: props.fileId })"
  >
    文件{{ props.fileId }}
  </div>
</template>

<style scoped></style>
