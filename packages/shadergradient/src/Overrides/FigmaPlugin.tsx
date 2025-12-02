import { ComponentType, useEffect, useLayoutEffect, useState } from 'react'
import React from 'react'
import { useAnimationControls } from 'framer-motion'
import * as qs from 'query-string'
import {
  updateGradientState,
  useUIStore,
  PRESETS,
  useURLQueryState,
  useQueryState,
  useFigma,
  useBillingInterval,
} from '../store'
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
  postFigmaMessageForExport,
} from './FigmaApi'
import { cx } from '@/utils'
import { clock } from '@/Gradient/comps/Mesh/useTimeAnimation'
import { useDBTable } from './useDBTable'
import {
  STRIPE_BILLING_URL,
  STRIPE_BUY_YEARLY_URL,
  STRIPE_BUY_MONTHLY_URL,
} from '@/consts'

// example from https://github.com/sonnylazuardi/framer-sites-figma-plugin/
export function createRectangle(Component): ComponentType {
  return (props) => {
    return (
      <Component
        {...props}
        onClick={async () => {
          postFigmaMessage(() => {
            const ellipse = figma.createRectangle()
            ellipse.resize(300, 300)
          })
        }}
      />
    )
  }
}

export function insertCanvasAsImage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma() // need to attatch once to listen figma selection changes
    // const enabled = figma.selection > 0
    const enabled = true

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer', opacity: enabled ? 1 : 0.5 }}
        onTap={() => {
          if (enabled) postFigmaMessageForSnapShot(() => void 0)
          else props?.onTap() // move to the alert variant
        }}
      />
    )
  }
}

export function checkEnabled(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma()
    // const enabled = figma.selection > 0
    const enabled = true

    const [, setRangeStart] = useQueryState('rangeStart')
    const [, setRangeEnd] = useQueryState('rangeEnd')
    const [, setPixelDensity] = useQueryState('pixelDensity')
    const [, setToggleAxis] = useQueryState('toggleAxis')
    const [, setZoomOut] = useQueryState('zoomOut')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer', opacity: enabled ? 1 : 0.5 }}
        onTap={() => {
          // @ts-ignore
          if (enabled === false) {
            props?.onError()
          } else {
            props?.onTap()
            // init gradient ranges, density
            setRangeStart(5)
            setRangeEnd(8)
            setPixelDensity(2)
            setToggleAxis(false)
            setZoomOut(false)
          }
        }}
        onError={() => {
          console.log('error (checkEnabled)')
        }}
      />
    )
  }
}

let controller
const trials = 7

export function goBack(Component): ComponentType {
  return (props) => {
    // cancel extract
    return <Component {...props} onClick={() => controller.abort()} />
  }
}
export function extractGIF(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [progress, setProgress] = useState(-1)
    const loading = progress >= 0 && progress < 1

    const [figma] = useFigma()
    // const enabled = figma.selection > 0
    const enabled = true

    const [animate, setAnimate] = useQueryState('animate')
    const [, setUTime] = useQueryState('uTime')
    const [range, setRange] = useQueryState('range')
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [frameRate] = useQueryState('frameRate')
    const [pixelDensity] = useQueryState('pixelDensity')
    const [destination] = useQueryState('destination')
    const [format] = useQueryState('format')
    const [grain] = useQueryState('grain')

    const [duration, setDuration] = useState(0)
    const [size, setSize] = useState(0)

    const figma_user_id = figma.user?.id
    const [rows, dbLoading, insertRow, updateRow] = useDBTable(
      'users',
      'sg-figma'
    )
    const userDB = rows.find((r) => r.figma_user_id === figma_user_id)
    const trialLeft = getTrialLeft(userDB?.trial_started_at)
    const [subscription, subDBLoading] = useSubscription('sub1')
    const needSubscribe = trialLeft <= 0 && !subDBLoading && !subscription
    const titleText = needSubscribe
      ? 'Upgrade to Pro'
      : destination === 'onCanvas'
      ? 'Add GIF to canvas'
      : 'Download'
    const creditText = !subscription && `(${trialLeft} days left)`

    useEffect(() => {
      setDuration(rangeEnd - rangeStart)
    }, [rangeStart, rangeEnd])

    useEffect(() => {
      setSize(estimateSize({ format, duration, frameRate, pixelDensity }))
    }, [format, duration, pixelDensity, frameRate])

    const valid = animate === 'on' && range === 'enabled' && size < 300
    const option = {
      rangeStart,
      rangeEnd,
      setAnimate,
      setUTime,
      frameRate,
      destination,
      format,
      grain,
    }

    let variant = 'dbLoading'
    if (loading) variant = 'loading'
    else if (size > 300) variant = 'error-1'
    else if (!enabled) variant = 'error-2'
    // when all datas are ready
    else if (!subDBLoading) variant = 'default'
    else if (needSubscribe) variant = 'upgrade'

    return (
      <>
        <Component
          {...props}
          key={progress} // need to flush Framer button
          style={{ ...style, cursor: 'pointer' }}
          onTapGIF={() => {
            controller = new AbortController() // need to make a new one on every exportings

            setRange('enabled')

            if (enabled && valid) {
              if (needSubscribe)
                props?.onTapGIFU() // move to the upgrade variant
              else {
                if (!userDB) props?.onTapGIFN()
                else {
                  // start to extract GIF
                  setProgress(0)
                  console.log('startTime', Date.now())
                  clock.start() // restart the clock
                  postFigmaMessageForExport(option, setProgress, controller)
                }
              }
            } else props?.onTapGIF() // move to the alert variant
          }}
          onTapGIFU={() => console.log('onTapGIFU (ignore the default event)')}
          onTapGIFN={() => console.log('onTapGIFN (ignore the default event)')}
          progress={progress * 100}
          title={titleText}
          credit={creditText}
          variant={variant}
        />
        {/* clickable layer on exporting */}
        {variant === 'loading' && (
          <div
            onClick={() => controller.abort()}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              cursor: 'wait',
            }}
          />
        )}
      </>
    )
  }
}

