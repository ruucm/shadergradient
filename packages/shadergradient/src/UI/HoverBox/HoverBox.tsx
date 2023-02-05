import { cx } from '@/utils'
import * as React from 'react'

type ControlTypeTitlePropsT = {
  content?: string
  isHovered?: boolean
  centered?: boolean
  downward?: boolean
  isFigma?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HoverBox: React.FC<ControlTypeTitlePropsT> = ({
  content,
  onClick,
  isHovered,
  centered = false,
  downward = true,
  isFigma = false,
  ...rest
}) => {
  return (
    <div
      className={cx('text-sm font-medium text-white')}
      style={{
        position: isFigma ? 'sticky' : 'fixed',
        marginLeft: centered === true ? 0 : -10,
        visibility: isHovered ? 'visible' : 'hidden',
        transitionDuration: '0.3s',
        opacity: isHovered ? 1 : 0,
        zIndex: 20,
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <div
        style={{
          width: 'fit-content',
          height: 'fit-content',
          position: 'absolute',
          maxWidth: 280,
          minWidth: 200,
          top: isHovered ? 10 : 0,
          transitionDuration: '0.3s',
        }}
      >
        <div
          className={cx('bg-primary')}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: 3,
            opacity: 0.8,
            zIndex: 0,
          }}
        >
          <div
            className={cx('bg-primary')}
            style={{
              width: 17,
              height: 17,
              background: 'rgb(255, 67, 10)',
              transform: 'rotate(45deg)',
              position: 'absolute',
              left: centered === true ? 'calc(50% - 15px)' : 12,
              top: -7,
              borderRadius: 3,
            }}
          ></div>
        </div>
        <p
          style={{
            padding: 8,
            zIndex: 20,
            position: 'relative',
          }}
        >
          {content}
        </p>
      </div>
    </div>
  )
}
