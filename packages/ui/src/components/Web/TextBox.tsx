'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollBoxText from 'https://framer.com/m/ScrollBoxText-zgHd.js'
import { ControlType } from 'framer'

interface TextItem {
  title: string
  gradient: number
}

interface TextBoxProps {
  activeIndex?: number
  textItems?: TextItem[]
  transitionDuration?: number
  transitionEase?: string
}

const defaultTextItems: TextItem[] = [
  { title: 'Shape', gradient: 0 },
  { title: 'Colors', gradient: 1 },
  { title: 'Noise Strength', gradient: 2 },
  { title: 'Noise Density', gradient: 3 },
  { title: 'Spiral', gradient: 4 },
  { title: 'Speed', gradient: 5 },
  { title: 'Grain', gradient: 6 },
  { title: 'Lighting', gradient: 7 },
  { title: 'Position', gradient: 8 },
  { title: 'Rotation', gradient: 9 },
  { title: 'Animation', gradient: 10 },
]

export default function TextBox({
  activeIndex = 0,
  textItems = defaultTextItems,
  transitionDuration = 0.3,
  transitionEase = 'easeInOut',
}: TextBoxProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemHeight, setItemHeight] = useState(80)

  // Calculate item height based on container height
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const calculateItemHeight = () => {
      const containerHeight = container.clientHeight

      // If container height is 0 or too small, retry after a short delay
      if (containerHeight <= 0) {
        setTimeout(calculateItemHeight, 100)
        return
      }

      // Set a reasonable item height (you can adjust this)
      const newItemHeight = Math.max(50, containerHeight * 0.1)
      setItemHeight(newItemHeight)
    }

    // Initial calculation with a small delay to ensure container is properly rendered
    const initialTimeout = setTimeout(calculateItemHeight, 50)

    // Add resize observer to recalculate on container size changes
    const resizeObserver = new ResizeObserver(calculateItemHeight)
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
      clearTimeout(initialTimeout)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        transform: `translateY(-${itemHeight / 2}px)`,
      }}
    >
      {/* Text items container */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
        }}
      >
        <motion.div
          style={{
            transform: `translateY(-${itemHeight / 2}px)`,
          }}
          animate={{
            y: -activeIndex * itemHeight,
          }}
          transition={{
            duration: transitionDuration,
            ease: transitionEase,
          }}
        >
          {textItems.map((item, index) => (
            <motion.div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: `${itemHeight}px`,
                color: 'white',
                fontWeight: '300',
              }}
              animate={{
                scale: index === activeIndex ? 1.2 : 1,
                opacity: index === activeIndex ? 1 : 0.4,
              }}
              transition={{
                duration: transitionDuration,
                ease: transitionEase,
              }}
            >
              <ScrollBoxText title={item.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Center highlight area (optional visual indicator) */}
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
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

TextBox.propertyControls = {
  activeIndex: {
    type: ControlType.Number,
    title: 'Active Index',
    defaultValue: 0,
    min: 0,
    step: 1,
    description: 'Index of the currently active text item',
  },
  textItems: {
    type: ControlType.Array,
    control: {
      type: ControlType.Object,
      controls: {
        title: { type: ControlType.String, defaultValue: 'phrase' },
        gradient: { type: ControlType.Number, defaultValue: 0 },
      },
    },
    defaultValue: defaultTextItems,
    description: 'Array of text items to display',
  },
  transitionDuration: {
    type: ControlType.Number,
    title: 'Transition Duration',
    defaultValue: 0.3,
    min: 0,
    max: 2,
    step: 0.1,
    description: 'Duration of the transition animation in seconds',
  },
  transitionEase: {
    type: ControlType.Enum,
    title: 'Transition Ease',
    options: [
      'linear',
      'easeIn',
      'easeOut',
      'easeInOut',
      'circIn',
      'circOut',
      'circInOut',
      'backIn',
      'backOut',
      'backInOut',
      'anticipate',
    ],
    defaultValue: 'easeInOut',
    description: 'Easing function for the transition',
  },
}