export function isUpgraded(Component): ComponentType {
  return (props) => {
    const [subscription] = useSubscription(props['data-framer-name'])
    if (subscription) return <Component {...props} />
  }
}
export function upgradingText(Component): ComponentType {
  return (props) => {
    const [subscription] = useSubscription(props['data-framer-name'])
    // if (subscription)
    return (
      <Component
        {...props}
        text={subscription ? 'Upgraded!' : `Check\nyour browser`}
      />
    )
  }
}
export function userEmail(Component): ComponentType {
  return (props) => {
    const [userDB] = useUserDB()
    return <Component {...props} text={userDB?.email || ''} />
  }
}

export function userInfo(Component): ComponentType {
  return (props) => {
    const [subscription, subDBLoading] = useSubscription('userInfo-channel')
    const [userDB] = useUserDB('sg-info')

    let variant = 'Loading'
    if (subDBLoading) variant = 'Loading'
    else if (!userDB) variant = 'NoUser'
    else if (subscription) variant = 'Pro'
    else variant = 'Free'

    return (
      <Component
        {...props}
        supportLink={`${STRIPE_BILLING_URL}?prefilled_email=${encodeURIComponent(
          userDB?.email
        )}`}
        status={subscription ? 'PRO USER' : 'FREE USER'}
        email={userDB ? `(${userDB?.email})` : ''}
        variant={variant}
      />
    )
  }
}

export function extractGIFDEV(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => alert('This feature is under development.')}
      />
    )
  }
}

export function subscribeLink(Component): ComponentType {
  return (props) => {
    const [figma] = useFigma()
    const [userDB] = useUserDB()
    const [billingInterval] = useBillingInterval()
    const isYearly = billingInterval === 'year'

    return (
      <Component
        {...props}
        href={`${
          isYearly ? STRIPE_BUY_YEARLY_URL : STRIPE_BUY_MONTHLY_URL
        }?prefilled_email=${encodeURIComponent(
          userDB?.email
        )}&client_reference_id=${figma.user?.id}`}
      />
    )
  }
}

export function TogglePrice(Component): ComponentType {
  return (props) => {
    const [, setBillingInterval] = useBillingInterval()

    return (
      <Component
        {...props}
        onMonthly={() => setBillingInterval('year')}
        onYearly={() => setBillingInterval('month')}
      />
    )
  }
}
export function Price(Component): ComponentType {
  return (props) => {
    const [billingInterval] = useBillingInterval()

    return (
      <Component
        {...props}
        variant={billingInterval === 'year' ? 'year' : 'month'}
      />
    )
  }
}

