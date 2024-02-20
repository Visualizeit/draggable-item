<script lang="ts" setup>
import { getDraggableProps, getDroppableProps } from './draggingUtil'

const props = defineProps<{
  directoryId: string
}>()
</script>

<template>
  <div
    class="size-20 bg-green-500 text-white"
    v-bind="{
      ...getDraggableProps({ type: 'directory', value: props.directoryId }),
      ...getDroppableProps({ directoryId: props.directoryId })
    }"
  >
    文件夹{{ props.directoryId }}
  </div>
</template>
