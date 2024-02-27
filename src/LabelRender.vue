<script lang="ts" setup>
import { computed, ref } from 'vue'
import { type MenuOption } from 'naive-ui'
import { useElementBounding } from '@vueuse/core'
import { useFileDraggable } from './useFileDraggable'

const props = defineProps<{
  option: MenuOption
}>()

const { getDroppableProps } = useFileDraggable()

const itemRef = ref<HTMLElement | null>(null)

const { left } = useElementBounding(itemRef)

const width = computed(() => 226 - left.value + 'px')
</script>

<template>
  <div ref="itemRef" class="item flex flex-col h-full relative">
    <div
      class="line line-top"
      v-bind="
        getDroppableProps({
          directoryId: (option.label as string) + ' 上方'
        })
      "
    />
    <div class="flex-1 flex items-center">
      {{ props.option.label }}
    </div>
  </div>
</template>

<style scoped>
.line {
  top: -3px;
  width: v-bind(width);
  height: 6px;
  position: absolute;
}

.line[data-dragover='true'] {
  background-color: skyblue;
}
</style>
