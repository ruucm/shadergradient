<<<<<<< Updated upstream
import { useEffect, useRef } from 'react'
=======
import { useEffect, useRef, useState } from 'react'
import router from 'next/router'
import { Header } from 'shadergradient'
>>>>>>> Stashed changes
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

  return (
    <div
      className='absolute top-0 left-0 z-10 w-full h-full overflow-hidden dom'
      ref={ref}
    >
      {children}
<<<<<<< Updated upstream
=======
      <Header
        onLogoClick={() => router.push('/')}
        aboutBtn
        onAboutClick={() => router.push('/about')}
        inAbout={inAbout}
      />
>>>>>>> Stashed changes
    </div>
  )
}

export default Dom
