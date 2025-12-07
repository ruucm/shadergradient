import React from 'react'
// import { GizmoHelper, GizmoViewport } from '@react-three/drei'
// direct import below components cause "@react-three/drei" packages cannot optimized in Framer sites yet
import { GizmoHelper } from './GizmoHelper'
import { GizmoViewport } from './GizmoViewport'

const lineProps: any = {
  midA: [0, 0, 0],
  midB: [0, 0, 0],
  lineWidth: 1,
}

export function Axis({ margin = [65, 110] }: { margin?: [number, number] }) {
  return (
    <>
      {/* <CubicBezierLine
        start={[0, 0, 0]}
        end={[10, 0, 0]}
        color='red'
        {...lineProps}
      />
      <CubicBezierLine
        start={[0, 0, 0]}
        end={[0, 10, 0]}
        color='green'
        {...lineProps}
      />
      <CubicBezierLine
        start={[0, 0, 0]}
        end={[0, 0, 10]}
        color='blue'
        {...lineProps}
      /> */}
      <GizmoHelper
        alignment='bottom-right' // widget alignment within scene
        margin={margin} // widget margins (X, Y)
        renderPriority={2}
      >
        <GizmoViewport
          axisColors={['#FF430A', '#FF430A', '#FF430A']}
          labelColor='white'
          hideNegativeAxes
          // @ts-ignore
          axisHeadScale={0.8}
        />
      </GizmoHelper>
    </>
  )
}
