import { z } from 'zod'

const DraggingDataSchema = z.object({
  type: z.enum(['file', 'directory']),
  value: z.string()
})

type DraggingData = z.infer<typeof DraggingDataSchema>

const draggingClassName = '!bg-yellow-500',
  applyDraggingStyle = (element: HTMLElement) => element.classList.add(draggingClassName),
  removeDraggingStyle = (element: HTMLElement) => element.classList.remove(draggingClassName)

interface GetDroppableParams {
  directoryId: string
}

let draggingElement: HTMLElement | null = null

export const getDroppableProps = ({ directoryId }: GetDroppableParams) => ({
  onDragenter(event: DragEvent) {
    const target = event.target as HTMLElement

    if (draggingElement !== target) {
      applyDraggingStyle(target)
    }
  },
  onDragleave(event: DragEvent) {
    const target = event.target as HTMLElement
    removeDraggingStyle(target)
  },
  onDragover(event: DragEvent) {
    event.preventDefault()
  },
  onDrop(event: DragEvent) {
    const target = event.target as HTMLElement

    if (draggingElement !== target) {
      removeDraggingStyle(target)

      const data = event.dataTransfer?.getData('text/plain')

      if (data) {
        const json: z.TypeOf<typeof DraggingDataSchema> = JSON.parse(data)

        if (DraggingDataSchema.safeParse(json).success) {
          alert(`Dropped ${json.type} ${json.value} into directory ${directoryId}`)
        }
      }
    }
  }
})

export const getDraggableProps = (data: DraggingData) => ({
  draggable: true,
  onDragstart(event: DragEvent) {
    draggingElement = event.target as HTMLElement

    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', JSON.stringify(data))
    }
  },
  onDragend() {
    draggingElement = null
  }
})
