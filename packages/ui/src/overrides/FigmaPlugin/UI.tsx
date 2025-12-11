import {
  ComponentType,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback,
} from 'react'

import { useFigma, useUIStore, useFigmaPluginStore } from '../../store'

import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
  postFigmaMessageForExport,
} from './FigmaApi'

import { useAnimationControls, useInView } from 'framer-motion'

import { useDBTable } from './useDBTable'

import {
  useQueryState,
  useURLQueryState,
} from '@/components/Shared/ShaderGradientStateless'

import {
  useSubscription,
  getTrialLeft,
  estimateSize,
  updateResolution,
  useFigmaMessage,
  parseUrlToCode,
  copyToClipboard,
} from './utils'

import { isValidUrl } from '../utils'

// 🟢 ON 'SNAPSHOT' BUTTON
export function insertCanvasAsImage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma() // need to attatch once to listen figma selection changes
    const setError = useUIStore((state: any) => state.setError)
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
      setEnabled(figma.selection > 0)
      if (figma.selection > 0) setError('')
    }, [figma.selection])

    return (
      <Component
        {...props}
        style={{
          ...style,
          cursor: enabled ? 'pointer' : 'default',
          opacity: enabled ? 1 : 0.5,
          PointerEvent: enabled ? 'auto' : 'none',
        }}
        onClick={() => {
          if (enabled)
            postFigmaMessageForSnapShot(
              () => void 0,
              figma.nodeWidth,
              figma.nodeHeight
            )
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

    const enabled = figma.selection > 0
    const setError = useUIStore((state: any) => state.setError)

    const [, setRange] = useQueryState('range')

    const [, setRangeStart] = useQueryState('rangeStart')
    const [, setRangeEnd] = useQueryState('rangeEnd')
    const [, setToggleAxis] = useQueryState('toggleAxis')
    const [, setZoomOut] = useQueryState('zoomOut')
    const [, setAnimate] = useQueryState('animate')
    const setFigmaPage = useUIStore((state: any) => state.setFigmaPage)

    useEffect(() => {
      if (enabled) {
        setError('')
      } else {
        setError('Please select a frame on the canvas')
      }
    }, [enabled])

    return (
      <Component
        {...props}
        style={{
          ...style,
          cursor: enabled ? 'pointer' : 'default',
          opacity: enabled ? 1 : 0.5,
          PointerEvent: enabled ? 'auto' : 'none',
        }}
        onClick={() => {
          console.log('onClick GIF')
          setAnimate('on')
          setRange('enabled')
          setToggleAxis(false)
          setZoomOut(false)
          setFigmaPage('gif')
        }}
        onGIFNoDB={() => console.log('onGIFNoDB (ignore the default event)')}
        onGIF={() => console.log('onGIF (ignore the default event)')}
      />
    )
  }
}

let controller
const trials = 7

// 🟢 ON Back button (Export page)
export function goBack(Component): ComponentType {
  return (props) => {
    const figmaPage = useUIStore((state: any) => state.figmaPage)
    const setFigmaPage = useUIStore((state: any) => state.setFigmaPage)
    // cancel extract
    return (
      <Component
        {...props}
        onClick={() => {
          controller.abort()
          if (figmaPage === 'gif') setFigmaPage('control')
        }}
      />
    )
  }
}

// 🟢 ON 'ADD TO CANVAS' BUTTON (Export page)
export function extractGIF(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [progress, setProgress] = useState(-1)
    const setError = useUIStore((state: any) => state.setError)
    const loading = progress >= 0 && progress < 1
    const controllerRef = useRef(null)

    const [figma] = useFigma()
    const enabled = figma.selection > 0

    const [animate, setAnimate] = useQueryState('animate')
    const [, setUTime] = useQueryState('uTime')
    const [range, setRange] = useQueryState('range')
    const [loop, setLoop] = useQueryState('loop')
    const [loopDuration, setLoopDuration] = useQueryState('loopDuration')
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [frameRate] = useQueryState('frameRate')
    const [pixelDensity] = useQueryState('pixelDensity')
    const [destination] = useQueryState('destination')

    const [width, setWidth] = useState(333)
    const [height, setHeight] = useState(333)
    const [format] = useQueryState('format')
    const [grain] = useQueryState('grain')
    const error = useUIStore((state: any) => state.error)

    const [duration, setDuration] = useState(0)
    const [size, setSize] = useState(0)
    const startTimeRef = useRef(0)
    const animationFrameRef = useRef(null)

    const figma_user_id = figma.user?.id
    const {
      rows,
      loading: dbLoading,
      insertRow,
      updateRow,
    } = useDBTable('users', 'sg-figma', {
      filter: { column: 'figma_user_id', value: figma_user_id },
      select: 'id, email, figma_user_id, trial_started_at',
      limit: 1,
      enabled: !!figma_user_id,
    })
    const userDB = rows[0] || null
    const trialLeft = getTrialLeft(userDB?.trial_started_at, trials)
    const [subscription, subDBLoading] = useSubscription('sub1')
    const needSubscribe = trialLeft <= 0 && !subDBLoading && !subscription

    useEffect(() => {
      console.log(subscription, userDB, 'subscription, userDB')
      console.log(trialLeft)
    }, [subscription, userDB])

    useEffect(() => {
      console.log(destination, 'destination')
    }, [destination])

    const [titleText, setTitleText] = useState('')

    // Check if we're in Slides or Buzz (supports video on canvas)
    const supportsVideoOnCanvas =
      figma.editorType === 'slides' || figma.editorType === 'buzz'

    useEffect(() => {
      let newTitleText = 'Download'

      if (needSubscribe) {
        newTitleText = 'Upgrade to Pro'
      } else if (destination === 'onCanvas') {
        if (supportsVideoOnCanvas && format === 'webm') {
          newTitleText = 'Add video to canvas'
        } else {
          newTitleText = 'Add GIF to canvas'
        }
      } else {
        // localFile
        newTitleText = format === 'webm' ? 'Download video' : 'Download GIF'
      }

      setTitleText(newTitleText)
    }, [destination, needSubscribe, format, supportsVideoOnCanvas])

    const creditText = `(${trialLeft} days left)`

    useEffect(() => {
      // Use loopDuration when loop is enabled, otherwise use range
      if (loop === 'on' && loopDuration) {
        setDuration(loopDuration)
      } else {
        setDuration(rangeEnd - rangeStart)
      }
    }, [rangeStart, rangeEnd, loop, loopDuration])

    useEffect(() => {
      setSize(
        estimateSize({
          format,
          duration,
          frameRate,
          nodeWidth: figma.nodeWidth,
          nodeHeight: figma.nodeHeight,
        })
      )

      setTimeout(() => {
        updateResolution({ setWidth, setHeight, pixelDensity })
      }, 100) // need a delay until the canvas dom mounted
    }, [
      format,
      duration,
      pixelDensity,
      frameRate,
      loop,
      loopDuration,
      figma.nodeWidth,
      figma.nodeHeight,
    ])

    // handle resize plugin
    useLayoutEffect(() => {
      function updateSize() {
        updateResolution({ setWidth, setHeight, pixelDensity })
      }
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }, [pixelDensity])

    const valid = animate === 'on' && range === 'enabled' && size < 300

    // Use loopDuration when loop is enabled, otherwise use rangeEnd
    const effectiveRangeEnd =
      loop === 'on' && loopDuration ? loopDuration : rangeEnd
    const effectiveRangeStart = loop === 'on' ? 0 : rangeStart

    const option = {
      rangeStart: effectiveRangeStart,
      rangeEnd: effectiveRangeEnd,
      setAnimate,
      setUTime,
      frameRate,
      destination,
      format,
      grain,
      editorType: figma.editorType,
      nodeWidth: figma.nodeWidth,
      nodeHeight: figma.nodeHeight,
    }

    // Function to update uTime based on elapsed time
    const updateTime = useCallback(() => {
      if (!loading) return

      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const playhead = rangeStart + (elapsed % duration)
      setUTime(playhead)

      animationFrameRef.current = requestAnimationFrame(updateTime)
    }, [loading, rangeStart, duration, setUTime])

    // Start/stop animation based on loading state
    useEffect(() => {
      if (loading) {
        startTimeRef.current = Date.now()
        updateTime()
      } else {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }, [loading, updateTime])

    // Cleanup controller on unmount
    useEffect(() => {
      return () => {
        if (controllerRef.current) {
          controllerRef.current.abort()
        }
      }
    }, [])

    const handleAbort = useCallback(() => {
      if (controllerRef.current) {
        controllerRef.current.abort()
        setProgress(-1)
        setAnimate('on')
        console.log('Export aborted')
      }
    }, [setAnimate])

    const startExport = useCallback(() => {
      // Create new controller
      controllerRef.current = new AbortController()
      setRange('enabled')

      if (enabled && valid) {
        if (needSubscribe) {
          props?.onTapGIFUpgrade()
          console.log('onTapGIFUpgrade')
        } else {
          if (!userDB) {
            props?.onTapGIFNoDB()
            console.log('onTapGIFNoDB')
          } else {
            setProgress(0)
            startTimeRef.current = Date.now()
            console.log('startTime', startTimeRef.current)
            // Only proceed with export if user has valid subscription/trial
            if (subscription || trialLeft > 0) {
              postFigmaMessageForExport(
                option,
                setProgress,
                controllerRef.current
              )
            } else {
              console.log('No valid subscription or trial')
              props?.onTapGIFUpgrade()
            }
          }
        }
      } else {
        props?.onTapGIF()
      }
    }, [
      enabled,
      valid,
      needSubscribe,
      userDB,
      option,
      setProgress,
      setRange,
      props,
      subscription,
      trialLeft,
    ])

    let variant = 'dbLoading'
    if (loading) variant = 'loading'
    else if (size > 300) variant = 'error'
    else if (!enabled) variant = 'error'
    else if (!subDBLoading && !subscription) variant = 'default'
    else if (!subDBLoading && subscription) variant = 'pro'
    else if (needSubscribe) variant = 'upgrade'

    useEffect(() => {
      if (!enabled) {
        setError('Select a frame on the canvas')
      } else if (size > 300) {
        setError('You can only add GIF under 300mb on canvas')
      } else {
        setError('') // clear error when conditions are satisfied
      }
    }, [enabled, size, setError])

    return (
      <>
        <Component
          {...props}
          key={progress}
          style={{ ...style, cursor: 'pointer' }}
          onClick={startExport}
          onTapGIFUpgrade={() =>
            console.log('onTapGIFU (ignore the default event)')
          }
          onTapGIFNoDB={() =>
            console.log('onTapGIFN (ignore the default event)')
          }
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
            }}
          />
        )}
      </>
    )
  }
}

