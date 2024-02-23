<script setup lang="ts">
import { useFileDraggable } from './useFileDraggable'

const props = defineProps<{
  directoryId: string
}>()

const { getDroppableProps } = useFileDraggable()
</script>

<template>
  <div class="p-2 m-2 bg-white" v-bind="getDroppableProps({ directoryId })">
    目录{{ props.directoryId }}
  </div>
</template>

<style scoped></style>
