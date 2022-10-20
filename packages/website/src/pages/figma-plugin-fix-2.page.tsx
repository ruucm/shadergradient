import React, { useEffect } from 'react'

const FigmaPlugin: any = dynamic(
  () =>
    import('https://framer.com/m/Figma-Plugin-2-jgyp.js@Rj4LqkQMkV5dkOAia4rk'),
  { ssr: false }
)

import dynamic from 'next/dynamic'

const DOM = () => {
  useEffect(() => {
    window.React = React
  }, [])

  console.log('only with the gradient shader + text comp')

  return <FigmaPlugin style={{ width: '100%', height: '100%' }} />
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
