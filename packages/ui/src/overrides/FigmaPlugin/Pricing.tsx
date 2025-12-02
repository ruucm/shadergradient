import { ComponentType } from 'react'

import {
  useFigma,
  useBillingInterval,
} from '../../store'

import { useDBTable } from './useDBTable'

import {
  STRIPE_BILLING_URL,
  STRIPE_BUY_YEARLY_URL,
  STRIPE_BUY_MONTHLY_URL,
} from './consts'



import { useSubscription, useUserDB } from './utils'


  
  // 🟢 ON USER INFO COMPONENT
  export function userInfo(Component): ComponentType {
    return (props) => {
      const [subscription, subDBLoading] = useSubscription('userInfo-channel')
      const [userDB] = useUserDB('sg-info')
      console.log('[userInfo] subscription:', subscription)
      console.log('[userInfo] userDB:', userDB)
  
      let variant = 'Loading'
      if (subDBLoading) variant = 'Loading'
      else if (!userDB) variant = 'NoUser'
      else if (subscription) variant = 'Pro'
      else variant = 'Free'
      
      console.log('[userInfo] Determined variant:', variant)
  
      return (
        <Component
          {...props}
          supportLink={`${STRIPE_BILLING_URL}?prefilled_email=${encodeURIComponent(
            userDB?.email
          )}`}
          email={userDB ? `${userDB?.email}` : ''}
          variant={variant}
        />
      )
    }
  }
  
  
  // 🟢 ON 'UPGRADE' BUTTON (Upgrade page)
  export function subscribeLink(Component): ComponentType {
    return (props) => {
        const [figma] = useFigma()
      const [userDB] = useUserDB()
      const [billingInterval] = useBillingInterval()
      const isYearly = billingInterval === 'year'
  
      return (
        <Component
          {...props}
          onClick={() => {
            window.open(
              `${
                isYearly ? STRIPE_BUY_YEARLY_URL : STRIPE_BUY_MONTHLY_URL
              }?prefilled_email=${encodeURIComponent(
                userDB?.email
              )}&client_reference_id=${figma.user?.id}`,
            )
          }}
      
        />
      )
    }
  }


// 🟢 ON UPGRADE - SHOW 'START' BUTTON AND SIGNED UP EMAIL
export function isUpgraded(Component): ComponentType {
    return (props) => {
      const [subscription] = useSubscription(props['data-framer-name'])
      if (subscription) return <Component {...props} />
    }
  }
  
  // 🟢 DURING UPGRADE - SHOW CHECK YOUR BROWSER TEXT, AND ON UPGRADE - UPGRADED TEXT
  export function upgradingText(Component): ComponentType {
    return (props) => {
      const [subscription] = useSubscription(props['data-framer-name'])
      // if (subscription)
      return (
        <Component
          {...props}
          text={subscription ? 'Upgraded!' : `Check\nyour browser`}
        />
      )
    }
  }
  
  // 🟢 ON USER EMAIL AFTER SIGN UP
  export function userEmail(Component): ComponentType {
    return (props) => {
      const [userDB] = useUserDB()
      return <Component {...props} text={userDB?.email || ''} />
    }
  }
  
  // 🟢 ON PRICE TOGGLE (Upgrade page)
  export function TogglePriceFigma(Component): ComponentType {
    return (props) => {
      const [, setBillingInterval] = useBillingInterval()
  
      return (
        <Component
          {...props}
          onMonthly={() => setBillingInterval('month')}
          onYearly={() => setBillingInterval('year')}
        />
      )
    }
  }
  
  // 🟢 ON PRICE TOGGLE (Upgrade page)
  export function PriceFigma(Component): ComponentType {
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
  
  // 🟢 ON PRICE MODAL DESCRIPTION (Upgrade page)
  export function PriceText(Component): ComponentType {
    return (props) => {
      const [billingInterval] = useBillingInterval()
      const isYearly = billingInterval === 'year'
  
      return (
        <Component
          {...props}
          text={isYearly ? ' — just $2 a month' : ' — just $4 a month'}
        />
      )
    }
  }
  
  

// 🟢 ON EMAIL INPUT (Trial page)
export function StartTrial(Component): ComponentType {
    return (props: any) => {
      const [figma] = useFigma()
      const figma_user_id = figma.user?.id
      const { insertRow } = useDBTable('users', 'sg-figma-t', {
        enabled: false, // No fetch needed, only use insert
      })
  
      return (
        <Component
          {...props}
          onSubmit={(email) => {
            if (!figma_user_id) {
              console.error('[StartTrial] figma_user_id is missing')
              return
            }
            insertRow({ email, figma_user_id, trial_started_at: new Date() })
            props?.onSubmit()
          }}
        />
      )
    }
  }
  