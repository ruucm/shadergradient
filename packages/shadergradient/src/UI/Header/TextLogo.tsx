import React from 'react'
// import Link from 'next/link'
import { useUIStore, useCursorStore } from '../../store'
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
      {/* <Link href='/'> */}
      <div
        style={{
          width: 'fit-content',
          padding: '2px 5px',
        }}
        onMouseMove={() => {
          useCursorStore.setState({ hover: 'button' })
        }}
        onMouseLeave={() => {
          useCursorStore.setState({ hover: 'default' })
        }}
      >
        <TextHover
          fontSize={size}
          color={mode !== 'full' ? '#FF430A' : color}
          content='ShaderGradient'
          delay={0}
          border={true}
        />
      </div>
      {/* </Link> */}
    </div>
  )
}