// 🟢 ON 'TIMELINE' COMPONENT
export function Timeline(Component): ComponentType {
  return ({ ...props }: any) => {
    const controls = useAnimationControls()

    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [loop] = useQueryState('loop')
    const [loopDuration] = useQueryState('loopDuration')

    const [duration, setDuration] = useState(0)

    // Update duration when range or loop changes
    useEffect(() => {
      if (loop === 'on' && loopDuration) {
        setDuration(loopDuration)
      } else if (rangeStart !== undefined && rangeEnd !== undefined) {
        setDuration(rangeEnd - rangeStart)
      }
    }, [rangeStart, rangeEnd, loop, loopDuration])

    // Handle animation sequence
    useEffect(() => {
      const runSequence = async () => {
        try {
          controls.set({ width: '0%', transition: { duration: 0 } })
          await controls.start({
            width: '100%',
            transition: {
              duration: duration,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          })
        } catch (error) {
          console.error('Timeline animation error:', error)
        }
      }

      runSequence()
    }, [duration, controls, loop])

    return <Component {...props} animate={controls} />
  }
}

// 🟢 On the estimated size of the GIF/video (Export page)
export function EstimatedSize(Component): ComponentType {
  return ({ ...props }: any) => {
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [frameRate] = useQueryState('frameRate')
    const [pixelDensity] = useQueryState('pixelDensity')
    const [format] = useQueryState('format')
    const [destination] = useQueryState('destination')
    const [loop] = useQueryState('loop')
    const [loopDuration] = useQueryState('loopDuration')

    const [figma] = useFigma()

    const [duration, setDuration] = useState(rangeEnd - rangeStart)
    const [size, setSize] = useState(0)
    const setError = useUIStore((state: any) => state.setError)
    const figmaPage = useUIStore((state: any) => state.figmaPage)

    useEffect(() => {
      if (loop === 'on' && loopDuration) {
        setDuration(loopDuration)
      } else {
        setDuration(rangeEnd - rangeStart)
      }
    }, [rangeStart, rangeEnd, loop, loopDuration])

    useEffect(() => {
      setSize(
        estimateSize({
          format,
          duration,
          frameRate,
          nodeWidth: figma.nodeWidth,
          nodeHeight: figma.nodeHeight,
        })
      )
    }, [format, duration, frameRate, figma.nodeWidth, figma.nodeHeight])

    useEffect(() => {
      if (size > 300 && destination === 'onCanvas' && figmaPage === 'gif') {
        setError('GIF size should be below 300MB on Figma.')
      } else {
        setError('')
      }
    }, [size, destination])

    return <Component {...props} text={size + 'MB'} />
  }
}

// 🟢 On the duration bar whole wrapper
export function TimelineWrapper(Component): ComponentType {
  return ({ ...props }: any) => {
    const [animate] = useQueryState('animate')
    return (
      <div
        style={{
          display: animate === 'on' ? 'block' : 'none',
          width: '100%',
          height: '100%',
        }}
      >
        <Component {...props} />
      </div>
    )
  }
}

// 🟢 On the duration timeline red bar
export function Duration(Component): ComponentType {
  return ({ ...props }: any) => {
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [loop] = useQueryState('loop')
    const [loopDuration] = useQueryState('loopDuration')

    const [duration, setDuration] = useState(rangeEnd - rangeStart)

    useEffect(() => {
      if (loop === 'on' && loopDuration) {
        setDuration(loopDuration)
      } else {
        setDuration(rangeEnd - rangeStart)
      }
    }, [rangeEnd, rangeStart, loop, loopDuration])

    return <Component {...props} text={duration + 's'} />
  }
}

// 🟢 On the Undo button
export function UndoButton(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const setQueryValue = useURLQueryState()

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          const prevUrls = window.history.state.prevUrls || []

          if (prevUrls.length > 1) {
            prevUrls.pop() // remove current url

            const lastURL = new URL(prevUrls[prevUrls.length - 1]).search
            setQueryValue(lastURL)
            console.log(lastURL, 'lastURL')
            prevUrls.pop() // remove the updated url(lastURL)
            window.history.pushState({ prevUrls }, document.title, '') // sync the prevUrls
          } else alert('no history')
        }}
      />
    )
  }
}

