import type { ComponentType } from 'react'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useFPS } from './useFPS'
import { useMemoryStats } from './useMemory'
import { useScrollStore } from '@/store'

const endSection = 14

export function SectionText(Component): ComponentType {
  return (props) => {
    const currentSection = useScrollStore((state) => state.currentSection)

    return <Component {...props} text={`currentSection: ${currentSection}`} />
  }
}

export function HideGradientsOnMobile(Component): ComponentType {
  return (props) => {
    const currentSection = useScrollStore((state) => state.currentSection)

    if (
      currentSection === 'intro-start' ||
      currentSection === 'intro-end' ||
      currentSection === 'intro' ||
      currentSection === 'for-titles'
    ) {
      return <Component {...props} />
    }
    return <></>
  }
}

export function SectionObserver(Component): ComponentType {
  return (props: any) => {
    const setCurrentSection = useScrollStore((state) => state.setCurrentSection)
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
      if (isInView) setCurrentSection(props.name)
    }, [isInView])

    return <Component {...props} ref={ref} />
  }
}

// Scroll transforms by code (Framer doesn't support these properties yet)
export function MainGradient(Component): ComponentType {
  return (props: any) => {
    const { scrollY } = useScroll()
    const radius = useTransform(scrollY, [0, 100], [0, 18])

    return (
      <Component {...props} style={{ ...props.style, borderRadius: radius }} />
    )
  }
}
export function Gap(Component): ComponentType {
  return ({ style, ...props }: { style: React.CSSProperties }) => {
    const { scrollY } = useScroll()
    const size = useTransform(scrollY, [0, 400], [0, 40])

    return (
      <Component {...props} style={{ ...style, width: size, height: size }} />
    )
  }
}

export function CenterCrop1(Component): ComponentType {
  return ({ style, ...props }: { style: React.CSSProperties }) => {
    const currentSection = useScrollStore((state) => state.currentSection)

    const opacity = isBottomSection(currentSection) ? 0 : 1

    return <Component {...props} style={{ ...style, opacity }} />
  }
}

export function CenterCrop2(Component): ComponentType {
  return ({ style, ...props }: { style: React.CSSProperties }) => {
    const currentSection = useScrollStore((state) => state.currentSection)

    const opacity = isBottomSection(currentSection) ? 1 : 0

    return <Component {...props} style={{ ...style, opacity }} />
  }
}

function isBottomSection(sectionName) {
  if (typeof sectionName !== 'string') return false
  return (
    sectionName.includes('figma') ||
    sectionName.includes('highlight') ||
    sectionName.includes('word-scroll')
  )
}

// ---------------- highlight section

export function WordGradient(Component: ComponentType<any>): ComponentType {
  return (props) => {
    const highlightWord = useScrollStore((state) => state.highlightWord)

    // const { scrollY } = useScroll()

    // // Transform scroll position from 6939px to 7638px to variant numbers (1-12)
    // const variantNumber = useTransform(scrollY, [6939, 7638], [1, 12])

    // // Convert number to variant string format
    // const [variant, setVariant] = useState(props.variant || "default")

    // // Debug scrollY position
    // useEffect(() => {
    //     const unsubscribeScrollY = scrollY.onChange((latest) => {
    //         console.log("📍 scrollY position:", Math.round(latest), "px")
    //         if (latest >= 6939 && latest <= 7638) {
    //             console.log("✅ In target scroll range (6939-7638px)")
    //         } else {
    //             console.log("❌ Outside target scroll range")
    //         }
    //     })

    //     return () => unsubscribeScrollY()
    // }, [scrollY])

    // useEffect(() => {
    //     const unsubscribeScrollY = scrollY.onChange((currentScrollY) => {
    //         // Check if we're outside the target range
    //         if (currentScrollY < 6939 || currentScrollY > 7638) {
    //             // Use default variant when outside range
    //             const defaultVariant = props.variant || "default"
    //             console.log("🔄 Using default variant:", defaultVariant)
    //             setVariant(defaultVariant)
    //         }
    //     })

    //     const unsubscribe = variantNumber.onChange((latest) => {
    //         const currentScrollY = scrollY.get()

    //         // Only update variant if we're in the target range
    //         if (currentScrollY >= 6939 && currentScrollY <= 7638) {
    //             const roundedNumber = Math.round(latest)
    //             const clampedNumber = Math.max(
    //                 1,
    //                 Math.min(12, roundedNumber)
    //             )
    //             const newVariant = `customize-${clampedNumber}`

    //             console.log("📊 variantNumber:", latest.toFixed(3))
    //             console.log("🎨 variant changed to:", newVariant)

    //             setVariant(newVariant)
    //         }
    //     })

    //     return () => {
    //         unsubscribeScrollY()
    //         unsubscribe()
    //     }
    // }, [variantNumber, scrollY, props.variant])

    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Component
          {...props}
          // variant={variant}
          // variant={store.variant || props.variant || "default"}
          variant={highlightWord ? `customize-${highlightWord}` : 'default'}
        />
      </div>
    )
  }
}

