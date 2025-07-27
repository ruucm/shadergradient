import { ComponentType, useEffect, useLayoutEffect, useState, useRef, useCallback } from 'react'

import {
  useFigma, useUIStore
} from '../../store'

import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
  postFigmaMessageForExport,
} from './FigmaApi'

import { useAnimationControls, useInView } from 'framer-motion'
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"

import { useDBTable } from 'https://framer.com/m/SupabaseConnector-ARlr.js'



import { ui } from "https://framer.com/m/ui-gy7Z.js"
const { useQueryState, useURLQueryState } = ui
import { useSubscription, getTrialLeft, estimateSize, updateResolution, useFigmaMessage, parseUrlToCode, copyToClipboard } from './utils'



const useStore = createStore({
    currentTab: 0,
    scrollingTo: null,
    share: "url", // url or code
})

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
  
      const enabled = figma.selection > 0
      const setError = useUIStore((state: any) => state.setError)
  
      const [, setRange] = useQueryState('range')
  
      const [, setRangeStart] = useQueryState('rangeStart')
      const [, setRangeEnd] = useQueryState('rangeEnd')
      const [, setPixelDensity] = useQueryState('pixelDensity')
      const [, setToggleAxis] = useQueryState('toggleAxis')
      const [, setZoomOut] = useQueryState('zoomOut')
      const [, setAnimate] = useQueryState('animate')
      const setFigmaPage = useUIStore((state: any) => state.setFigmaPage)
  
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
            console.log('onClick GIF')
            setAnimate('on')
              setRange('enabled')
                setRangeStart(5)
                setRangeEnd(8)
                setPixelDensity(2)
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
      return <Component {...props} onClick={() => {
        controller.abort()
        if (figmaPage === 'gif') setFigmaPage('control')
      }} />
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
      const [rows, dbLoading, insertRow, updateRow] = useDBTable(
        'users',
        'sg-figma'
      )
      const userDB = rows.find((r) => r.figma_user_id === figma_user_id)
      const trialLeft = getTrialLeft(userDB?.trial_started_at, trials)
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

              }}
            />
          )}
        </>
      );
    };
  }

  // 🟢 ON 'TIMELINE' COMPONENT (Export page)
  export function Timeline(Component): ComponentType {
    return ({ ...props }: any) => {
        const controls = useAnimationControls()

        const [rangeStart] = useQueryState("rangeStart")
        const [rangeEnd] = useQueryState("rangeEnd")

        const [duration, setDuration] = useState(0)

        // Update duration when range changes
        useEffect(() => {
            if (rangeStart !== undefined && rangeEnd !== undefined) {
                setDuration(rangeEnd - rangeStart)
            }
        }, [rangeStart, rangeEnd])

        // Handle animation sequence
        useEffect(() => {
      
                console.log(duration, 'timeline check')
                
                const runSequence = async () => {
                    try {
                         controls.set({ width: "0%", transition: { duration: 0 } })
                        await controls.start({
                            width: "100%",
                            transition: {
                                duration: duration,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                            },
                        })
                    } catch (error) {
                        console.error('Timeline animation error:', error)
                    }
                }
                
                runSequence()
            
        }, [duration, controls])

        return <Component {...props} animate={controls} />
    }
}

  // 🟢 On the estimated size of the GIF/video (Export page)
  export function EstimatedSize(Component): ComponentType {
    return ({ ...props }: any) => {
        const [rangeStart] = useQueryState("rangeStart")
        const [rangeEnd] = useQueryState("rangeEnd")
        const [frameRate] = useQueryState("frameRate")
        const [pixelDensity] = useQueryState("pixelDensity")
        const [format] = useQueryState("format")
        const [destination] = useQueryState("destination")

        const [duration, setDuration] = useState(rangeEnd - rangeStart)
        const [size, setSize] = useState(0)
        const setError = useUIStore((state: any) => state.setError)
        const figmaPage = useUIStore((state: any) => state.figmaPage)
      

        useEffect(() => {
            setDuration(rangeEnd - rangeStart)
        }, [rangeStart, rangeEnd])

        useEffect(() => {
            setSize(estimateSize({ format, duration, frameRate, pixelDensity }))
        }, [format, duration, pixelDensity, frameRate])

        useEffect(() => {
            if (
                size > 300 &&
                destination === "onCanvas" 
                &&
                figmaPage === "gif"
            ) {
                setError("GIF size should be below 300MB on Figma." )
            } else {
                setError("")
            }
        }, [size, destination])

        return <Component {...props} text={size + "MB"} />
    }
}

  // 🟢 On the duration of the GIF/video (Export page)
