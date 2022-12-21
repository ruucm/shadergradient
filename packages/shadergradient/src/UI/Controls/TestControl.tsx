// import { useQueryState } from '@shadergradient/store'
import { useQueryState } from '@/store'

export function TestControl({ onChange }) {
  const [cDistance, setDistance] = useQueryState('cDistance')

  return (
    <>
      <input
        type='number'
        onChange={(e) => {
          setDistance(e.target.value)
        }}
        style={{ border: '1px solid black', fontSize: 24 }}
      />
    </>
  )
}
