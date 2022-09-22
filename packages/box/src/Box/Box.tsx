import React from 'react'

type Props = {
  zoomOut?: boolean
  control?: 'query' | 'props'
  [x: string]: any
}

export function Box(props: Props) {
  return (
    <>
      <mesh {...props}>
        {/* @ts-ignore */}
        <boxGeometry args={[1, 1, 1]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
    </>
  )
}
