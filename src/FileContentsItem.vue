<script setup lang="ts">
import { ref } from 'vue'
import { getDroppableProps } from './draggingUtil'

const props = defineProps<{
  directoryId: string
}>()

const itemRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div
    ref="itemRef"
    class="p-2 m-2 bg-white"
    v-bind="getDroppableProps({ directoryId: props.directoryId })"
  >
    目录{{ props.directoryId }}
  </div>
</template>

<style scoped></style>