export function WordGradientText(Component: ComponentType<any>): ComponentType {
  return (props: any) => {
    const targetRef = useRef<HTMLDivElement>(null)
    const setHighlightWord = useScrollStore((state) => state.setHighlightWord)

    // Use element-based scroll detection
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start center', 'end center'],
    })

    // Transform scroll progress to variant numbers (1-12)
    const variantNumber = useTransform(scrollYProgress, [0, 1], [1, 12])

    // Debug scroll progress
    useEffect(() => {
      const unsubscribeScrollY = scrollYProgress.onChange((latest) => {
        console.log('📍 scrollYProgress:', latest.toFixed(3))
        if (latest > 0 && latest < 1) {
          console.log('✅ Text layer in target range (center viewport)')
        } else {
          console.log('❌ Text layer outside center range')
        }
      })

      return () => unsubscribeScrollY()
    }, [scrollYProgress])

    useEffect(() => {
      const unsubscribeScrollY = scrollYProgress.onChange((currentProgress) => {
        // Check if we're outside the target range (0-1 means element is in view)
        if (currentProgress <= 0 || currentProgress >= 1) {
          // Use default variant when outside range
          const defaultVariant = props.variant || 'default'
          console.log('🔄 Using default variant:', defaultVariant)
          setHighlightWord(0)
        }
      })

      const unsubscribe = variantNumber.onChange((latest) => {
        const currentProgress = scrollYProgress.get()

        // Only update variant if element is in the center viewport range
        if (currentProgress > 0 && currentProgress < 1) {
          const roundedNumber = Math.round(latest)
          const clampedNumber = Math.max(1, Math.min(12, roundedNumber))

          console.log('📊 variantNumber:', latest.toFixed(3))
          console.log('🎨 variant changed to:', clampedNumber)

          setHighlightWord(clampedNumber)
        }
      })

      return () => {
        unsubscribeScrollY()
        unsubscribe()
      }
    }, [variantNumber, scrollYProgress, props.variant, setHighlightWord])

    return (
      <div ref={targetRef}>
        <Component
          {...props}
          // variant={store.variant || props.variant || "default"}
        />
      </div>
    )
  }
}

// export function WordGradient(Component): ComponentType {
//     return (props) => {
//         const [store, setStore] = useStore()

// let variant = "default"
// if (store.currentSection === "figma") variant = "default"
// else if (store.currentSection === "highlight-end")
//     variant = "customize-11"
// else variant = "customize-" + store.currentWordNum
// const needHighlight =
//     store.currentSection === "word-scroll" ||
//     store.currentSection === "highlight-end"

// let variant = "default"
// if (store.currentWordNum) variant = "customize-" + store.currentWordNum

// return (
//     <Component
//         {...props}
//         variant={
//             variant
// store.currentSection !== "highlight"
// store.currentWordNum > 11 ||
// store.currentSection === "highlight-end"
// ? "customize-11"
// : // ? "default"
//   "customize-" + store.currentWordNum
// store.currentWordNum !== -1 && store.currentSection === 18
//     ? "customize-" + store.currentWordNum
//     : store.currentSection === endSection
//       ? "end"
//       : "default"
//                 }
//             />
//         )
//     }
// }

export function WordHighlight2(Component): ComponentType {
  return (props: any) => {
    // const sectionNumber = parseInt(props.name)
    console.log('props', props)
    const word = props.children.props.children.props.children

    const setHighlightWord = useScrollStore((state) => state.setHighlightWord)
    const currentSection = useScrollStore((state) => state.currentSection)

    const container = useRef(null)
    const ref = useRef(null)
    // const container = document.querySelector(
    //   '[data-framer-name="word-highlight"]'
    // );
    console.log('container', container)
    const isInView = useInView(ref, {
      root: container,
      margin: '0px 0px 0px 0px',
    })

    useEffect(() => {
      console.log('word', word)
      console.log('isInView', isInView)
      if (isInView) setHighlightWord(word)
    }, [isInView, currentSection])

    return (
      <>
        <Component {...props} ref={ref} />

        {/* container */}
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '50px',
            backgroundColor: 'red',
            opacity: 0.5,
          }}
        />
      </>
    )
  }
}

export function WordHighlight(Component): ComponentType {
  return (props: any) => {
    const sectionNumber = parseInt(props.name)
    const setHighlightWord = useScrollStore((state) => state.setHighlightWord)
    const currentSection = useScrollStore((state) => state.currentSection)
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '0px 0px 0px 0px' })

    useEffect(() => {
      // if (store.currentSection === 18) {
      //     if (isInView === true)
      //         setStore({ currentWordNum: sectionNumber })
      //     else if (
      //         store.currentWordNum !== -1 // prevent initial changing of currentWordNum to like -17
      //     )
      //         setStore({ currentWordNum: sectionNumber - 1 })
      // } else if (
      //     store.currentSection === endSection ||
      //     store.currentSection === 19 ||
      //     store.currentSection === 20
      // ) {
      //     setStore({ currentWordNum: 11 })
      // } else {
      //     setStore({ currentWordNum: -1 })
      // }
      if (isInView === true) setHighlightWord(sectionNumber)
      else setHighlightWord(-1)
    }, [isInView, currentSection])

    return <Component {...props} ref={ref} />
  }
}

export function wordHighlightText(Component): ComponentType {
  return (props) => {
    const highlightWord = useScrollStore((state) => state.highlightWord)

    return <Component {...props} text={`currentWordNum: ${highlightWord}`} />
  }
}

export function fpsCount(Component): ComponentType {
  return (props) => {
    const { fps } = useFPS()

    return <Component {...props} text={`fps: ${fps}`} />
  }
}

export function memoryUsage(Component): ComponentType {
  return (props) => {
    const { supported, usedMB, limitMB, deviceMemoryGB, message } =
      useMemoryStats()

    let text = 'memory: unavailable'

    if (supported && typeof usedMB === 'number') {
      const limitText = limitMB ? ` / ${limitMB}MB` : ''
      text = `memory: ${usedMB}MB${limitText}`
    } else if (deviceMemoryGB) {
      text = `memory: ~${deviceMemoryGB}GB (browser reported)`
    } else if (message) {
      text = `memory: ${message}`
    }

    return <Component {...props} text={text} />
  }
}
