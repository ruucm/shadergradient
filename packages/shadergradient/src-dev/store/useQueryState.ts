import { useCallback } from 'react'
import * as qs from 'query-string'
import { useQueryStore } from './store'

export const useQueryState = (propName: any, defaultValue: any = null) => {
  const selector = useCallback(
    (state) =>
      typeof state[propName] !== 'undefined' ? state[propName] : defaultValue,
    [propName, defaultValue]
  )
  const globalValue = useQueryStore(selector)
  const _setGlobalValue = useCallback(
    (valueFun) =>
      useQueryStore.setState({
        [propName]: valueFun(useQueryStore.getState()[propName]),
      }),
    [propName]
  )

  const setQueryValue = useCallback(
    (newVal) => {
      _setGlobalValue((currentState: any) => {
        if (typeof newVal === 'function') {
          newVal = newVal(currentState || defaultValue)
        }
        if (Number.isFinite(newVal)) {
          newVal = parseFloat(newVal.toFixed(2))
        }

        // defer update of URL
        setTimeout(() => {
          const query = useQueryStore.getState()
          updateHistory(
            qs.stringifyUrl(
              // @ts-ignore
              { url: window.location.pathname, query },
              { skipNull: true, arrayFormat: 'index' }
            )
          )
        }, 0)

        return newVal
      })
    },
    [_setGlobalValue]
  )

  return [globalValue, setQueryValue]
}

export const useURLQueryState = () => {
  // it's weird, but need to wrap below func as a hook
  const setQueryValue = (search) => {
    // defer update of URL
    setTimeout(() => {
      const query: any = useQueryStore.getState()
      updateHistory(
        qs.stringifyUrl(
          { url: window.location.pathname, query },
          { skipNull: true, arrayFormat: 'index' }
        )
      )
    }, 0)

    const state = qs.parse(search, {
      parseNumbers: true,
      parseBooleans: true,
      arrayFormat: 'index',
    })

    useQueryStore.setState(state)
  }
  return setQueryValue
}

function updateHistory(path: string) {
  window.history.pushState(
    {
      prevUrls: [
        ...(window.history.state?.prevUrls || []),
        window.location.origin + path,
      ],
    },
    document.title,
    path
  )
}
