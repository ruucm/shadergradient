import { loadImage, sleep } from './utils'

// Helper to restore canvas after export
export function restoreCanvas(originalStyle: string) {
  const canvasContainer = document.getElementById('gradientCanvas')
  if (canvasContainer && originalStyle) {
    canvasContainer.style.cssText = originalStyle
    window.dispatchEvent(new Event('resize'))
  }
}

export async function exportImage(nodeWidth?: number, nodeHeight?: number) {
  const canvasContainer = document.getElementById('gradientCanvas')
  const r3fCanvas = canvasContainer?.children[0]?.children[0] as HTMLCanvasElement

  if (!canvasContainer || !r3fCanvas) {
    console.error('Canvas not found')
    throw new Error('Canvas not found')
  }

  const originalContainerStyle = canvasContainer.style.cssText

  // Resize canvas to target size (off-screen during export)
  if (nodeWidth && nodeHeight && nodeWidth > 0 && nodeHeight > 0) {
    canvasContainer.style.position = 'fixed'
    canvasContainer.style.top = '-9999px'
    canvasContainer.style.left = '-9999px'
    canvasContainer.style.width = nodeWidth + 'px'
    canvasContainer.style.height = nodeHeight + 'px'

    window.dispatchEvent(new Event('resize'))
    await sleep(0.5)
  }

  const dataURL = r3fCanvas.toDataURL('image/png', 1.0)

  const image = await loadImage(dataURL)
  console.log('Image has loaded')
  const view: any = await imageToUint8Array(image)
  console.log(`${view.length} bytes!.`)

  // Return both the result and the original style for later restoration
  return { bytes: view, originalStyle: originalContainerStyle }
}

async function imageToUint8Array(image) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    context.canvas.width = image.width
    context.canvas.height = image.height
    context.drawImage(image, 0, 0)

    context.canvas.toBlob((blob) =>
      blob
        .arrayBuffer()
        .then((buffer) => resolve(new Uint8Array(buffer)))
        .catch(reject)
    )
  })
}
