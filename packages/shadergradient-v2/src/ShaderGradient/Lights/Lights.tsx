import React from 'react'

export function Lights(): JSX.Element {
  return (
    <>
      {/* TODO: support higher version of three 0.154.0 */}
      {/* it has darker reflection with the existing shader (packages/shadergradient-v2/src/shaders/a/fragment.glsl) */}
      <ambientLight intensity={1} />
    </>
  )
}
