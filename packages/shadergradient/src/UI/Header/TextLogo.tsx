import React from 'react'
import Link from 'next/link'
import { useUIStore } from '../../store'
import { TextHover } from '../TextAnimation/index'

export function TextLogo({ color = 'white', size = 18, onClick }) {
  const mode = useUIStore((state: any) => state.mode)
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
      <Link href='/'>
        <div
          style={{
            width: 'fit-content',
            padding: '2px 5px',
            borderBottom:
              mode !== 'full' ? '2px solid #FF430A' : '2px solid ' + color,
          }}
        >
          <TextHover
            fontSize={size}
            color={mode !== 'full' ? '#FF430A' : color}
            content='ShaderGradient'
            delay={0}
          />
        </div>
      </Link>
    </div>
  )
}
