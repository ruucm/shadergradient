import React from 'react'

type Props = {
  control?: 'query' | 'props'
  [x: string]: any
}

export function Box(props: Props) {
  return (
    <>
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}
      <mesh {...props} rotation={[1, 1, 0]} scale={0.5}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
    </>
  )
}
