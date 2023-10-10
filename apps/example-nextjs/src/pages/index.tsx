import { ShaderGradient } from 'shadergradient'
// import { Gradient } from 'https://ruucm.github.io/shadergradient/shadergradient@1.1.5/index.mjs' (Types are not supported)
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
Page.canvas = (props) => <ShaderGradient cDistance={24} color1='#ff5005' color2='#dbba95' color3='#d0bce1' />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
