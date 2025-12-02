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
    console.log(
      '[SupabaseClient] Component mounted with URL:',
      databaseURL ? 'provided' : 'missing'
    )
    if (databaseURL && anonKey) {
      console.log('[SupabaseClient] Initializing Supabase client...')
      initSupabase(databaseURL, anonKey)
    } else {
      console.warn('[SupabaseClient] Missing databaseURL or anonKey')
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
