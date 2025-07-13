import { ComponentType, useEffect, useLayoutEffect, useState, useRef, useCallback } from 'react'
import {useQueryState} from "https://ruucm.github.io/shadergradient/shadergradient@2.0.27/ShaderGradientStateless/index.mjs"

import {
  useUIStore,

  useFigma,
  useBillingInterval,
} from '../../store'

import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
  postFigmaMessageForExport,
} from './FigmaApi'

import { useDBTable } from 'https://framer.com/m/SupabaseConnector-ARlr.js'

import {
  STRIPE_BILLING_URL,
  STRIPE_BUY_YEARLY_URL,
  STRIPE_BUY_MONTHLY_URL,
} from './consts'



// SHARED FUNCTIONS
function useUserDB(channel = 'sg-figma-hook') {
  const [figma] = useFigma()
  const figma_user_id = figma.user?.id
  console.log(figma_user_id, 'figma_user_id')

  const [rows, dbLoading] = useDBTable('users', channel)
  return [rows.find((r) => r.figma_user_id === figma_user_id), dbLoading]
}

function useSubscription(subId) {
  const [userDB, userDBLoading] = useUserDB()
  const userId = userDB?.id

  const [subscriptionRows, dbLoading] = useDBTable('subscriptions',  subId)
  const subscription = subscriptionRows.find(
    (r) => r.user_id === userId && r.status === 'active'
  )
  return [subscription, userDBLoading || dbLoading]
}

function updateResolution({ setWidth, setHeight, pixelDensity }) {
  const r3fCanvas = document.getElementById('gradientCanvas')
  .children[0].children[0] as HTMLCanvasElement

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

// 🟢 ON 'SNAPSHOT' BUTTON
export function insertCanvasAsImage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma() // need to attatch once to listen figma selection changes
    const [, setError] = useFigma()
    const [enabled, setEnabled] = useState(false)

    // const enabled = figma.selection > 0
    console.log(figma)
    // const enabled = true
    useEffect(() => {
      setEnabled(figma.selection > 0)
      if (figma.selection > 0) setError('')
    }, [figma.selection])


    return (
      <Component
        {...props}
        style={{ ...style, cursor: enabled? 'pointer' :'default' , opacity: enabled ? 1 : 0.5, PointerEvent: enabled? 'auto':'none' }}
        onClick={() => {
          if (enabled) postFigmaMessageForSnapShot(() => void 0)
          else setError('Please select a frame on the canvas') // move to the alert variant
        }}
      />
    )
  }
}

