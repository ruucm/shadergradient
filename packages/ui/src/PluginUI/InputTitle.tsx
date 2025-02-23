import React from 'react'
import { useState } from 'react'

type InputTitlePropsT = {
  title: string
  info: boolean
  infoContent: any
  condition: boolean
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function InputTitle({
  title,
  info,
  infoContent,
  condition = false,
}: InputTitlePropsT): JSX.Element {
  const [isMouseOver, setIsMouseOver] = useState(false)
  return (
    <div
      className='w-[100px] flex items-center flex-shrink-0 gap-1'
      style={{ fontFamily: 'Inter Medium' }}
    >
      <p className='font-medium whitespace-nowrap'>
        {condition === true && <span className='opacity-30'>↳ </span>}
        {title}
      </p>
      {info === true && (
        <div
          className='flex items-center w-2 h-2 bg-[blue] gap-2 relative'
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <div
            className={
              'absolute text-[white] p-4 bg-[red] ' +
              (isMouseOver === true ? 'opacity-100' : 'opacity-0')
            }
          >
            {infoContent}
          </div>
        </div>
        // <HoverMessage content={infoContent} isHovered={isMouseOver} />
      )}
    </div>
  )
}
