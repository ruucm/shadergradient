import * as React from 'react'
import { Info } from 'react-feather'
import { HoverBox, Spacing } from '@/ui'
import { useEffect, useRef } from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'

type InputPanelPropsT = {
  title?: string
  children: React.ReactNode
  gap?: string
  info?: boolean
  hoverContent?: string
  isHovered?: string
  autoScroll?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const InputPanel: React.FC<InputPanelPropsT> = ({
  title,
  children,
  gap = 'w-2',
  info,
  hoverContent,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  autoScroll = false,
  ...rest
}) => {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (el && autoScroll)
      scrollIntoView(el, { scrollMode: 'if-needed', behavior: 'smooth' })
  }, [ref, autoScroll])

  return (
    <div
      ref={ref}
      className='flex justify-between items-center gap-3.5'
      {...rest}
    >
      <span className='font-semibold text-primary w-[50%] text-base relative select-none'>
        {title}{' '}
        <span
          className='cursor-pointer'
          style={{ display: 'inline-block', opacity: 0.6 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {info === true && <Info size={14} color='rgb(255,67,10)' />}
        </span>
        {hoverContent && (
          <HoverBox
            content={hoverContent}
            isHovered={isHovered === title}
            downward={false}
          />
        )}
      </span>
      <div className='flex justify-between w-full'>
        {React.Children.map(children, (child, id) => {
          return (
            <>
              <div key={id} className='w-full'>
                {React.cloneElement(child as React.ReactElement<any>, {})}
              </div>
              {gap && id < React.Children.count(children) - 1 && (
                <Spacing className={`${gap} flex-shrink-0`} />
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}
