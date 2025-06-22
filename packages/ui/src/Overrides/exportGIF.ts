import { GIFEncoder as GIFEncoderFast, quantize, applyPalette } from './lib'
import { loadImage, sleep } from './utils'
import { workerStrBlob } from './lib/gif.js/workerStr'

let stopped = false
export async function exportGIF(option, callback, controller) {
  stopped = false
  const { rangeStart, rangeEnd, setAnimate, setUTime, frameRate, grain } =
    option

  const frameRateInterval = 1 / frameRate
  const delay = frameRateInterval * 1000

  setAnimate('off') // animate is always "on" before exporting GIFs
  setUTime(rangeStart)
  const duration = rangeEnd - rangeStart // seconds
  const totalFrames = Math.ceil(duration * frameRate)
  console.log('totalFrames', totalFrames)
  console.log('duration', duration)

  return new Promise(async (resolve, reject) => {
    const frames = new Array(totalFrames).fill(0).map((_, i) => i)
    const signal = controller.signal

    // Set up abort handler
    signal.addEventListener('abort', () => {
      stopped = true
      setAnimate('on')
      callback(-1)
      reject(new Error('Export was cancelled'))
    })

    try {
      if (grain === 'on') {
        // https://github.com/mattdesl/gifenc
        const gif = GIFEncoderFast()

        // We use for 'of' to loop with async await
        for (let i of frames) {
          // Check if stopped before each frame
          if (stopped) {
            break
          }
          // a t value 0..1 to animate the frame
          const playhead = rangeStart + i / frameRate
          // render target frame
          setUTime(playhead)

          const [imageData, width, height]: any = await getImage()
          const { data } = imageData

          // Choose a pixel format: rgba4444, rgb444, rgb565
          const format = 'rgb444'

          // If necessary, quantize your colors to a reduced palette
          const palette = quantize(data, 256, { format })

          // Apply palette to RGBA data to get an indexed bitmap
          const index = applyPalette(data, palette, format)

          // Write frame into GIF
          await gif.writeFrame(index, width, height, { palette, delay })
          console.log('GIF Frame has written')

          await sleep(0.01) // add a break to share UI state updates (setProgress)
          callback(i / (totalFrames - 1))
        }

        if (!stopped) {
          // Finalize stream
          gif.finish()

          // Get a direct typed array view into the buffer to avoid copying it
          const buffer = gif.bytesView()

          if (option.destination === 'localFile') {
            download(buffer, 'shadergradient.gif', { type: 'image/gif' })
          }
          setAnimate('on')

          const b64 = await base64_arraybuffer(buffer)
          const dataURL = 'data:image/gif;base64,' + b64

          resolve(gifToUint8Array(dataURL))
        }
      } else {
        // https://github.com/jnordberg/gif.js
        // @ts-ignore // included GIF lib from head - addScript("https://jnordberg.github.io/gif.js/gif.js?v=3")
        var gif = new GIF({
          workers: 2,
          quality: 10,
          workerScript: URL.createObjectURL(workerStrBlob),
          dither: 'Atkinson', // FloydSteinberg, FalseFloydSteinberg, Stucki, Atkinson (or -serpentine)
        })
        gif.on('finished', async (blob) => {
          if (!stopped && option.destination === 'localFile') {
            downloadBlob(blob, 'shadergradient.gif')
          }
          setAnimate('on')

          const dataURL = await blobToDataURL(blob)
          resolve(gifToUint8Array(dataURL))
        })
        gif.on('progress', (p) => {
          if (!stopped) {
            callback(p)
          }
        })

        const canvas = document.createElement('canvas')
        const ctx: any = canvas.getContext('2d')

        for (let i of frames) {
          if (stopped) {
            break
          }
          // a t value 0..1 to animate the frame
          const playhead = rangeStart + i / frameRate
          // render target frame
          setUTime(playhead)

          // capture image & add it to que
          await gifAddFrame(ctx, gif)
        }

        if (!stopped) {
          gif.render()
        }
      }
    } catch (error) {
      console.error('Export error:', error)
      setAnimate('on')
      callback(-1)
      reject(error)
    } finally {
      if (stopped) {
        setAnimate('on')
      }
    }
  })
}

async function gifAddFrame(ctx, gif) {
    const r3fCanvas = document.getElementById('gradientCanvas')
      .children[0].children[0] as HTMLCanvasElement
  const dataURL = r3fCanvas.toDataURL('image/png', 1.0) // full quality
  const image = await loadImage(dataURL)

  ctx.canvas.width = image.width
  ctx.canvas.height = image.height
  ctx.drawImage(image, 0, 0)

  gif.addFrame(
    new ImageData(
      ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data,
      ctx.canvas.width,
      ctx.canvas.height
    ),
    { delay: 100 }
  )
}

async function gifToUint8Array(dataURL) {
  // Convert base64 data URL to binary string
  const binaryString = atob(dataURL.split(',')[1])
  // Convert binary string to Uint8Array
  const uint8Array = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++)
    uint8Array[i] = binaryString.charCodeAt(i)

  return uint8Array
}

function download(buf, filename, type) {
  const blob = buf instanceof Blob ? buf : new Blob([buf], { type })
  downloadBlob(blob, filename)
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
}

function convertURIToImageData(URI) {
  return new Promise(function (resolve, reject) {
    if (URI == null) return reject()
    var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d'),
      image = new Image()
    image.addEventListener(
      'load',
      function () {
        canvas.width = image.width
        canvas.height = image.height
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        resolve(context.getImageData(0, 0, canvas.width, canvas.height))
      },
      false
    )
    image.src = URI
  })
}

async function getImage() {
    const r3fCanvas = document.getElementById('gradientCanvas')
      .children[0].children[0] as HTMLCanvasElement
  const dataURL = r3fCanvas.toDataURL('image/png', 1.0) // full quality
  const image = await loadImage(dataURL)

  // add the image to the encoder
  const canvas = document.createElement('canvas')
  const context: any = canvas.getContext('2d')

  context.canvas.width = image.width
  context.canvas.height = image.height
  context.drawImage(image, 0, 0)

  return [
    new ImageData(
      context.getImageData(
        0,
        0,
        context.canvas.width,
        context.canvas.height
      ).data,
      context.canvas.width,
      context.canvas.height
    ),
    image.width,
    image.height,
  ]
}

const base64_arraybuffer = async (data) => {
  // Use a FileReader to generate a base64 data URI
  const base64url = await new Promise((r) => {
    const reader = new FileReader()
    reader.onload = () => r(reader.result)
    reader.readAsDataURL(new Blob([data]))
  })

  /*
  The result looks like 
  "data:application/octet-stream;base64,<your base64 data>", 
  so we split off the beginning:
  */
  // @ts-ignore
  return base64url.substring(base64url.indexOf(',') + 1)
}

async function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader()
    reader.onload = function () {
      resolve(reader.result)
    }
    reader.onerror = function () {
      reject(new Error('Failed to convert Blob to Data URL'))
    }
    reader.readAsDataURL(blob)
  })
}