export function PriceText(Component): ComponentType {
  return (props) => {
    const [billingInterval] = useBillingInterval()
    const isYearly = billingInterval === 'year'

    return (
      <Component
        {...props}
        text={isYearly ? ' — just $2 a month' : ' — just $4 a month'}
      />
    )
  }
}
export function SaleTag(Component): ComponentType {
  return (props) => {
    const [billingInterval] = useBillingInterval()
    const isYearly = billingInterval === 'year'

    return (
      <Component {...props} opacity={isYearly ? 1 : 0} y={isYearly ? 10 : 0} />
    )
  }
}

export function ArrowLeft(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          let presetNumber
          if (activePreset !== 0) {
            presetNumber = activePreset - 1
          } else {
            presetNumber = PRESETS.length - 1
          }

          setActivePreset(presetNumber)
          updateGradientState(PRESETS[presetNumber].url)
        }}
      />
    )
  }
}
export function ArrowRight(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          let presetNumber
          if (activePreset !== PRESETS.length - 1) {
            presetNumber = activePreset + 1
          } else {
            presetNumber = 0
          }

          setActivePreset(presetNumber)
          updateGradientState(PRESETS[presetNumber].url)
        }}
      />
    )
  }
}

export function ActiveTitle(Component): ComponentType {
  return (props) => {
    const activePreset = useUIStore((state) => state.activePreset)

    return <Component {...props} text={PRESETS[activePreset].title} />
  }
}

// ToolsBox
export function Tool3dAxis(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [toggleAxis, setToggleAxis] = useQueryState('toggleAxis')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => setToggleAxis(!toggleAxis)}
      />
    )
  }
}
export function ToolZoomOut(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [zoomOut, setZoomOut] = useQueryState('zoomOut')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => setZoomOut(!zoomOut)}
      />
    )
  }
}
export function ToolCopy(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [copyUrlText, setCopyUrl] = React.useState('copy url')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={async () => {
          window.navigator.clipboard.writeText(window.location.href)
          setCopyUrl('copied!')
          await setTimeout(() => {
            setCopyUrl('copy url')
          }, 1000)
        }}
      />
    )
  }
}
export function ToolUndo(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          const prevUrls = window.history.state.prevUrls || []

          if (prevUrls.length > 1) {
            prevUrls.pop() // remove current url

            const lastURL = new URL(prevUrls[prevUrls.length - 1]).search
            updateGradientState(lastURL)

            prevUrls.pop() // remove the updated url(lastURL)
            window.history.pushState({ prevUrls }, document.title, '') // sync the prevUrls
          } else alert('no history')
        }}
      />
    )
  }
}

export function UrlInput(Component): ComponentType {
  return (props: any) => {
    const setQueryValue = useURLQueryState()

    const [value, setValue] = useState('')
    const [valid, setValid] = useState(true)

    let variant = 'default'
    if (value) {
      if (valid) variant = 'valid'
      else variant = 'invalid'
    }

    return (
      <Component
        {...props}
        onChange={(e) => {
          const value = e.target.value
          setValue(value)

          if (isValidUrl(value)) setValid(true)
          else setValid(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && valid) {
            setQueryValue(value)
            props?.onKeyDown() // hide the Input (back to the default variant)
          }
        }}
        onSubmit={() => {
          if (valid) {
            setQueryValue(value)
            props?.onSubmit() // hide the Input (back to the default variant)
          }
        }}
        variant={variant}
      />
    )
  }
}

export function LoadViewAfterStyleSheet(Component): ComponentType {
  return (props: any) => {
    useFigmaMessage()
    const [foundStylesheet, setFoundStylesheet] = useState(false)

    useEffect(() => {
      const interval = setInterval(() => {
        const stylesheet = document.getElementById('shadergradient-app-styles')
        if (stylesheet) setFoundStylesheet(true)
      }, 200)

      return () => clearInterval(interval)
    }, [])

    return (
      <Component
        {...props}
        style={{
          ...props.style,
          opacity: foundStylesheet ? 1 : 0,
          zIndex: 2147483640,
        }}
      />
    )
  }
}

const isValidUrl = (urlString) => {
  const state = qs.parse(urlString, {
    parseNumbers: true,
    parseBooleans: true,
    arrayFormat: 'index',
  })

  // TODO: more accurate validation check
  return state.color1 && state.color2 && state.color3
}

// styles
export function HideScrollBar(Component): ComponentType {
  return ({ className, ...props }: any) => (
    <Component {...props} className={cx('hide-scrollbar', className)} />
  )
}

