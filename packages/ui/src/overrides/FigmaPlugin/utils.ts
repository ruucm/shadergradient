import { useFigma } from '@/store'
import { useDBTable } from 'https://framer.com/m/SupabaseConnector-ARlr.js'
import { useEffect } from 'react'

// ---------- SUBSCRIPTION RELATED -----------
export function useUserDB(channel = 'sg-figma-hook') {
    const [figma] = useFigma()
    const figma_user_id = figma.user?.id
    console.log(figma_user_id, 'figma_user_id')
  
    const [rows, dbLoading] = useDBTable('users', channel)
    return [rows.find((r) => r.figma_user_id === figma_user_id), dbLoading]
  }
  
 export function useSubscription(subId) {
    const [userDB, userDBLoading] = useUserDB()
    const userId = userDB?.id
  
    const [subscriptionRows, dbLoading] = useDBTable('subscriptions',  subId)
    const subscription = subscriptionRows.find(
      (r) => r.user_id === userId && r.status === 'active'
    )
    return [subscription, userDBLoading || dbLoading]
  }
  

  // ---------- EXTRACT RELATED -----------
 export function updateResolution({ setWidth, setHeight, pixelDensity }) {
    const r3fCanvas = document.getElementById('gradientCanvas')
    .children[0].children[0] as HTMLCanvasElement
  
    const { width, height } = r3fCanvas.getBoundingClientRect()
  
    setWidth(Math.round(width * pixelDensity))
    setHeight(Math.round(height * pixelDensity))
  }
  
export function estimateSize({ format, duration, frameRate, pixelDensity }) {
    const p = format === 'webm' ? 0.00745 : 0.149
    const value = p * duration * frameRate * pixelDensity * pixelDensity
    return Math.round(value * 10) / 10 // round to at most 2 decimal places
  }
  
 export function getTrialLeft(trial_started_at, trials) {
    if (!trial_started_at) return trials
  
    let currentDate = new Date()
    let diffInTime = currentDate.getTime() - new Date(trial_started_at).getTime()
    let diffInDays = trials - diffInTime / (1000 * 3600 * 24)
  
    // console.log('diffInDays', diffInDays)
    if (diffInDays < 0) return 0
    return Math.round(diffInDays)
  }

   
// ---------- FIGMA RELATED -----------

 export function useFigmaMessage() {
      // Share Figma states to UI

    const [, setFigma] = useFigma()
  
    useEffect(() => {
      parent.postMessage({ pluginMessage: { type: 'UI_READY' } }, '*') // init selection
      onmessage = (event) => {
        const msg = event.data.pluginMessage
  
        switch (msg?.type) {
          case 'SELECTION':
            setFigma({ selection: msg.selection.length })
            break
  
          case 'USER_INFO':
            setFigma({ user: msg.user })
            break
  
          default:
            break
        }
      }
    }, [])
  }

export function sleep(sec) {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000))
  }
  
  export async function loadImage(src) {
    const image = new Image()
    image.src = src
    await new Promise((resolve, reject) => {
      image.onload = resolve
      image.onerror = reject
    })
    return image
  }
  


export function parseUrlToCode(url) {
    try {
        if (!url.trim().startsWith("http")) {
            // throw new Error(
            //     "Invalid URL: URL must start with http:// or https://"
            // )
        }

        const parsedUrl = new URL(url)
        const params = new URLSearchParams(parsedUrl.search)
        let propsArray = []

        params.forEach((value, key) => {
            let formattedValue = value
            if (
                value === "true" ||
                value === "false" ||
                (!isNaN(Number(value)) && value !== "")
            ) {
                formattedValue = `{${value}}`
            } else {
                formattedValue = `"${value}"`
            }
            propsArray.push(`${key}=${formattedValue}`)
        })

        const formattedProps = propsArray.join("\n  ")
        return `<ShaderGradient\n  ${formattedProps}\n/>`
    } catch (error) {
        console.error("Error parsing URL:", error)
        return null
    }
}


export const copyToClipboard = (text: string) => {
    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.style.position = "fixed" // prevent scrolling to bottom
    textarea.style.opacity = "0"
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()

    try {
        const successful = document.execCommand("copy")
        if (!successful) {
            console.log("error")
        }
    } catch (err) {
        console.error("Fallback: Copy failed", err)
    } finally {
        document.body.removeChild(textarea)
    }
}
