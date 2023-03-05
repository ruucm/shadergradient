import { SceneContextProvider } from './context'
import useRefs from 'react-use-refs'
import React from 'react'
import { DEBUG } from './consts'

export function Scene({ views, presenter }) {
  const [container, viewRefs]: any = useViewRefs()

  return (
    <SceneContextProvider value={{ container, viewRefs }}>
      <div
        ref={container}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: DEBUG ? 'skyblue' : 'transparent',
        }}
      >
        {presenter.map((el, key) =>
          React.cloneElement(el, {
            key,
            style: {
              ...el.props.style,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            },
          })
        )}
        {views.map((el, key) =>
          React.cloneElement(el, {
            key,
            style: {
              ...el.props.style,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            },
          })
        )}
      </div>
    </SceneContextProvider>
  )
}

function useViewRefs() {
  const [
    container,
    view1,
    view2,
    view3,
    view4,
    view5,
    view6,
    view7,
    view8,
    view9,
    view10,
    view11,
    view12,
    view13,
    view14,
    view15,
    view16,
    view17,
    view18,
    view19,
    view20,
    view21,
    view22,
    view23,
    view24,
    view25,
    view26,
    view27,
    view28,
    view29,
    view30,
  ] = useRefs()
  const viewRefs = [
    view1,
    view2,
    view3,
    view4,
    view5,
    view6,
    view7,
    view8,
    view9,
    view10,
    view11,
    view12,
    view13,
    view14,
    view15,
    view16,
    view17,
    view18,
    view19,
    view20,
    view21,
    view22,
    view23,
    view24,
    view25,
    view26,
    view27,
    view28,
    view29,
    view30,
  ]

  return [container, viewRefs]
}
