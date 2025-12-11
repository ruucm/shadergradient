import { useFigma } from '@/store'
import { useDBTable } from './useDBTable'
import { useEffect } from 'react'

// ---------- SUBSCRIPTION RELATED -----------
export function useUserDB(channel = 'sg-figma-hook') {
  const [figma] = useFigma()
  const figma_user_id = figma.user?.id
  console.log('[useUserDB] figma_user_id:', figma_user_id)

  // Filter by figma_user_id at DB level (no full table scan)
  const { rows, loading: dbLoading } = useDBTable('users', channel, {
    filter: { column: 'figma_user_id', value: figma_user_id },
    select: 'id, email, figma_user_id, trial_started_at, created_at',
    limit: 1,
    enabled: !!figma_user_id, // Only query when figma_user_id exists
  })

  const foundUser = rows[0] || null
  console.log('[useUserDB] foundUser:', foundUser)
  return [foundUser, dbLoading] as const
}

export function useSubscription(subId: string) {
  const [userDB, userDBLoading] = useUserDB()
  const userId = userDB?.id
  console.log('[useSubscription] userId:', userId)

  // Filter by user_id at DB level (no full table scan)
  const {
    rows: subscriptionRows,
    loading: dbLoading,
    error,
  } = useDBTable('subscriptions', subId, {
    filter: { column: 'user_id', value: userId },
    // Using '*' to fetch all columns - adjust to specific columns after verifying table schema
    select: '*',
    enabled: !!userId, // Only query when userId exists
  })

  console.log('[useSubscription] subscriptionRows:', subscriptionRows)
  if (error) {
    console.error('[useSubscription] error:', error)
  }

  // Find only active subscription
  const subscription = subscriptionRows.find((r) => r.status === 'active')
  console.log('[useSubscription] active subscription:', subscription)
  return [subscription, userDBLoading || dbLoading] as const
}

// ---------- EXTRACT RELATED -----------
export function updateResolution({ setWidth, setHeight, pixelDensity }) {
  const r3fCanvas = document.getElementById('gradientCanvas')?.children[0]
    ?.children[0] as HTMLCanvasElement

  if (!r3fCanvas) {
    console.warn('[updateResolution] Canvas element not found')
    return
  }

  const { width, height } = r3fCanvas.getBoundingClientRect()

  setWidth(Math.round(width * pixelDensity))
  setHeight(Math.round(height * pixelDensity))
}

export function estimateSize({
  format,
  duration,
  frameRate,
  nodeWidth,
  nodeHeight,
}: {
  format: string
  duration: number
  frameRate: number
  nodeWidth?: number
  nodeHeight?: number
}) {
  // Base coefficient per MB for each format (calibrated for ~320x320 base size)
  const p = format === 'webm' ? 0.00745 : 0.149
  const baseSize = 320 * 320 // reference preview canvas size

  // Use actual export dimensions or fall back to base size
  const exportPixels =
    nodeWidth && nodeHeight && nodeWidth > 0 && nodeHeight > 0
      ? nodeWidth * nodeHeight
      : baseSize

  const rawScaleFactor = exportPixels / baseSize

  // GIF uses LZW compression which is more efficient at larger sizes
  // (more repeating patterns to find). Use power of 0.7 for non-linear scaling.
  // WebM (h264) scales more linearly with resolution.
  const scaleFactor =
    format === 'gif' ? Math.pow(rawScaleFactor, 0.7) : rawScaleFactor

  const value = p * duration * frameRate * scaleFactor

  return Math.round(value * 10) / 10 // round to at most 2 decimal places
}

export function getTrialLeft(trial_started_at, trials) {
  if (!trial_started_at) return trials

  let currentDate = new Date()
  let diffInTime = currentDate.getTime() - new Date(trial_started_at).getTime()
  let diffInDays = trials - diffInTime / (1000 * 3600 * 24)

  if (diffInDays < 0) return 0
  return Math.round(diffInDays)
}

// ---------- FIGMA RELATED -----------
export function useFigmaMessage() {
  // Share Figma states to UI
  const [, setFigma] = useFigma()

  useEffect(() => {
    console.log('[useFigmaMessage] Sending UI_READY message to Figma')
    parent.postMessage({ pluginMessage: { type: 'UI_READY' } }, '*')

    onmessage = (event) => {
      const msg = event.data.pluginMessage
      if (!msg) return

      console.log('[useFigmaMessage] Received message from Figma:', msg.type)

      switch (msg.type) {
        case 'SELECTION':
          console.log(
            '[useFigmaMessage] Selection count:',
            msg.selection.length,
            'Node size:',
            msg.nodeWidth,
            'x',
            msg.nodeHeight
          )
          setFigma({
            selection: msg.selection.length,
            nodeWidth: msg.nodeWidth || 0,
            nodeHeight: msg.nodeHeight || 0,
          })
          break

        case 'USER_INFO':
          console.log('[useFigmaMessage] User info received:', msg.user?.id)
          setFigma({ user: msg.user })
          break

        case 'EDITOR_TYPE':
          console.log('[useFigmaMessage] Editor type received:', msg.editorType)
          setFigma({ editorType: msg.editorType })
          break

        default:
          break
      }
    }
  }, [setFigma])
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
    if (!url.trim().startsWith('http')) {
      return null
    }

    const parsedUrl = new URL(url)
    const params = new URLSearchParams(parsedUrl.search)
    let propsArray: string[] = []

    params.forEach((value, key) => {
      let formattedValue = value
      if (
        value === 'true' ||
        value === 'false' ||
        (!isNaN(Number(value)) && value !== '')
      ) {
        formattedValue = `{${value}}`
      } else {
        formattedValue = `"${value}"`
      }
      propsArray.push(`${key}=${formattedValue}`)
    })

    const formattedProps = propsArray.join('\n  ')
    return `<ShaderGradient\n  ${formattedProps}\n/>`
  } catch (error) {
    console.error('Error parsing URL:', error)
    return null
  }
}

export const copyToClipboard = (text: string) => {
  // 최신 Clipboard API 우선 사용
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      () => console.log('[copyToClipboard] Copied successfully'),
      (err) => console.error('[copyToClipboard] Failed:', err)
    )
    return
  }

  // Fallback for older browsers
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()

  try {
    const successful = document.execCommand('copy')
    if (!successful) {
      console.error('[copyToClipboard] execCommand failed')
    }
  } catch (err) {
    console.error('[copyToClipboard] Fallback failed:', err)
  } finally {
    document.body.removeChild(textarea)
  }
}
