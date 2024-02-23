import { ref } from 'vue'
import { z } from 'zod'
import { defineStore } from 'pinia'

export const SelectedDataSchema = z.object({
  type: z.enum(['file', 'directory']),
  value: z.string()
})

export type SelectedData = z.TypeOf<typeof SelectedDataSchema>

export const useSelectedStore = defineStore('selected', () => {
  const selectedItems = ref(new Map<string, SelectedData>())

  const isSelected = (id: string) => selectedItems.value.has(id)

  const toggleSelected = (data: SelectedData) => {
    isSelected(data.value)
      ? selectedItems.value.delete(data.value)
      : selectedItems.value.set(data.value, data)
  }

  const clearSelected = () => {
    selectedItems.value.clear()
  }

  return {
    selectedItems,
    isSelected,
    toggleSelected,
    clearSelected
  }
})
