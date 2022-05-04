import * as React from 'react'
import cx from 'classnames'

type ControlTypeTitlePropsT = {
  content?: string
  text?: string
  link?: string
  tag?: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const TextHoverBox: React.FC<ControlTypeTitlePropsT> = ({
  content,
  link = null,
  text,
  tag = null,
  ...rest
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div
      onMouseOver={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
      style={{
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'end',
        // width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <div
        className={cx('text-sm font-medium text-white')}
        style={{
          position: 'absolute',
          display: 'flex',
          visibility: isHovered ? 'visible' : 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: isHovered ? 30 : 20,
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
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'end',
            }}
          >
            <div
              className={cx('bg-primary')}
              style={{
                width: 17,
                height: 17,
                transform: 'rotate(45deg)',
                borderRadius: 3,
                marginBottom: -5,
              }}
            />
          </div>
          <p
            className='text-center'
            style={{
              padding: 8,
              zIndex: 20,
              position: 'relative',
              width: 'max-content',
              maxWidth: '200px',
            }}
          >
            {content}
            {tag !== null && (
              <span
                className='text-xs text-center'
                style={{ color: 'lightgrey', lineHeight: 0.6 }}
              >
                <br />
                {tag}
              </span>
            )}
          </p>
        </div>
      </div>
      <p
        className='text-primary'
        style={{
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        <a href={link}>{text}</a>
      </p>
    </div>
  )
}
