import * as React from 'react'
// import cx from 'classnames'
// import { motion } from 'framer-motion'

type ControlTypeTitlePropsT = {
  content?: string
  isHovered?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const IconHoverBox: React.FC<ControlTypeTitlePropsT> = ({
  content,
  isHovered,
  ...rest
}) => {
  return (
    <div
      //   className={cx('text-sm font-medium text-white')}
      style={{
        position: 'absolute',
        display: 'flex',
        visibility: isHovered ? 'visible' : 'hidden',
        justifyContent: 'center',
        marginBottom: isHovered ? 85 : 75,
        transitionDuration: '0.3s',
        opacity: isHovered ? 1 : 0,
        color: 'white',
      }}
    >
      <div
        style={{
          width: 'fit-content',
          height: 'fit-content',
        }}
      >
        <div
          //   className={cx('bg-primary')}
          style={{
            position: 'absolute',
            background: 'rgb(255, 67, 10)',
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
            // className={cx('bg-primary')}
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
