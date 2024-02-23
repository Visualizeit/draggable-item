<script lang="ts" setup>
import { useFileDraggable } from './useFileDraggable'
import { useSelectedStore } from './useSelectedStore'

defineProps<{
  directoryId: string
}>()

const { isSelected } = useSelectedStore()
const { getDraggableProps, getDroppableProps } = useFileDraggable()
</script>

<template>
  <div
    class="size-20 bg-green-500 text-white"
    v-bind="{
      ...getDraggableProps({ type: 'directory', value: directoryId }),
      ...getDroppableProps({ directoryId })
    }"
  >
    文件夹{{ directoryId }}
    <input type="checkbox" :checked="isSelected(directoryId)" />
  </div>
</template>

<style scoped>
[data-dragover='true'] {
  background-color: red;
}
</style>
