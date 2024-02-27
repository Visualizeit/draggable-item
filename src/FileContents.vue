<script setup lang="tsx">
import { ref } from 'vue'
import { NMenu, type MenuOption } from 'naive-ui'
import { menuOptions } from './menuOptions'
import { useFileDraggable } from './useFileDraggable'
import LabelRender from './LabelRender.vue'

const { getDroppableProps } = useFileDraggable()

const expandedKeys = ref<string[]>([])

const renderLabel = (option: MenuOption) => <LabelRender option={option} />
</script>

<template>
  <div class="bg-gray-100 w-[226px]">
    <NMenu
      v-model:expandedKeys="expandedKeys"
      class="w-[226px]"
      :options="menuOptions"
      :renderLabel="renderLabel"
      :nodeProps="
        (option) => ({
          ...getDroppableProps({
            directoryId: option.label as string,
            onDragover: () => {
              if (!expandedKeys.includes(option.key as string)) {
                expandedKeys.push(option.key as string)
              }
            }
          })
        })
      "
    />
  </div>
</template>

<style scoped>
:deep(.n-menu-item:has([data-dragover='true']):not(:has(.line[data-dragover='true']))) {
  @apply bg-gray-300;
}

:deep(.n-menu-item-content-header) {
  height: 100%;
}

:deep(.n-menu .n-submenu) {
  margin-top: 0;
}

:deep(.n-menu .n-menu-item) {
  margin-top: 0;
}

:deep(.n-menu:not(.n-menu--responsive) .n-menu-item-content-header) {
  overflow: unset;
}

:deep(.n-menu .n-submenu .n-submenu-children) {
  overflow: unset;
}
</style>