// 🟢 On error message (Export page)
export function Error(Component): ComponentType {
  return ({ ...props }: any) => {
    const error = useUIStore((state: any) => state.error)
    const [variant, setVariant] = useState('hidden')

    useEffect(() => {
      if (error !== '') {
        setVariant('onError')
      } else {
        setVariant('hidden')
      }
    }, [error])

    return (
      <Component
        {...props}
        errorText={error}
        variant={error === '' ? 'hidden' : 'onError'}
      />
    )
  }
}

// --------- SHARE  ---------
// 🟢 On the url<>code toggle (Share page)
export function ToggleShare(Component): ComponentType {
  return ({ ...props }: any) => {
    const share = useFigmaPluginStore((state) => state.share)
    const setShare = useFigmaPluginStore((state) => state.setShare)

    return (
      <Component
        {...props}
        variant={share}
        onClickUrl={() => {
          setShare('url')
          props.onClickUrl?.()
        }}
        onClickCode={() => {
          setShare('code')
          props.onClickCode?.()
        }}
      />
    )
  }
}

// 🟢 On the content to copy (Share page)
export function ShowCopyContent(Component): ComponentType {
  return (props) => {
    const baseURL = 'https://shadergradient.co/customize'
    return (
      <Component
        {...props}
        copyContent={baseURL + window.location.search}
        copyEvent={() => {
          navigator.clipboard.writeText(
            parseUrlToCode(baseURL + window.location.search)
          )
        }}
      />
    )
  }
}

