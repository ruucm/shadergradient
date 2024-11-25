import { useEffect } from 'react'
import { updateGradientState } from './store'

export function useSearchParamToStore() {
  useEffect(() => {
    // if (
    //   window.location.search?.includes('pixelDensity') // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)
    // )
    updateGradientState(window.location.search)
  }, [])
}
