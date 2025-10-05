'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollBoxText from 'https://framer.com/m/ScrollBoxText-zgHd.js'
import { isDebug } from '@/utils'
import { useStore } from '@/overrides/Web/Scroll'

const textItems = [
  'Shape',
  'Colors',
  'Noise Strength',
  'Noise Density',
  'Spiral',
  'Speed',
  'Grain',
  'Lighting',
  'Position',
  'Rotation',
  'Animation',
  '', // end space
  '', // end space
  '', // end space
  '', // end space
  '', // end space
  '', // end space
]

const visibleItems = 13 // This should be odd number (to center the active item)
const visibleDelay = 0.3

export function ScrollableTextBox() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(() => {
    // Load activeIndex from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('scrollableBox_activeIndex')
      return saved ? parseInt(saved, 10) : 0
    }
    return 0
  })
  const [, setStore] = useStore()
  const [itemHeight, setItemHeight] = useState(80)
  const [isVisible, setIsVisible] = useState(false)

  // Web Audio API setup for the tick sound
  const audioContextRef = useRef<AudioContext | null>(null)
  const tickSoundBufferRef = useRef<AudioBuffer | null>(null)
  const lastSoundIndexRef = useRef<number>(-1)

  // Load the tick sound into the buffer
  useEffect(() => {
    const fetchSound = async () => {
      try {
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)()
        audioContextRef.current = audioContext
        const response = await fetch(
          'https://ruucm.github.io/shadergradient/ui@0.0.0/assets/sounds/tick.mp3'
        ) // Replace with your actual sound file path
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
        tickSoundBufferRef.current = audioBuffer
      } catch (error) {
        console.log('Could not load tick sound:', error)
      }
    }

    fetchSound()
  }, [])

  // Function to play the tick sound using the Web Audio API
  const playTickSound = () => {
    if (audioContextRef.current && tickSoundBufferRef.current) {
      const source = audioContextRef.current.createBufferSource()
      const gainNode = audioContextRef.current.createGain()

      source.buffer = tickSoundBufferRef.current
      gainNode.gain.value = 0.5 // Set volume to 50%

      source.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)
      source.start(0)
    }
  }

  // Save activeIndex to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('scrollableBox_activeIndex', activeIndex.toString())
    }
  }, [activeIndex])

  // Add delay before rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, visibleDelay * 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Calculate dynamic itemHeight based on container height
    const calculateItemHeight = () => {
      const containerHeight = container.clientHeight

      // If container height is 0 or too small, retry after a short delay
      if (containerHeight <= 0) {
        setTimeout(calculateItemHeight, 100)
        return
      }

      const newItemHeight = Math.max(50, containerHeight * (1 / visibleItems)) // show visibleItems items in containerHeight

      setItemHeight(newItemHeight)

      if (isDebug) {
        console.log('containerHeight', containerHeight)
        console.log('newItemHeight', newItemHeight)
      }
    }

    // Initial calculation with a small delay to ensure container is properly rendered
    const initialTimeout = setTimeout(calculateItemHeight, 50)

    // Add resize observer to recalculate on container size changes
    const resizeObserver = new ResizeObserver(calculateItemHeight)
    resizeObserver.observe(container)

    // 스크롤바 숨김 스타일 적용
    const style = container.style
    style.setProperty('-webkit-scrollbar', 'none')
    style.setProperty('-webkit-scrollbar-track', 'none')
    style.setProperty('-webkit-scrollbar-thumb', 'none')

    const handleScroll = () => {
      const scrollTop = container.scrollTop

      // Calculate current index based on scroll position
      const currentIndex = Math.round(scrollTop / itemHeight)

      const result = Math.max(0, Math.min(currentIndex, textItems.length - 1))

      // Update activeIndex
      setActiveIndex(result)
      setStore({ highlightWord: result })

      // Play tick sound only when index actually changes (not on repeated same index)
      if (result !== lastSoundIndexRef.current) {
        lastSoundIndexRef.current = result
        playTickSound()
      }
    }

    container.addEventListener('scroll', handleScroll)

    // Restore scroll position from saved activeIndex
    container.scrollTop = activeIndex * itemHeight
    handleScroll() // 초기 상태 설정

    return () => {
      container.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
      clearTimeout(initialTimeout)
    }
  }, [itemHeight, isVisible])

  return (
    <div
      style={{
        // position: "relative",
        width: '100%',
        // height: "100%",
        height: '100vh',
        overflow: 'hidden',
        position: 'sticky',
        top: 0,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        // paddingTop: "25vh",
        // paddingBottom: "25vh",
        // top: "50%",
        // transform: "translateY(-50%)",
        // background: "rgba(0,255,0,0.25)", // debug
      }}
    >
      {/* 스크롤 가능한 텍스트 컨테이너 */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          height: '100%',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          ...(isDebug ? { background: 'rgba(0,255,0,0.25)' } : {}), // debug
        }}
      >
        {/* Add a spacer div at the start for centering first item */}
        <div
          style={{
            height: `${
              (containerRef.current?.clientHeight || 0) / 2 - itemHeight / 2
            }px`,
          }}
        />

        {textItems.map((text, index) => (
          <motion.div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: `${itemHeight}px`,
              scrollSnapAlign: 'center',
              color: 'white',
              fontWeight: '300',
              // border: "1px solid red", // debug
            }}
            animate={{
              scale: index === activeIndex ? 1.2 : 1,
              opacity: index === activeIndex ? 1 : 0.4,
            }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            <ScrollBoxText title={text} />
          </motion.div>
        ))}

        {/* Add a spacer div at the end for centering last item */}
        {/* <div
          style={{
            height: `${
              (containerRef.current?.clientHeight || 0) / 2 - itemHeight / 2
            }px`,
          }}
        /> */}
        {/* <div
                    style={{ height: "35vh", background: "rgba(0,0,255,0.25)" }}
                />*/}
      </div>

      {/* 중앙 하이라이트 영역 */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          right: '0',
          height: `${itemHeight}px`,
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{
            height: '100%',
            // background: "rgba(255, 255, 255, 0.1)",
            // backdropFilter: "blur(4px)",
            // borderTop: "1px solid rgba(255, 255, 255, 0.2)", // debug
            // borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          // animate={{
          //     background: [
          //         "rgba(255, 255, 255, 0.1)",
          //         "rgba(255, 255, 255, 0.2)",
          //         "rgba(255, 255, 255, 0.1)",
          //     ],
          //     boxShadow: [
          //         "inset 0 0 20px rgba(255,255,255,0.1)",
          //         "inset 0 0 40px rgba(255,255,255,0.3)",
          //         "inset 0 0 20px rgba(255,255,255,0.1)",
          //     ],
          // }}
          // transition={{
          //     duration: 3,
          //     repeat: Infinity,
          //     ease: "easeInOut",
          // }}
        >
          {isDebug && <div>activeIndex: {activeIndex}</div>}
        </motion.div>
      </motion.div>
    </div>
  )
}
