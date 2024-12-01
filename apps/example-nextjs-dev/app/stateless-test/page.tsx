'use client'

import { ShaderGradientCanvas } from '@shadergradient/react'
import {
  useQueryState,
  ShaderGradientStateless,
} from '@shadergradient/react/stateless'

export default function Page() {
  const [, setColor1] = useQueryState('color1')

  return (
    <div className='flex'>
      <div className='flex-1 h-screen'>
        <ShaderGradientCanvas>
          {/* When control is 'query', the gradient props follows url query params */}
          <ShaderGradientStateless control='query' />
        </ShaderGradientCanvas>
      </div>

      <button
        onClick={() => setColor1('#0D77E0')}
        className='fixed bottom-5 right-5 z-20'
      >
        Change Color
      </button>
    </div>
  )
}
