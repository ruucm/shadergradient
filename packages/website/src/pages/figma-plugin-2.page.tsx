import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Gradient, AllControls, useURLQueryState } from 'shadergradient'

const FigmaControls: any = dynamic(
  () =>
    import('https://framer.com/m/FigmaControls-mHhp.js@jcCLrlcM1pzq17Q8m80V'),
  { ssr: false }
)
const UrlInput: any = dynamic(
  () => import('https://framer.com/m/UrlInput-RO5w.js@rBm5Rh4v9aQ7Rf0eiq03'),
  { ssr: false }
)

const DOM = () => {
  const [showInput, setShowInput] = useState(false)
  const setQueryValue = useURLQueryState()

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {showInput && (
        <UrlInput
          // value={value}
          onChange={(value) => {
            console.log('value!!', value)
            // TODO: add validation
            setQueryValue(value)
          }}
        />
      )}
      <FigmaControls onClickUrlTool={() => setShowInput(!showInput)} />

      <AllControls />
    </div>
  )
}

// canvas components goes here
const R3F = () => {
  return <Gradient />
}

const Page = () => {
  return (
    <>
      {/* @ts-ignore */}
      <R3F r3f />
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
