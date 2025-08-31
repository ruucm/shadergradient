import React from 'react'

export const Spacing = ({ guide = false, className = 'w-3 h-3', ...props }) => (
  <div
    {...props}
    className={className}
    style={{
      position: 'relative',

      background: 'hsl(100, 37%, 79%)',
      opacity: 'var(--guide-opacity)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap',
        fontSize: '8px',
      }}
    >
      {guide && className}
    </div>
  </div>
)
