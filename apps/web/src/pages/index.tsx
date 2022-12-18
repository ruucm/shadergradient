import dynamic from 'next/dynamic'
// TODO: separate it to the ui package
import { Button } from 'shadergradient'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Box = dynamic(() => import('shadergradient').then((m) => m.Box), { ssr: false })
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <div>
      Page
      <Button />
    </div>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => (
  <>
    <Box />
    <Logo scale={0.5} route='/blob' position-y={-1} />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