export function Duration(Component): ComponentType {
    return ({ ...props }: any) => {
        const [rangeStart] = useQueryState("rangeStart")
        const [rangeEnd] = useQueryState("rangeEnd")

        const [duration, setDuration] = useState(rangeEnd - rangeStart)

        useEffect(() => {
            setDuration(rangeEnd - rangeStart)
        }, [rangeEnd, rangeStart])

        return <Component {...props} text={duration + "s"} />
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
  

  
// --------- SHARE  ---------
// 🟢 On the url<>code toggle (Share page)
export function ToggleShare(Component): ComponentType {
    return ({ ...props }: any) => {
        const [store, setStore] = useStore()

        return (
            <Component
                {...props}
                variant={store.share}
                onClickUrl={() => {
                    setStore({ share: "Url" })
                }}
                onClickCode={() => {
                    setStore({ share: "Code" })
                }}
            />
        )
    }
}

// 🟢 On the content to copy (Share page)
export function ShowCopyContent(Component): ComponentType {
    return (props) => {
        const baseURL = "https://shadergradient.co/customize"
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
        const [store, setStore] = useStore()
        const [copied, setCopied] = useState(false)
        const baseURL = "https://shadergradient.co/customize"

        return (
            <Component
                {...props}
                btnText={
                    `${copied === false ? "Copy " : "Yay, Copied "}` +
                    store.share +
                    `${copied === false ? "" : "!"}`
                }
                onClick={async () => {
                    setCopied(true)
                    const textToCopy =
                        store.share === "url"
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
        const [store, setStore] = useStore()
        const scrollBehavior = { behavior: "smooth", block: "start" }

        return (
            <Component
                {...props}
                variant={"Tab" + store.currentTab}
                tab0Click={() => {
                    setStore({ scrollingTo: 0 })
                    const tab0 = document.getElementById("tab0")
                    tab0.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
                }}
                tab1Click={() => {
                    setStore({ scrollingTo: 1 })

                    const tab1 = document.getElementById("tab1")
                    tab1.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
                }}
                tab2Click={() => {
                    setStore({ scrollingTo: 2 })

                    const tab2 = document.getElementById("tab2")
                    tab2.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
                }}
                tab3Click={() => {
                    setStore({ scrollingTo: 3 })

                    const tab3 = document.getElementById("tab3")
                    tab3.scrollIntoView(scrollBehavior as ScrollIntoViewOptions)
                }}
            />
        )
    }
}

export function ShapeTab(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const ref = useRef(null)
        const isInView = useInView(ref, {
            amount: 0.6, // at least 60% in view to be considered visible
        })
        useEffect(() => {
            if (isInView && store.scrollingTo === null) {
                setStore({ currentTab: 0 })
            } else if (isInView && store.scrollingTo === 0) {
                setStore({ currentTab: 0 })
                setTimeout(() => {
                    setStore({ scrollingTo: null })
                }, 100)
            }
        }, [isInView, store.scrollingTo])
        return <Component {...props} ref={ref} id="tab0" />
    }
}

export function ColorsTab(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const ref = useRef(null)
        const isInView = useInView(ref, {
            amount: 0.6, // at least 60% in view to be considered visible
        })
        useEffect(() => {
            if (isInView && store.scrollingTo === null) {
                setStore({ currentTab: 1 })
            } else if (isInView && store.scrollingTo === 1) {
                setStore({ currentTab: 1 })
                setTimeout(() => {
                    setStore({ scrollingTo: null })
                }, 100)
            }
        }, [isInView, store.scrollingTo])
        return <Component {...props} ref={ref} id="tab1" />
    }
}

export function MotionTab(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const ref = useRef(null)
        const isInView = useInView(ref, {
            amount: 0.6, // at least 60% in view to be considered visible
        })
        useEffect(() => {
            if (isInView && store.scrollingTo === null) {
                setStore({ currentTab: 2 })
            } else if (isInView && store.scrollingTo === 2) {
                setStore({ currentTab: 2 })
                setTimeout(() => {
                    setStore({ scrollingTo: null })
                }, 100)
            }
        }, [isInView, store.scrollingTo])
        return <Component {...props} ref={ref} id="tab2" />
    }
}

export function ViewTab(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()
        const ref = useRef(null)
        const isInView = useInView(ref, {
            amount: 0.6, // at least 60% in view to be considered visible
        })
        useEffect(() => {
            if (isInView && store.scrollingTo === null) {
                setStore({ currentTab: 3 })
            } else if (isInView && store.scrollingTo === 3) {
                setStore({ currentTab: 3 })
                setTimeout(() => {
                    setStore({ scrollingTo: null })
                }, 100)
            }
        }, [isInView, store.scrollingTo])
        return <Component {...props} ref={ref} id="tab3" />
    }
}

export function HighlightButton(Component): ComponentType {
    return (props) => {
        const [store, setStore] = useStore()

        return (
            <Component
                {...props}
                variant={
                    store.currentTab === 3
                        ? "ToggleBtn - Highlight"
                        : "ToggleBtn - Default"
                }
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

export function WidthFillOnLoad(Component): ComponentType {
  // for overrides that doesn't have a parent but needs to fill the width of the parent on load
  return ({ style, ...props }: any) => {
 
    return (
    <Component
      {...props}
      style={{ ...style, width: '100%' }}
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