// 🟢 On the copy button (Share page)
export function CopyBtn(Component): ComponentType {
  return (props) => {
    const share = useFigmaPluginStore((state) => state.share)
    const [copied, setCopied] = useState(false)
    const baseURL = 'https://shadergradient.co/customize'

    return (
      <Component
        {...props}
        btnText={
          `${copied === false ? 'Copy ' : 'Yay, copied '}` +
          `${share === 'url' ? 'URL' : 'code'}` +
          `${copied === false ? '' : '!'}`
        }
        onClick={async () => {
          setCopied(true)
          const textToCopy =
            share === 'url'
              ? baseURL + window.location.search
              : parseUrlToCode(baseURL + window.location.search)

          copyToClipboard(textToCopy)

          setTimeout(() => {
            setCopied(false)
          }, 2000)
        }}
      />
    )
  }
}

// --------- SCROLL / BUTTON  ---------
// 🟢 On the tab switcher
export function TabSwitcher(Component): ComponentType {
  return (props) => {
    const currentTab = useFigmaPluginStore((state) => state.currentTab)
    const setScrollingTo = useFigmaPluginStore((state) => state.setScrollingTo)
    const scrollBehavior = { behavior: 'smooth', block: 'start' }

    return (
      <Component
        {...props}
        variant={'Tab' + currentTab}
        tab0Click={() => {
          setScrollingTo(0)
          const tab0 = document.getElementById('tab0')
          tab0.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
        }}
        tab1Click={() => {
          setScrollingTo(1)

          const tab1 = document.getElementById('tab1')
          tab1.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
        }}
        tab2Click={() => {
          setScrollingTo(2)

          const tab2 = document.getElementById('tab2')
          tab2.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
        }}
        tab3Click={() => {
          setScrollingTo(3)

          const tab3 = document.getElementById('tab3')
          tab3.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
        }}
      />
    )
  }
}

