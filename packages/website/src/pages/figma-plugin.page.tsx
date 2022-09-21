import React, { useEffect, useState } from 'react'

const FigmaPlugin: any = dynamic(
  () =>
    import('https://framer.com/m/Figma-Plugin-ModN.js@LSpLD17jHXFDJ8B2b1Qv'),
  { ssr: false }
)

import dynamic from 'next/dynamic'

const DOM = () => {
  useEffect(() => {
    window.React = React
  }, [])

  const [value, setValue] = useState('')
  const [valid, setValid] = useState(true)

  let variant
  if (value) {
    if (valid) variant = 'valid'
    else variant = 'invalid'
  }

  return (
    <FigmaPlugin
      // variant={valid ? 'valid' : 'invalid'}
      variant={variant}
      style={{ width: '100%', height: '100%' }}
      value={value}
      onChange={(value) => {
        console.log('value', value)
        setValue(value)
        if (value === '1234') setValid(false)
        else setValid(true)
      }}
    />
  )
}

const Page = () => {
  return (
    <>
      <DOM />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Shader Gradient ─ Figma Plugin',
    },
  }
}