// Share Figma states to UI
function useFigmaMessage() {
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

export function GIFStatusOverride(Component): ComponentType {
  return ({ ...props }: any) => {
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [pixelDensity] = useQueryState('pixelDensity')
    const [frameRate] = useQueryState('frameRate')
    const [destination] = useQueryState('destination')
    const [width, setWidth] = useState(333)
    const [height, setHeight] = useState(333)
    const [format] = useQueryState('format')

    const sizeLimit = 300

    const [duration, setDuration] = useState(0)
    const [size, setSize] = useState(0)
    useEffect(() => {
      setDuration(rangeEnd - rangeStart)
    }, [rangeStart, rangeEnd])

    useEffect(() => {
      setSize(estimateSize({ format, duration, frameRate, pixelDensity }))

      setTimeout(() => {
        updateResolution({ setWidth, setHeight, pixelDensity })
      }, 100) // need a delay until the canvas dom mounted
    }, [format, duration, pixelDensity, frameRate])

    // handle resize plugin
    useLayoutEffect(() => {
      function updateSize() {
        updateResolution({ setWidth, setHeight, pixelDensity })
      }
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }, [pixelDensity])

    return (
      <Component
        {...props}
        size={`${Math.ceil(size * 10) / 10}MB`}
        duration={`(${Math.ceil(duration * 10) / 10}s)`}
        resolution={`${width} x ${height} px`}
        variant={
          size > sizeLimit && destination === 'onCanvas'
            ? 'Error'
            : destination === 'localFile'
            ? 'Export'
            : 'Default'
        }
      />
    )
  }
}

export function Timeline(Component): ComponentType {
  return ({ ...props }: any) => {
    const controls = useAnimationControls()

    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')

    const [duration, setDuration] = useState(rangeEnd - rangeStart)

    const sequence = async () => {
      controls.set({ width: '0%', transition: { duration: 0 } })
      return await controls.start({
        width: '100%',
        transition: {
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      })
    }

    useEffect(() => {
      setDuration(rangeEnd - rangeStart)
      clock.start()
      sequence()
    }, [rangeEnd, rangeStart])

    return <Component {...props} animate={controls} />
  }
}

function useUserDB(channel = 'sg-figma-hook') {
  const [figma] = useFigma()
  const figma_user_id = figma.user?.id

  const [rows, dbLoading] = useDBTable('users', channel)
  return [rows.find((r) => r.figma_user_id === figma_user_id), dbLoading]
}
function useSubscription(subId) {
  const [userDB, userDBLoading] = useUserDB()
  const userId = userDB?.id

  const [subscriptionRows, dbLoading] = useDBTable('subscriptions', subId)
  const subscription = subscriptionRows.find(
    (r) => r.user_id === userId && r.status === 'active'
  )

  return [subscription, userDBLoading || dbLoading]
}

function updateResolution({ setWidth, setHeight, pixelDensity }) {
  const r3fCanvas: any = document.getElementById('gradientCanvas')
    ?.children[0] as HTMLCanvasElement
  const { width, height } = r3fCanvas.getBoundingClientRect()

  setWidth(Math.round(width * pixelDensity))
  setHeight(Math.round(height * pixelDensity))
}

function estimateSize({ format, duration, frameRate, pixelDensity }) {
  const p = format === 'webm' ? 0.00745 : 0.149
  const value = p * duration * frameRate * pixelDensity * pixelDensity
  return Math.round(value * 10) / 10 // round to at most 2 decimal places
}

function getTrialLeft(trial_started_at) {
  if (!trial_started_at) return trials

  let currentDate = new Date()
  let diffInTime = currentDate.getTime() - new Date(trial_started_at).getTime()
  let diffInDays = trials - diffInTime / (1000 * 3600 * 24)

  // console.log('diffInDays', diffInDays)
  if (diffInDays < 0) return 0
  return Math.round(diffInDays)
}

export function StartTrial(Component): ComponentType {
  return (props: any) => {
    const [figma] = useFigma()
    const [, , insertRow] = useDBTable('users', 'sg-figma-t')
    const figma_user_id = figma.user?.id

    return (
      <Component
        {...props}
        onSubmit={(email) => {
          insertRow({ email, figma_user_id, trial_started_at: new Date() })
          props?.onSubmit()
        }}
      />
    )
  }
}