export function ShapeTab(Component): ComponentType {
  return (props) => {
    const scrollingTo = useFigmaPluginStore((state) => state.scrollingTo)
    const setCurrentTab = useFigmaPluginStore((state) => state.setCurrentTab)
    const setScrollingTo = useFigmaPluginStore((state) => state.setScrollingTo)
    const ref = useRef(null)
    const isInView = useInView(ref, {
      amount: 0.6, // at least 60% in view to be considered visible
    })
    useEffect(() => {
      if (isInView && scrollingTo === null) {
        setCurrentTab(0)
      } else if (isInView && scrollingTo === 0) {
        setCurrentTab(0)
        setTimeout(() => {
          setScrollingTo(null)
        }, 100)
      }
    }, [isInView, scrollingTo])
    return <Component {...props} ref={ref} id='tab0' />
  }
}

export function ColorsTab(Component): ComponentType {
  return (props) => {
    const scrollingTo = useFigmaPluginStore((state) => state.scrollingTo)
    const setCurrentTab = useFigmaPluginStore((state) => state.setCurrentTab)
    const setScrollingTo = useFigmaPluginStore((state) => state.setScrollingTo)
    const ref = useRef(null)
    const isInView = useInView(ref, {
      amount: 0.6, // at least 60% in view to be considered visible
    })
    useEffect(() => {
      if (isInView && scrollingTo === null) {
        setCurrentTab(1)
      } else if (isInView && scrollingTo === 1) {
        setCurrentTab(1)
        setTimeout(() => {
          setScrollingTo(null)
        }, 100)
      }
    }, [isInView, scrollingTo])
    return <Component {...props} ref={ref} id='tab1' />
  }
}

