import React, { useRef, useState } from 'react'
import './App.css'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { LCanvas, Gradient } from 'shadergradient'
import logo from './logo.svg'
import { Box as IBox } from 'box'



function Box(props: any) {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  return (
    <>
        {/* <LCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: 'absolute',
          top: 0,
          // borderRadius: isMobile === true ? 36 : 0,
        }}
      > */}
          {/* <IBox /> */}
        {/* <Gradient cDistance={30} color2='#44CCFF' /> */}
      {/* </LCanvas> */}

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <IBox />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>

      {/* */}
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}

export default App
