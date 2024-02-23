export const applyDragoverMark = (element: HTMLElement) => {
  element.dataset.dragover = 'true'
}

export const removeDragoverMark = (element: HTMLElement) => {
  element.dataset.dragover = 'false'
}
