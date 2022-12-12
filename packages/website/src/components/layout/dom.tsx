import { useEffect, useRef, useState } from 'react'

import {
  useElementScroll,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { useRouter } from 'next/router'
import { Header } from 'shadergradient'
import { Cursor } from 'shadergradient/src/UI/Cursor'
import useStore from '@/helpers/store'

const Dom = ({ children }) => {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  // const scrollRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const { scrollY } = useElementScroll(ref)
  const container = useTransform(
    scrollY,
    [0, 0.33, 0.66, 1],
    [0.5, 0.75, 0.5, 1]
  )
  scrollY.onChange(setProgress)

  useEffect(() => {
    useStore.setState({ scroll: progress })
  }, [progress])

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  const router = useRouter()
  const { pathname } = useRouter()

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    useStore.setState({ dom: ref })
  }, [])

  return (
    <div
      // className='absolute top-0 left-0 z-10 w-full h-full overflow-hidden dom'
      className='absolute top-0 left-0 z-10 w-full h-full overflow-scroll dom'
      ref={ref}
    >
      {children}
      {pathname !== '/figma-plugin' && (
        <>
          <Header
            // onLogoClick={() => router.push('/')}
            aboutBtn
            // onAboutClick={() => router.push('/about')}
            // onBackClick={() => router.back()}
            inAbout={pathname === '/about' ? true : false}
            isMobile={isMobile}
            loadingMotion={pathname === '/' ? true : false}
          />
          <Cursor />
        </>
      )}
    </div>
  )
}

export default Dom
