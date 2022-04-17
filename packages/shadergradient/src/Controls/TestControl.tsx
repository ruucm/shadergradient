import * as React from 'react'
import { useQueryState } from '../hooks'

export function TestControl() {
  const [uStrength, setUStrength] = useQueryState('uStrength')

  return (
    <input
      type='number'
      onChange={(e) => {
        setUStrength(e.target.value)
      }}
    />
  )
}
