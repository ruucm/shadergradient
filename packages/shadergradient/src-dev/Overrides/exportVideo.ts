import { sleep } from './utils'

export async function exportVideo(duration) {
  const recordingTimeMS = duration * 1000
  const preview: any = document.getElementById('gradientCanvas')
    ?.children[0] as HTMLCanvasElement

  preview.captureStream = preview.captureStream || preview.mozCaptureStream

  startRecording(preview.captureStream(), recordingTimeMS).then(
    (recordedChunks) => {
      let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' })
      const videoUrl = URL.createObjectURL(recordedBlob)
      const videoElement = document.createElement('video')
      videoElement.controls = true
      videoElement.src = videoUrl
      document.body.appendChild(videoElement)

      console.log(
        `Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`
      )
    }
  )
}
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream)
  let data = []

  recorder.ondataavailable = (event) => data.push(event.data)
  recorder.start()
  console.log(`${recorder.state} for ${lengthInMS / 1000} seconds…`)

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve
    recorder.onerror = (event: any) => reject(event.name)
  })

  let recorded = sleep(lengthInMS * 1000).then(() => {
    if (recorder.state === 'recording') {
      recorder.stop()
    }
  })

  return Promise.all([stopped, recorded]).then(() => data)
}
