import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import {
  useUIStore,
  StoreGradient,
  aboutPositions,
  aboutRotations,
  aboutAngles,
  // Links,
  cx,
} from 'shadergradient/with-store'
import { TextAnimation, TextHoverBox } from 'shadergradient/ui'

export default function Page() {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)
  const [isMobile, setIsMobile] = useState(false)
  const activePreset = useUIStore((state) => state.activePreset)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    setMode('about')
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: isMobile === true ? 'static' : 'absolute',
          marginTop: isMobile === true ? '45%' : 220,
          // top: '28%',
        }}
      >
        {isMobile !== true && (
          <TextAnimation
            fontSize={80}
            color='#ff340A'
            delay={0}
            content='ShaderGradient'
          />
        )}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className={cx(
            'm-4 text-center text-primary',
            isMobile === true ? 'text-sm w-[80%]' : 'text-lg'
          )}
          style={{
            paddingTop: isMobile && 60,
          }}
        >
          This project has started while we were exploring the realm of creative
          coding,
          <br /> and thinking if there’s another way of creating a gradient.
          <br /> We envisioned something that resembles the sky that shines, and
          water that flows.
          <br /> <br />
          What you’re seeing as a gradient is a part of moving 3d object. <br />
          It’s drawn from lines of codes called ‘shader’, so every pixels are
          calulcated and visualized <br />
          based on the value of{' '}
          <TextHoverBox
            content='shape, speed, noise strength, noise density, colors, environment, lighting, reflections, camera angle and positions ... and more to come!'
            text='all the properties'
            link='https://seungmee-lee.com'
            tag='Or got any idea? Let us know'
          />{' '}
          that you’re changing.
        </motion.div>
      </div>
      <div
        className='text-sm text-primary'
        style={{
          width: isMobile === true ? '80%' : '90%',
          borderTop: isMobile === true ? 'none' : '1.5px solid #ff340A',
          position: isMobile === true ? 'static' : 'absolute',
          bottom: 0,
          margin: isMobile === true ? '10%' : '5%',
          paddingTop: 10,
          height: 'fit-content',
          display: 'flex',
          flexDirection: isMobile === true ? 'column' : 'row',
          justifyContent: 'space-between',
          rowGap: 25,
        }}
      >
        <div
          className={cx(
            'flex gap-6',
            isMobile === true ? 'w-[100%]' : 'w-[50%]'
          )}
          style={{
            borderTop: isMobile && '1.5px solid #ff340A',
            paddingTop: isMobile && 10,
          }}
        >
          <p
            style={{
              width: isMobile && '35%',
            }}
          >
            made by
          </p>
          <div style={{ display: 'inline', width: isMobile && '65%' }}>
            <TextHoverBox
              content='developer'
              text='ruucm'
              link=''
              tag='say hi 👋'
            />{' '}
            &{' '}
            <TextHoverBox
              content='designer'
              text='seungmee'
              link='https://seungmee-lee.com'
              tag='say hi 👋'
            />
            <br /> reach us out for any inquiry
          </div>
        </div>
        <div
          className={cx('flex gap-6', isMobile ? 'w-[100%]' : 'w-[50%]')}
          style={{
            borderTop: isMobile && '1.5px solid #ff340A',
            paddingTop: isMobile && 10,
          }}
        >
          <p style={{ width: isMobile && '35%' }}>available from</p>
          <div style={{ display: 'inline', width: isMobile && '65%' }}>
            {isMobile ? (
              <div />
            ) : (
              // <Links isMobile={true} />
              <>
                For designers,{' '}
                <TextHoverBox
                  content='Enjoy the maximum potential of ShaderGradient!'
                  text='Framer Package'
                  link=''
                />{' '}
                &{' '}
                <TextHoverBox
                  content='For now, it only supports static gradient. GIF export on the way!'
                  text='Figma Plugin (beta)'
                  link='https://seungmee-lee.com'
                />
                <br /> For developers,{' '}
                <TextHoverBox
                  content='import from NPM. Create yours from the website, and use "Copy as Code" feature'
                  text='React Component'
                  link=''
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
Page.canvas = (props) => (
  <StoreGradient
    zoomOut={true}
    animate={'on'}
    cAzimuthAngle={aboutAngles[0]}
    cPolarAngle={aboutAngles[1]}
    positionX={aboutPositions[0]}
    positionY={aboutPositions[1]}
    positionZ={aboutPositions[2]}
    rotationX={aboutRotations[0]}
    rotationY={aboutRotations[1]}
    rotationZ={aboutRotations[2]}
  />
)

export async function getStaticProps() {
  return {
    props: {
      title: 'Shader Gradient ─ About',
    },
  }
}
