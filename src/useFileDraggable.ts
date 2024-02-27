import { storeToRefs } from 'pinia'
import { useSelectedStore, type SelectedData } from './useSelectedStore'
import { applyDragoverMark, removeDragoverMark } from './dragoverMark'
import { dragImage } from './dragImage'

interface GetDroppableParams {
  directoryId: string
  onDragover?(event: DragEvent): void
}

export const useFileDraggable = () => {
  const { selectedItems } = storeToRefs(useSelectedStore())
  const { toggleSelected, clearSelected } = useSelectedStore()

  const getDraggableProps = (data: SelectedData) => ({
    draggable: true,
    onDragstart(event: DragEvent) {
      if (selectedItems.value.size === 0) {
        //没有选中文件时，阻止拖拽
        event.preventDefault()
      }

      if (selectedItems.value.size > 1) {
        //选中多个文件时，启用自定义拖影
        event.dataTransfer?.setDragImage(dragImage, 0, 0)
      }
    },
    onClick() {
      toggleSelected(data)
    }
  })

  const getDroppableProps = ({ directoryId, onDragover }: GetDroppableParams) => ({
    onDragenter(event: DragEvent) {
      //进入时添加拖放样式
      applyDragoverMark(event.target as HTMLElement)
    },
    onDragleave(event: DragEvent) {
      //离开时移除拖放样式
      removeDragoverMark(event.target as HTMLElement)
    },
    onDragover(event: DragEvent) {
      //阻止默认行为，以启用 drop 事件
      event.preventDefault()
      onDragover?.(event)
    },
    onDrop(event: DragEvent) {
      alert(
        `Dropped ${Array.from(
          selectedItems.value,
          ([, value]) => `${value.type} ${value.value}`
        ).join('、')} into directory ${directoryId}`
      )

      //移除拖放样式
      removeDragoverMark(event.target as HTMLElement)
      clearSelected()

      event.stopPropagation()
    }
  })

  return {
    getDraggableProps,
    getDroppableProps
  }
}