// 🟢 ON 'EXTRACT GIF/VIDEO' BUTTON
export function OpenGIFPage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma()
    // const [userDB] = useUserDB('sg-info')
    // const [subscription, subDBLoading] = useSubscription('sub1')

    const enabled = figma.selection > 0
    const [, setError] = useFigma()

    const [, setRange] = useQueryState('range')

    const [, setRangeStart] = useQueryState('rangeStart')
    const [, setRangeEnd] = useQueryState('rangeEnd')
    const [, setPixelDensity] = useQueryState('pixelDensity')
    const [, setToggleAxis] = useQueryState('toggleAxis')
    const [, setZoomOut] = useQueryState('zoomOut')

    useEffect(() => {
      if (enabled ){setError('')} 
      else{
        setError('Please select a frame on the canvas')
      }
    }, [enabled])

    return (
      <Component
        {...props}
        style={{ ...style, cursor: enabled? 'pointer' :'default' , opacity: enabled ? 1 : 0.5, PointerEvent: enabled? 'auto':'none' }}
        onClick={() => {     
            setRange('enabled')
              setRangeStart(5)
              setRangeEnd(8)
              setPixelDensity(2)
              setToggleAxis(false)
              setZoomOut(false)
        }}
       onGIFNoDB={() => console.log('onGIFNoDB (ignore the default event)')}
       onGIF={() => console.log('onGIF (ignore the default event)')}
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

// 🟢 ON 'ADD TO CANVAS' BUTTON (Export page)
export function extractGIF(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [progress, setProgress] = useState(-1)
    const [error, setError] = useFigma()
    const loading = progress >= 0 && progress < 1
    const controllerRef = useRef(null)

    const [figma] = useFigma()
    const enabled = figma.selection > 0
    
    const [animate, setAnimate] = useQueryState('animate')
    const [, setUTime] = useQueryState('uTime')
    const [range, setRange] = useQueryState('range')
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [frameRate] = useQueryState('frameRate')
    const [pixelDensity] = useQueryState('pixelDensity')
    const [destination] = useQueryState('destination')
    const [width, setWidth] = useState(333)
    const [height, setHeight] = useState(333)
    const [format] = useQueryState('format')
    const [grain] = useQueryState('grain')

    const [duration, setDuration] = useState(0)
    const [size, setSize] = useState(0)
    const startTimeRef = useRef(0)
    const animationFrameRef = useRef(null)

    const figma_user_id = figma.user?.id
    const [rows, dbLoading, insertRow, updateRow] = useDBTable(
      'users',
      'sg-figma'
    )
    const userDB = rows.find((r) => r.figma_user_id === figma_user_id)
    const trialLeft = getTrialLeft(userDB?.trial_started_at)
    const [subscription, subDBLoading] = useSubscription('sub1')
    const needSubscribe = trialLeft <= 0 && !subDBLoading && !subscription

    useEffect(()=>{
      console.log(subscription, userDB, 'subscription, userDB')
      console.log(trialLeft)
    },[subscription, userDB])

    useEffect(()=>{
      console.log(destination, 'destination')
    },[destination])

    const [titleText, setTitleText] = useState('')
    
    useEffect(() => {
      const newTitleText = needSubscribe
        ? 'Upgrade to Pro'
        : destination === 'onCanvas'
        ? 'Add GIF to canvas'
        : 'Download'
      setTitleText(newTitleText)
    }, [destination, needSubscribe])

    const creditText =`(${trialLeft} days left)`

    useEffect(() => {
      setDuration(rangeEnd - rangeStart)
    }, [rangeStart, rangeEnd])


    useEffect(() => {
      setSize(estimateSize({ format, duration, frameRate, pixelDensity }))

      // setTimeout(() => {
      //   updateResolution({ setWidth, setHeight, pixelDensity })
      // }, 100) // need a delay until the canvas dom mounted
    }, [format, duration, pixelDensity, frameRate])

    // handle resize plugin
    useLayoutEffect(() => {
      function updateSize() {
        updateResolution({ setWidth, setHeight, pixelDensity })
      }
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }, [pixelDensity])

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

    // Function to update uTime based on elapsed time
    const updateTime = useCallback(() => {
      if (!loading) return;
      
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const playhead = rangeStart + (elapsed % duration);
      setUTime(playhead);
      
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }, [loading, rangeStart, duration, setUTime]);

    // Start/stop animation based on loading state
    useEffect(() => {
      if (loading) {
        startTimeRef.current = Date.now();
        updateTime();
      } else {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      }
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [loading, updateTime]);

    // Cleanup controller on unmount
    useEffect(() => {
      return () => {
        if (controllerRef.current) {
          controllerRef.current.abort();
        }
      };
    }, []);

    const handleAbort = useCallback(() => {
      if (controllerRef.current) {
        controllerRef.current.abort();
        setProgress(-1);
        setAnimate('on');
        console.log('Export aborted');
      }
    }, [setAnimate]);

    const startExport = useCallback(() => {
      // Create new controller
      controllerRef.current = new AbortController();
      setRange('enabled');

      if (enabled && valid) {
        if (needSubscribe) {
          props?.onTapGIFUpgrade();
          console.log('onTapGIFUpgrade');
        } else {
          if (!userDB) {
            props?.onTapGIFNoDB();
            console.log('onTapGIFNoDB');
          } else {
            setProgress(0);
            startTimeRef.current = Date.now();
            console.log('startTime', startTimeRef.current);
            // Only proceed with export if user has valid subscription/trial
            if (subscription || trialLeft > 0) {
              postFigmaMessageForExport(option, setProgress, controllerRef.current);
            } else {
              console.log('No valid subscription or trial');
              props?.onTapGIFUpgrade();
            }
          }
        }
      } else {
        props?.onTapGIF();
      }
    }, [enabled, valid, needSubscribe, userDB, option, setProgress, setRange, props, subscription, trialLeft]);

    let variant = 'dbLoading'
    if (loading) variant = 'loading'
    else if (size > 300) variant = 'error'
    else if (!enabled) variant = 'error'
    else if (!subDBLoading && !subscription) variant = 'default'
    else if (!subDBLoading && subscription) variant = 'pro'
    else if (needSubscribe) variant = 'upgrade'

// useEffect(()=>{
//   console.log(subscription, userDB, 'subscription, userDB')
//   console.log(trialLeft)
// },[subscription, userDB])

    useEffect(() => {
      if (!enabled) {
        setError('Select a frame on the canvas')
      }
      if (size > 300) {
        setError('You can only add GIF under 300mb on canvas')
      }
    }, [enabled, size, setError])

    return (
      <>
        <Component
          {...props}
          key={progress}
          style={{ ...style, cursor: 'pointer' }}
          onClick={startExport}
          onTapGIFUpgrade={() => console.log('onTapGIFU (ignore the default event)')}
          onTapGIFNoDB={() => console.log('onTapGIFN (ignore the default event)')}
          progress={progress * 100}
          title={error !== '' ? error : titleText}
          credit={!subscription ? creditText : null}
          variant={variant}
        />
        {variant === 'loading' && (
          <div
            onClick={handleAbort}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              cursor: 'wait',
              // background: 'yellow',
              // opacity: 0.3
            }}
          />
        )}
      </>
    );
  };
}

// 🟢 ON UPGRADE - SHOW 'START' BUTTON AND SIGNED UP EMAIL
export function isUpgraded(Component): ComponentType {
  return (props) => {
    const [subscription] = useSubscription(props['data-framer-name'])
    if (subscription) return <Component {...props} />
  }
}

