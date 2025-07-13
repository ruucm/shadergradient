import type { ComponentType } from 'react'
import { create } from 'zustand'
import { useBillingInterval } from '../../store'

// export const useBillingIntervalStore = create((set) => ({
//   billingInterval: 'year',
//   setBillingInterval: (payload) =>
//     set((state) => ({ billingInterval: payload })),
// }))

// export function useBillingInterval() {
//   const billingInterval = useBillingIntervalStore(
//     (state: any) => state.billingInterval
//   )
//   const setBillingInterval = useBillingIntervalStore(
//     (state: any) => state.setBillingInterval
//   )
//   return [billingInterval, setBillingInterval]
// }

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
