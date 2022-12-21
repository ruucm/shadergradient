import * as React from 'react'
import { cx } from '@/utils'

type ControlTypeTitlePropsT = {
  content?: string
  isHovered?: boolean
  bottom?: number
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const IconHoverBox: React.FC<ControlTypeTitlePropsT> = ({
  content,
  isHovered,
  bottom = 75,
  ...rest
}) => {
  return (
    <div
      className={cx('text-sm font-medium text-white')}
      style={{
        position: 'absolute',
        display: 'flex',
        visibility: isHovered ? 'visible' : 'hidden',
        justifyContent: 'center',
        marginBottom: isHovered ? bottom + 10 : bottom,
        transitionDuration: '0.3s',
        opacity: isHovered ? 1 : 0,
      }}
    >
      <div
        style={{
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
            paddingTop: 22,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            className={cx('bg-primary')}
            style={{
              width: 17,
              height: 17,
              background: 'rgb(255, 67, 10)',
              transform: 'rotate(45deg)',
              margin: '0 auto',
              borderRadius: 3,
            }}
          ></div>
        </div>
        <p
          style={{
            padding: 8,
            zIndex: 20,
            position: 'relative',
            whiteSpace: 'nowrap',
          }}
        >
          {content}
        </p>
      </div>
    </div>
  )
}
