<script setup lang="ts">
import { ref } from 'vue'
import { NMenu } from 'naive-ui'
import { menuOptions } from './menuOptions'
import { useFileDraggable } from './useFileDraggable'

const { getDroppableProps } = useFileDraggable()

const expandedKeys = ref<string[]>([])
</script>

<template>
  <div class="bg-gray-100 w-40">
    <NMenu
      v-model:expandedKeys="expandedKeys"
      :options="menuOptions"
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

</style>
