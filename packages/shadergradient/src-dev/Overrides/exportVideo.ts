import { sleep } from './utils'

let stopped = false
export async function exportVideo(option, callback, controller) {
  const { rangeStart, rangeEnd } = option
  const duration = rangeEnd - rangeStart // seconds

  stopped = false
  recordVideo(duration)
  const signal = controller.signal
  signal.addEventListener('abort', () => {
    callback(-1)
    stopped = true
    clearInterval(interval)
    mediaRecorder.stop()
  })

  // setProgress
  const interval = setInterval(() => {
    callback((prev) => {
      const progress = prev + 1 / duration
      if (progress >= 1) clearInterval(interval)
      return progress
    })
  }, 1000)
}

let mediaRecorder
let recordedChunks = []

export async function recordVideo(duration) {
  const canvas: any = document.getElementById('gradientCanvas')
    ?.children[0] as HTMLCanvasElement

  recordedChunks = []
  const stream = canvas.captureStream()
  mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm;codecs=h264',
    videoBitsPerSecond: 8000000, // 8 Mbps
  })

  mediaRecorder.addEventListener('dataavailable', (e) => {
    if (e.data.size > 0) {
      recordedChunks.push(e.data)
    }
  })

  mediaRecorder.addEventListener('stop', () => {
    if (!stopped) downloadVideo()
  })

  mediaRecorder.start()

  await sleep(duration)
  mediaRecorder.stop()
}

function downloadVideo() {
  const blob = new Blob(recordedChunks, {
    type: 'video/webm',
  })
  const url = URL.createObjectURL(blob)
  const a: any = document.createElement('a')
  document.body.appendChild(a)
  a.style = 'display: none'
  a.href = url
  a.download = 'shadergradient.webm'
  a.click()
  window.URL.revokeObjectURL(url)
}
