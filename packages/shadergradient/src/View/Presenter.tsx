import { cloneElement } from 'react'
import { DEBUG } from './consts'
import { useSceneContext } from './context'

export function Presenter({ children }) {
  const ctx: any = useSceneContext()
  if (!ctx) return null

  const renderedChildren = children?.[0] || children
  const presenters = renderedChildren?.props.children

  return (
    presenters.map?.((el, id) =>
      cloneElement(el, {
        key: id,
        ref: ctx.viewRefs[id],
        style: {
          ...el.props.style,
          background: DEBUG ? el.props.style.background : 'transparent',
        },
      })
    ) ||
    cloneElement(presenters, {
      ref: ctx.viewRefs[0],
      style: {
        ...presenters.props.style,
        background: DEBUG ? presenters.props.style.background : 'transparent',
      },
    })
  )
}
