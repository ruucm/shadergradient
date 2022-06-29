import * as React from 'react'
import cx from 'classnames'

type ControlTypeTitlePropsT = {
  content?: string
  isHovered?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HoverBox: React.FC<ControlTypeTitlePropsT> = ({
  content,
  onClick,
  isHovered,
  ...rest
}) => {
  return (
    <div
      className={cx('text-sm font-medium text-white')}
      style={{
        position: 'fixed',
        marginLeft: -10,
        zIndex: 200,
        visibility: isHovered ? 'visible' : 'hidden',
        marginTop: isHovered ? 10 : 0,
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
          <div
            className={cx('bg-primary')}
            style={{
              width: 17,
              height: 17,
              background: 'rgb(255, 67, 10)',
              transform: 'rotate(45deg)',
              position: 'absolute',
              left: 12,
              top: -7,
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
