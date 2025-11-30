import React, { useEffect } from 'react'
import { addPropertyControls, ControlType } from 'framer'
import { useSupabaseStore } from '../../store'

interface Props {
  databaseURL: string
  anonKey: string
}

export function SupabaseClient(props: Props) {
  const { databaseURL, anonKey } = props
  const initSupabase = useSupabaseStore((state) => state.initSupabase)

  useEffect(() => {
    if (databaseURL && anonKey) {
      initSupabase(databaseURL, anonKey)
    }
  }, [databaseURL, anonKey])

  return null
}

addPropertyControls(SupabaseClient, {
  databaseURL: {
    title: 'DB URL',
    type: ControlType.String,
    defaultValue: '',
  },
  anonKey: {
    title: 'Anon Key',
    type: ControlType.String,
    defaultValue: '',
  },
})
