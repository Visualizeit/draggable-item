<script lang="ts" setup>
import { ref } from 'vue'
import type { CustomMenuOption } from './menuOptions'
import DropIndicator from './DropIndicator.vue'

const props = defineProps<{
  option: CustomMenuOption
}>()

const itemRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div ref="itemRef" class="item flex flex-col h-full relative">
    <DropIndicator :option="option" />
    <div class="flex-1 flex items-center">
      {{ props.option.label }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
