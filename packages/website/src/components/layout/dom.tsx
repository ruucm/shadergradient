import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'
import { Header } from 'shadergradient'
import useStore from '@/helpers/store'

const Dom = ({ children }) => {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  const router = useRouter()
  const { asPath } = useRouter()

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    useStore.setState({ dom: ref })
  }, [])

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
        onBackClick={() => router.back()}
        inAbout={asPath === '/about' ? true : false}
        isMobile={isMobile}
      />
    </div>
  )
}

export default Dom
