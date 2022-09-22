import React from 'react'

type Props = {
  zoomOut?: boolean
  control?: 'query' | 'props'
  [x: string]: any
}

export function Box(props: Props) {
  return (
    <>
      {/* @ts-ignore */}
      <ambientLight />
      {/* @ts-ignore */}
      <pointLight position={[10, 10, 10]} />
      {/* @ts-ignore */}
      <mesh {...props} rotation={[1, 1, 0]}>
        {/* @ts-ignore */}
        <boxGeometry args={[2, 2, 2]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color={'hotpink'} />
        {/* @ts-ignore */}
      </mesh>
    </>
  )
}
