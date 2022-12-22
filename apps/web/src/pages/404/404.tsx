import Link from 'next/link'
import { Gradient } from 'shadergradient'
import { TextHover } from 'shadergradient/ui'

// custom pages/404.jsx !! Do not remove please or it will break build

export default function Page() {
  return (
    <>
      <div
        style={{
          width: '80vw',
          margin: '0 10vw',
          height: '44vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FF430A',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontFamily: 'Lora', fontSize: 120 }}>Ooops..</div>
        <div>
          Something went wrong. Check the link again.
          <br />
          If you are here for something like below, try again from{' '}
          <span style={{ display: 'inline-block', fontWeight: 600 }}>
            <Link href='/'>
              <TextHover
                fontSize={15}
                color='#FF430A'
                content={'shadergradient →'}
                delay={0}
                border={false}
              />
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

Page.canvas = (props) => (
  <Gradient
    positionX={0}
    positionY={-3}
    positionZ={0}
    rotationX={60}
    rotationY={0}
    rotationZ={50}
    cAzimuthAngle={180}
    cPolarAngle={90}
    cDistance={9}
    dampingFactor={0.03}
  />
)

export async function getStaticProps() {
  return {
    props: {
      title: 'Shadergradient - not found',
    },
  }
}
