import React from 'react'
import { Box } from 'box'
import { Gradient } from 'shadergradient'

const DOM = () => {
  return <div>NextJS Example</div>
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Box />
      <Gradient
        cDistance={30}
        // grain='off'
        // shader='planeTest'
        // brightness={0.5}
        // grain='off'
        //  shader='whatthe'
      />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: { title: 'Test Page' },
  }
}
