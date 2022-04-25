import React from 'react'
// import Link from 'next/link'
import { TextHover } from '../TextAnimation/index'

export function TextLogo({ color = 'white', size = 18, onClick }) {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        height: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      {/* <Link href='/'> */}
      <div
        style={{
          width: 'fit-content',
          padding: '2px 5px',
          borderBottom: '2px solid ' + color,
        }}
      >
        <TextHover
          fontSize={size}
          color={color}
          content='ShaderGradient'
          delay={0}
        />
      </div>
      {/* </Link> */}
    </div>
  )
}
