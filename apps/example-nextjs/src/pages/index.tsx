import { Gradient } from 'shadergradient'
// import { Gradient } from 'https://gh.ruucm.work/shadergradient/shadergradient@1.1.5/index.mjs' (Types are not supported)
import confetti from 'https://cdn.skypack.dev/canvas-confetti'
import { useEffect } from 'react'

// Dom components go here
export default function Page(props) {
  useEffect(() => {
    confetti()
  }, [])
  return <></>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Gradient cDistance={24} color1='#FF0000' color2='#00FF00' color3='#0000FF' />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
