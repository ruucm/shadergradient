import Link from 'next/link'
import { Gradient, TextHover } from 'shadergradient'

// custom pages/404.jsx !! Do not remove please or it will break build

const DOM = () => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '46vh',
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

const R3F = () => {
  return (
    <Gradient
      positionX={0}
      positionY={-3}
      positionZ={0}
      rotationX={60}
      rotationY={0}
      rotationZ={50}
      cAzimuthAngle={180}
      cPolarAngle={90}
      cDistance={10.6}
      dampingFactor={0.03}
    />
  )
}

const Error = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Error

export async function getStaticProps() {
  return {
    props: {
      title: 'Shadergradient - not found',
    },
  }
}
