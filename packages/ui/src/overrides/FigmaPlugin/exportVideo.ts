import { sleep } from './utils'

let stopped = false
let mediaRecorder: MediaRecorder | null = null
let recordedChunks: Blob[] = []

export async function exportVideo(
  option,
  callback,
  controller
): Promise<{ bytes?: Uint8Array; originalStyle: string }> {
  const { rangeStart, rangeEnd, destination, nodeWidth, nodeHeight } = option
  const duration = rangeEnd - rangeStart // seconds

  stopped = false
  const signal = controller.signal
  signal.addEventListener('abort', () => {
    callback(-1)
    stopped = true
    if (mediaRecorder) mediaRecorder.stop()
  })

  // Get canvas container for resizing
  const canvasContainer = document.getElementById('gradientCanvas')
  const originalStyle = canvasContainer?.style.cssText || ''

  // Resize canvas to target size (off-screen during export)
  if (
    canvasContainer &&
    nodeWidth &&
    nodeHeight &&
    nodeWidth > 0 &&
    nodeHeight > 0
  ) {
    canvasContainer.style.position = 'fixed'
    canvasContainer.style.top = '-9999px'
    canvasContainer.style.left = '-9999px'
    canvasContainer.style.width = nodeWidth + 'px'
    canvasContainer.style.height = nodeHeight + 'px'

    window.dispatchEvent(new Event('resize'))
    await sleep(0.5)
  }

  // Record the video and get the blob
  const blob = await recordVideo(duration, callback)

  if (stopped || !blob) return { originalStyle }

  // Handle output based on destination
  if (destination === 'onCanvas') {
    const arrayBuffer = await blob.arrayBuffer()
    const bytes = new Uint8Array(arrayBuffer)
    return { bytes, originalStyle }
  } else {
    downloadVideo(blob)
    return { originalStyle }
  }
}

async function recordVideo(duration: number, callback): Promise<Blob | null> {
  return new Promise(async (resolve) => {
    const canvasContainer = document.getElementById('gradientCanvas')
    const r3fCanvas = canvasContainer?.children[0]
      ?.children[0] as HTMLCanvasElement

    if (!r3fCanvas || !canvasContainer) {
      console.error('Canvas not found')
      resolve(null)
      return
    }

    recordedChunks = []
    const stream = r3fCanvas.captureStream()
    mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=h264',
      videoBitsPerSecond: 25000000, // 25 Mbps for higher quality
    })

    // Progress tracking
    const interval = setInterval(() => {
      callback((prev) => {
        const progress = prev + 1 / duration
        if (progress >= 1) clearInterval(interval)
        return progress
      })
    }, 1000)

    mediaRecorder.addEventListener('dataavailable', (e) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data)
      }
    })

    mediaRecorder.addEventListener('stop', () => {
      clearInterval(interval)
      if (!stopped) {
        const blob = new Blob(recordedChunks, { type: 'video/webm' })
        resolve(blob)
      } else {
        resolve(null)
      }
    })

    mediaRecorder.start()
    await sleep(duration)
    mediaRecorder.stop()
  })
}

function downloadVideo(blob: Blob) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style.display = 'none'
  a.href = url
  a.download = 'shadergradient.webm'
  a.click()
  window.URL.revokeObjectURL(url)
  document.body.removeChild(a)
}
