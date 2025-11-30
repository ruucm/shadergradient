import { useEffect } from 'react'
import { ControlType } from 'framer'
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

  return <div style={{ width: '100%', height: '100%', background: 'blue' }} />
}

SupabaseClient.propertyControls = {
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
}