export function MotionTab(Component): ComponentType {
  return (props) => {
    const scrollingTo = useFigmaPluginStore((state) => state.scrollingTo)
    const setCurrentTab = useFigmaPluginStore((state) => state.setCurrentTab)
    const setScrollingTo = useFigmaPluginStore((state) => state.setScrollingTo)
    const ref = useRef(null)
    const isInView = useInView(ref, {
      amount: 0.6, // at least 60% in view to be considered visible
    })
    useEffect(() => {
      if (isInView && scrollingTo === null) {
        setCurrentTab(2)
      } else if (isInView && scrollingTo === 2) {
        setCurrentTab(2)
        setTimeout(() => {
          setScrollingTo(null)
        }, 100)
      }
    }, [isInView, scrollingTo])
    return <Component {...props} ref={ref} id='tab2' />
  }
}

export function ViewTab(Component): ComponentType {
  return (props) => {
    const scrollingTo = useFigmaPluginStore((state) => state.scrollingTo)
    const setCurrentTab = useFigmaPluginStore((state) => state.setCurrentTab)
    const setScrollingTo = useFigmaPluginStore((state) => state.setScrollingTo)
    const ref = useRef(null)
    const isInView = useInView(ref, {
      amount: 0.6, // at least 60% in view to be considered visible
    })
    useEffect(() => {
      if (isInView && scrollingTo === null) {
        setCurrentTab(3)
      } else if (isInView && scrollingTo === 3) {
        setCurrentTab(3)
        setTimeout(() => {
          setScrollingTo(null)
        }, 100)
      }
    }, [isInView, scrollingTo])
    return <Component {...props} ref={ref} id='tab3' />
  }
}

export function HighlightButton(Component): ComponentType {
  return (props) => {
    const currentTab = useFigmaPluginStore((state) => state.currentTab)
    const easyView = useFigmaPluginStore((state) => state.easyView)
    const setEasyView = useFigmaPluginStore((state) => state.setEasyView)

    return (
      <Component
        {...props}
        variant={
          currentTab === 3 && easyView === false
            ? 'ToggleBtn - Highlight'
            : easyView === true
            ? 'ToggleBtn - Clicked'
            : 'ToggleBtn - Default'
        }
        onClick={() => {
          setEasyView(!easyView)
        }}
      />
    )
  }
}

// 🟢 On the EasyView info (mouse interaction guide for easy view)
export function EasyViewInfo(Component): ComponentType {
  return (props) => {
    const easyView = useFigmaPluginStore((state) => state.easyView)

    return (
      <div
        style={{
          display: easyView === true ? 'flex' : 'none',
          width: 'fit-content',
          height: 'fit-content',
        }}
      >
        <Component {...props} />
      </div>
    )
  }
}

// 🟢 On the ShaderGradientStateless
export function StatelessOverride(Component): ComponentType {
  return (props) => {
    const easyView = useFigmaPluginStore((state) => state.easyView)
    const [loop, setLoop] = useQueryState('loop')
    const [loopDuration, setLoopDuration] = useQueryState('loopDuration')
    const [range, setRange] = useQueryState('range')
    const [rangeStart, setRangeStart] = useQueryState('rangeStart')
    const [rangeEnd, setRangeEnd] = useQueryState('rangeEnd')

    // Convert range to loop format, or set defaults if neither exist
    useEffect(() => {
      // If range exists but loop doesn't, convert range to loop
      if (range === 'enabled' && (loop === undefined || loop === null)) {
        setLoop('on')
        if (rangeEnd && (loopDuration === undefined || loopDuration === null)) {
          setLoopDuration(rangeEnd)
        }
      }
      // Set defaults if neither range nor loop exist
      else if (loop === undefined || loop === null) {
        setLoop('on')
      }
      if (loopDuration === undefined || loopDuration === null) {
        setLoopDuration(10)
      }
    }, [loop, loopDuration, range, rangeEnd])

    // Sync range with loop state
    useEffect(() => {
      if (loop === 'on' && loopDuration) {
        setRange('enabled')
        setRangeStart(0)
        setRangeEnd(loopDuration)
      }
    }, [loop, loopDuration])

    return (
      <Component
        {...props}
        pointerEvents={easyView === true ? 'auto' : 'none'}
      />
    )
  }
}

