import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Dom from '@/components/layout/dom'
import NextHeader from '@/config'
import partition from '@/helpers/partition'
import useStore from '@/helpers/store'
import 'shadergradient/src/tailwind-compiled.css'

const NextJsCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: false,
})

const Balance = ({ child }) => {
  const [r3f, dom] = partition(child, (c) => c.props.r3f === true)

  return (
    <>
      <Dom>{dom}</Dom>
      <NextJsCanvas>{r3f}</NextJsCanvas>
    </>
  )
}

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  const child = Component(pageProps).props.children

  return (
    <>
      <NextHeader title={pageProps.title} />
      <Balance child={child} />
    </>
  )
}

export default App
