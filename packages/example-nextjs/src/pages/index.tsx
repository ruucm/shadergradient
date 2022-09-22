import React from 'react'
import { Box } from 'box'

const DOM = () => {
  return <div>NextJS Example</div>
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Box />
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