// UTIL OVERRIDES FOR UI
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

// 🟢 On the top level component to connect figma message
export function ConnectFigmaMessage(Component): ComponentType {
  return (props: any) => {
    useFigmaMessage()

    return <Component {...props} />
  }
}

export function WidthFillOnLoad(Component): ComponentType {
  // for overrides that doesn't have a parent but needs to fill the width of the parent on load
  return ({ style, ...props }: any) => {
    return <Component {...props} style={{ ...style, width: '100%' }} />
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

// 🟢 Figma-specific URL Input - converts range to loop format
export function FigmaUrlInput(Component): ComponentType {
  return (props: any) => {
    const setQueryValue = useURLQueryState()
    const setUrlInput = useUIStore((state) => state.setUrlInput)
    const [, setLoop] = useQueryState('loop')
    const [, setLoopDuration] = useQueryState('loopDuration')

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
          const inputValue = e.target.value
          setValue(inputValue)

          if (isValidUrl(inputValue)) {
            setValid(true)

            // Check if URL has range=enabled and convert to loop
            const urlParams = new URLSearchParams(
              inputValue.split('?')[1] || ''
            )
            const hasRange = urlParams.get('range') === 'enabled'

            // Apply the URL first
            setQueryValue(inputValue)
            setUrlInput(inputValue)

            // If range exists, convert to loop format with default duration
            if (hasRange) {
              setLoop('on')
              setLoopDuration(10)
            }
          } else {
            setValid(false)
          }
        }}
      />
    )
  }
}

// 🟢 Destination Control - connects Framer toggle to setDestination
export function DestinationControl(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [destination, setDestination] = useQueryState('destination')

    return (
      <Component
        {...props}
        style={{ ...style, width: '100%' }}
        variant={destination === 'onCanvas' ? 'onCanvas' : 'localFile'}
        onTapOnCanvas={() => setDestination('onCanvas')}
        onTapLocalFile={() => setDestination('localFile')}
      />
    )
  }
}

// 🟢 Format Control - show/hide format control based on editor type and destination
// Hidden when: Figma + onCanvas (only GIF is supported)
// Visible when: localFile OR Slides/Buzz (both GIF and WebM available)
// Also includes WidthFillOnLoad functionality
export function FormatControl(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma()
    const [destination] = useQueryState('destination')
    const [format, setFormat] = useQueryState('format')

    const supportsVideoOnCanvas =
      figma.editorType === 'slides' || figma.editorType === 'buzz'

    // Show format control when localFile OR in Slides/Buzz
    const showFormatControl =
      destination === 'localFile' || supportsVideoOnCanvas

    // If WebM is selected but not available (Figma + onCanvas), switch to GIF
    useEffect(() => {
      if (format === 'webm' && !showFormatControl) {
        setFormat('gif')
      }
    }, [destination, showFormatControl, format, setFormat])

    // Default to WebM for Slides/Buzz when destination is onCanvas
    useEffect(() => {
      if (supportsVideoOnCanvas && destination === 'onCanvas') {
        setFormat('webm')
      }
    }, [destination, supportsVideoOnCanvas, setFormat])

    return (
      <Component
        {...props}
        style={{
          ...style,
          display: showFormatControl ? 'flex' : 'none',
          width: '100%',
        }}
      />
    )
  }
}

// 🟢 LOADING OVERLAY - Shows during export
export function ExportLoadingOverlay(Component): ComponentType {
  return (props: any) => {
    const isExporting = useUIStore((state: any) => state.isExporting)

    return (
      <Component
        {...props}
        style={{
          ...props.style,
          display: isExporting ? 'flex' : 'none',
          opacity: isExporting ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    )
  }
}
