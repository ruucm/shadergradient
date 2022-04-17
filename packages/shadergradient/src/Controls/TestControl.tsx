import * as React from 'react'
import { useQueryState } from '../hooks/index'

export function TestControl() {
  const [, setUStrength] = useQueryState('uStrength')

  return (
    <input
      type='number'
      onChange={(e) => {
        setUStrength(e.target.value)
      }}
      style={{ border: '1px solid black' }}
    />
  )
}
