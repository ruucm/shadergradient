import { motion } from 'framer-motion'
import Image from 'next/image'

export function IconScroll({
  scroll,
  figmaSection,
  framerSection,
  developerSection,
}) {
  return (
    <div
      style={{
        display: 'flex',
        color: '#0066FF',
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 15,
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src='/icons/favicon-32x32.png' alt='' width={20} height={20} />
      </div>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 15,
          background: 'white',
          marginLeft: -6,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          animate={{
            y:
              scroll > figmaSection && scroll < developerSection
                ? -40
                : scroll > developerSection
                ? -80
                : 0,
          }}
        >
          <span
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src='/icons/framer.jpg' alt='' width={25} height={25} />
          </span>
          <span
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src='/icons/figma.png' alt='' width={25} height={25} />
          </span>
          <span
            style={{
              height: 40,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src='/icons/react.png' alt='' width={25} height={25} />
          </span>
        </motion.div>
      </div>
    </div>
  )
}

IconScroll.defaultProps = {}
