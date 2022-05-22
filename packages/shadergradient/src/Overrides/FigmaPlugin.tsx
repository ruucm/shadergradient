import React from 'react'
import type { ComponentType } from 'react'
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
} from './FigmaApi'

// example from https://github.com/sonnylazuardi/framer-sites-figma-plugin/
export function createRectangle(Component): ComponentType {
  return (props) => {
    return (
      <Component
        {...props}
        onClick={async () => {
          postFigmaMessage(() => {
            const ellipse = figma.createRectangle()
            ellipse.resize(300, 300)
          })
        }}
      />
    )
  }
}

export function insertCanvasAsImage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => postFigmaMessageForSnapShot(() => void 0)}
      />
    )
  }
}
