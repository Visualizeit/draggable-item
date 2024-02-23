<script setup lang="ts">
import { useFileDraggable } from './useFileDraggable'
import { useSelectedStore } from './useSelectedStore'

defineProps<{
  fileId: string
}>()

const { getDraggableProps } = useFileDraggable()
const { isSelected } = useSelectedStore()

</script>

<template>
  <div
    class="size-20 bg-red-500 text-white"
    v-bind="getDraggableProps({ type: 'file', value: fileId })"
  >
    文件{{ fileId }}
    <input type="checkbox" :checked="isSelected(fileId)" />
  </div>
</template>

<style scoped></style>
