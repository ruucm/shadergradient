import React, { useState } from 'react'
import { Gradient, AllControls, useURLQueryState } from 'shadergradient'

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
        <input
          // value={value}
          onChange={(e) => {
            const value = e.target.value
            console.log('value!!', value)
            // TODO: add validation
            setQueryValue(value)
          }}
        />
      )}
      <button onClick={() => setShowInput(!showInput)}>button</button>

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