// 🟢 DURING UPGRADE - SHOW CHECK YOUR BROWSER TEXT, AND ON UPGRADE - UPGRADED TEXT
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

// 🟢 ON USER EMAIL AFTER SIGN UP
export function userEmail(Component): ComponentType {
  return (props) => {
    const [userDB] = useUserDB()
    return <Component {...props} text={userDB?.email || ''} />
  }
}

// 🟢 ON USER INFO COMPONENT
export function userInfo(Component): ComponentType {
  return (props) => {
    const [subscription, subDBLoading] = useSubscription('userInfo-channel')
    const [userDB] = useUserDB('sg-info')
    console.log(subscription, 'subscription')

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
        email={userDB ? `${userDB?.email}` : ''}
        variant={variant}
      />
    )
  }
}


// 🟢 ON 'UPGRADE' BUTTON (Upgrade page)
export function subscribeLink(Component): ComponentType {
  return (props) => {
    const [figma] = useFigma()
    const [userDB] = useUserDB()
    const [billingInterval] = useBillingInterval()
    const isYearly = billingInterval === 'year'

    return (
      <Component
        {...props}
        onClick={() => {
          window.open(
            `${
              isYearly ? STRIPE_BUY_YEARLY_URL : STRIPE_BUY_MONTHLY_URL
            }?prefilled_email=${encodeURIComponent(
              userDB?.email
            )}&client_reference_id=${figma.user?.id}`,
          )
        }}
    
      />
    )
  }
}

// 🟢 ON PRICE TOGGLE (Upgrade page)
export function TogglePriceFigma(Component): ComponentType {
  return (props) => {
    const [, setBillingInterval] = useBillingInterval()

    return (
      <Component
        {...props}
        onMonthly={() => setBillingInterval('month')}
        onYearly={() => setBillingInterval('year')}
      />
    )
  }
}

// 🟢 ON PRICE TOGGLE (Upgrade page)
export function PriceFigma(Component): ComponentType {
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

// 🟢 ON PRICE TOGGLE (Upgrade page)
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


export function LoadViewAfterStyleSheet(Component): ComponentType {
  return (props: any) => {
    useFigmaMessage()
    const [foundStylesheet, setFoundStylesheet] = useState(true) // TODO : It's set to true by default for now

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

// export function GIFStatusOverride(Component): ComponentType {
//   return ({ ...props }: any) => {
//     const [rangeStart] = useQueryState('rangeStart')
//     const [rangeEnd] = useQueryState('rangeEnd')
//     const [pixelDensity] = useQueryState('pixelDensity')
//     const [frameRate] = useQueryState('frameRate')
//     const [destination] = useQueryState('destination')
//     const [width, setWidth] = useState(333)
//     const [height, setHeight] = useState(333)
//     const [format] = useQueryState('format')

//     const sizeLimit = 300

//     const [duration, setDuration] = useState(0)
//     const [size, setSize] = useState(0)
//     useEffect(() => {
//       setDuration(rangeEnd - rangeStart)
//     }, [rangeStart, rangeEnd])

//     useEffect(() => {
//       setSize(estimateSize({ format, duration, frameRate, pixelDensity }))

//       setTimeout(() => {
//         updateResolution({ setWidth, setHeight, pixelDensity })
//       }, 100) // need a delay until the canvas dom mounted
//     }, [format, duration, pixelDensity, frameRate])

//     // handle resize plugin
//     useLayoutEffect(() => {
//       function updateSize() {
//         updateResolution({ setWidth, setHeight, pixelDensity })
//       }
//       window.addEventListener('resize', updateSize)
//       return () => window.removeEventListener('resize', updateSize)
//     }, [pixelDensity])

//     return (
//       <Component
//         {...props}
//         size={`${Math.ceil(size * 10) / 10}MB`}
//         duration={`(${Math.ceil(duration * 10) / 10}s)`}
//         resolution={`${width} x ${height} px`}
//         variant={
//           size > sizeLimit && destination === 'onCanvas'
//             ? 'Error'
//             : destination === 'localFile'
//             ? 'Export'
//             : 'Default'
//         }
//       />
//     )
//   }
// }




// 🟢 ON EMAIL INPUT (Trial page)
export function StartTrial(Component): ComponentType {
  return (props: any) => {
    const [, , insertRow] = useDBTable('users', 'sg-figma-t')
    const [figma] = useFigma()
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


// 🟢 ON ERROR COMPONENT 
export function Error(Component): ComponentType {
  return ({ ...props }: any) => {
    const [error] = useFigma()
    const [variant, setVariant] = useState('hidden')

    useEffect(() => {
      if (error !== ''){
        setVariant('onError')
      } else {
        setVariant('hidden')
      }
    }, [error])

      return (
          <Component
              {...props}
              errorText={error}
              variant={error === "" ? "hidden" : "onError"}
          />
      )
  }
}

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
