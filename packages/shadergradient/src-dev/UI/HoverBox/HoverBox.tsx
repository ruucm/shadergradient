import { cx } from '@/utils'
import * as React from 'react'

type ControlTypeTitlePropsT = {
  content?: string
  isHovered?: boolean
  position?: string
  downward?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HoverBox: React.FC<ControlTypeTitlePropsT> = ({
  content,
  onClick,
  isHovered,
  position = 'left', // center, left, right
  // centered = false,
  downward = true,

  ...rest
}) => {
  return (
    <div
      className={cx('text-sm font-medium text-white z-hoverBox')}
      style={{
        position: 'absolute',
        marginLeft: position === 'center' ? 0 : -10,
        visibility: isHovered ? 'visible' : 'hidden',
        marginTop:
          isHovered === true && downward === true
            ? 10
            : isHovered === true && downward === false
            ? -10
            : 0,
        transitionDuration: '0.3s',
        opacity: isHovered ? 1 : 0,
      }}
    >
      <div
        style={{
          maxWidth: 230,
          width: 'fit-content',
          height: 'fit-content',
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
          {/* tooltip */}
          <div
            className={cx('bg-primary')}
            style={{
              width: 17,
              height: 17,
              background: 'rgb(255, 67, 10)',
              transform: 'rotate(45deg)',
              position: 'absolute',
              left:
                position === 'center'
                  ? 'calc(50% - 15px)'
                  : position === 'right'
                  ? 'calc(100% - 12px - 15px)'
                  : 12, // position left
              top: downward === true ? -7 : null,
              bottom: downward === false ? -7 : null,
              borderRadius: 3,
            }}
          ></div>
        </div>
        <p style={{ padding: 8, zIndex: 20, position: 'relative' }}>
          {content}
        </p>
      </div>
    </div>
  )
}
