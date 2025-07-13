import type { ComponentType } from 'react'
import { useBillingInterval } from '@/store'

export function TogglePrice(Component): ComponentType {
  return (props) => {
    const [, setBillingInterval] = useBillingInterval()

    return (
      <Component
        {...props}
        onMonthly={() => setBillingInterval('year')}
        onYearly={() => setBillingInterval('month')}
      />
    )
  }
}
export function Price(Component): ComponentType {
  return (props) => {
    const [billingInterval] = useBillingInterval()

    return (
      <Component
        {...props}
        variant={billingInterval === 'year' ? 'year' : 'month'}
      />
    )
  }
}
