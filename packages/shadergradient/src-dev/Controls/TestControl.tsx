import * as React from 'react'
import { useQueryState } from '@/store'

export function TestControl() {
  const [, setcDistance] = useQueryState('cDistance')

  return (
    <input
      type='number'
      onChange={(e) => {
        setcDistance(e.target.value)
      }}
      style={{ border: '1px solid black', fontSize: 24 }}
    />
  )
}
