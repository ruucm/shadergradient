import { GradientT } from "@/types"

export function propsToQuery(props: GradientT): string {
  const flatProps: Record<string, string> = {}

  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        flatProps[`${key}.${nestedKey}`] = String(nestedValue)
      })
    } else {
      flatProps[key] = String(value)
    }
  })

  return new URLSearchParams(flatProps).toString()
}

export function queryToProps(query: string): GradientT {
  const params = new URLSearchParams(query)
  const props: Partial<GradientT> = {}

  params.forEach((value, key) => {
    const [parent, child] = key.split('.')
    if (child) {
      if (!props[parent]) {
        props[parent] = {}
      }
      props[parent][child] = isNaN(Number(value)) ? value : Number(value)
    } else {
      props[key] = isNaN(Number(value)) ? value : Number(value)
    }
  })

  return props as GradientT
}
