import { ScrollTicker } from '@/templates/Scroll'
import dynamic from 'next/dynamic'
// TODO: separate it to the ui package
import { Button } from 'shadergradient/ui'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Gradient: any = dynamic(
  () => import('shadergradient').then((m) => m.Gradient),
  {
    ssr: false,
  }
)

// Dom components go here
export default function Page(props) {
  return (
    <div>
      <Button />
    </div>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => (
  <>
    {/* <ScrollTicker /> */}
    <Gradient
      toggleAxis
      zoomOut
      control='query'
      urlString='http://localhost:3001/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false'
    />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
