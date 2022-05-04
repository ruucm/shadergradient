import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'
import { Header } from 'shadergradient'
import useStore from '@/helpers/store'

const Dom = ({ children }) => {
  const [inAbout, setInAbout] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
    if (router.pathname === '/about') {
      setInAbout(true)
    }
  }, [])
  const router = useRouter()

  return (
    <div
      className='absolute top-0 left-0 z-10 w-full h-full overflow-hidden dom'
      ref={ref}
    >
      {children}

      <Header
        onLogoClick={() => router.push('/')}
        aboutBtn
        onAboutClick={() => router.push('/about')}
        inAbout={inAbout}
      />
    </div>
  )
}

export default Dom
