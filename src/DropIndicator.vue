<script lang="ts" setup>
import type { CustomMenuOption } from './menuOptions'
import { useFileDraggable } from './useFileDraggable'
import { MENU_WIDTH, INDICATOR_WIDTH } from './constants'

const props = defineProps<{
  option: CustomMenuOption
}>()

const { getDroppableProps } = useFileDraggable()
</script>

<template>
  <div
    class="line flex"
    :style="{
      left: -(INDICATOR_WIDTH * props.option.parents.length) + 'px'
    }"
  >
    <div class="flex">
      <div
        v-for="parent in props.option.parents"
        :key="parent"
        class="indicator pr-1"
        :style="{ width: INDICATOR_WIDTH + 'px' }"
        v-bind="
          getDroppableProps({
            directoryId: (parent) + '(父节点)'
          })
        "
      >
        <div class="bg-blue-200 h-full w-full pointer-events-none" />
      </div>
    </div>
    <div
      class="bg-blue-500 h-full"
      :style="{ width: MENU_WIDTH + 'px' }"
      v-bind="
        getDroppableProps({
          directoryId: (option.label as string) + ' 上方'
        })
      "
    />
  </div>
</template>

<style lang="scss" scoped>
.line {
  top: -3px;
  height: 6px;
  position: absolute;
  opacity: 0;
}

.line:has([data-dragover='true']) {
  opacity: 1;
}

.indicator[data-dragover='true'],
.indicator[data-dragover='true'] ~ .indicator {
  & div {
    @apply bg-blue-500;
  }
}
</style>
