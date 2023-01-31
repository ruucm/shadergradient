import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Instagram } from 'react-feather'
import { Gradient, PRESETS, useUIStore } from 'shadergradient'
import { TextHover } from 'shadergradient/ui'

import styles from '../home/Home.module.scss'
import { mailchimpSubscribe } from './mailchimp-subscribe'

// Dynamic import is ussed to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here
export default function Page() {
  const setMode = useUIStore((state: any) => state.setMode)
  const activePreset = useUIStore((state) => state.activePreset)
  const [isMobile, setIsMobile] = useState(null)
  const isDefaultPreset = activePreset === -1

  // //choose the screen size
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
    setMode('full')
  }, [])

  return (
    <div className={styles.contentWrapper}>
      <motion.div
        style={{
          width: isMobile === true ? '98vw' : '80vw',
          height: isMobile === true ? '98vh' : '70vh',
          position: 'fixed',
          zIndex: -10,
          left: isMobile === true ? '1vw' : '10vw',
          top: isMobile === true ? '1vh' : '15vh',
          borderRadius: 30,
          boxShadow: '0 0 0 99999px rgba(0, 0, 0, 1)',
        }}
        initial={{ background: 'rgba(0, 0, 0, 1)' }}
        animate={{ background: 'rgba(0, 0, 0, 0)' }}
        transition={{ delay: 2, duration: 0.7, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div
          style={{
            color: 'white',
            width: '100vw',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile === true ? 20 : 0,
          }}
        >
          <p
            style={{
              fontSize: isMobile === true ? 80 : 120,
              fontFamily: 'Lora',
              lineHeight: isMobile === true ? 1 : 1.4,
            }}
          >
            Coming Soon
          </p>
          <motion.p style={{ fontSize: 14, lineHeight: 1.4, width: '70%' }}>
            Make your designs alive.
            <br />
            Shadergradient is a new tool to create beautiful, moving gradients.
            <br />
            Available on Figma, Framer, and as React component.
          </motion.p>
          <motion.div
            style={{
              width: '100vw',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: isMobile === true ? 30 : 120,
              gap: 16,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeInOut' }}
          >
            <p style={{ fontSize: '0.9em' }}>
              {"Hear from us when it's ready"}
            </p>
            <MailchimpSubscribe isMobile={isMobile} />
          </motion.div>
        </div>
      </motion.div>

      {/* footer */}
      <motion.div
        style={{
          color: PRESETS[isDefaultPreset ? 0 : activePreset].color,
          position: 'absolute',
          width: '100vw',
          height: '15vh',
          textAlign: 'center',
          bottom: 0,
          display: 'flex',
          flexDirection: isMobile === true ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <p
          style={{
            opacity: 0.5,
            display: isMobile === true ? 'none' : 'block',
          }}
        >
          Follow us for more updates & inspirations on Instagram
        </p>
        <motion.div
          style={{ color: 'white', display: 'flex', gap: 6 }}
          initial={{ opacity: isMobile === true ? 1 : 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          <Instagram color='white' />
          <Link href='https://instagram.com/shadergradient' target='_blank'>
            <TextHover
              fontSize={14}
              color={PRESETS[isDefaultPreset ? 0 : activePreset].color}
              content={'shadergradient'}
              delay={0}
              border={false}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

// canvas components goes here
Page.canvas = (props) => <Gradient dampingFactor={0.03} type='waterPlane' />

const WaitlistInput: any = dynamic(
  () =>
    import('https://framer.com/m/waitlistInput-zyql.js@CAZhPgUUcHF980rvEbzk'),
  { ssr: false }
)

function MailchimpSubscribe({ isMobile }) {
  const [value, setValue] = useState('')
  const [valid, setValid] = useState(true)
  const [status, setStatus] = useState('')

  let variant = 'default'
  if (value) {
    if (valid) variant = 'valid'
    else variant = 'invalid'
  }

  if (status) variant = status

  return (
    <WaitlistInput
      style={{ width: isMobile === true ? '80%' : 'default' }}
      onChange={(e) => {
        const value = e.target.value
        setValue(value)

        if (value.match(/^\S+@\S+$/i)) setValid(true)
        else setValid(false)
      }}
      variant={variant}
      onSubmit={async () => {
        setStatus('loading')
        const data = await mailchimpSubscribe({ email: value })
        if (data.result === 'success') setStatus('success')
      }}
      messageFontSize={isMobile ? 15 : 18}
    />
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Shadergradient - coming soon',
    },
  }
}
