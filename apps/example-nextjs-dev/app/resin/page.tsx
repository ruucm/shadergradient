'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as THREE from 'three'
import { folder, useControls } from 'leva'
import { useMemo } from 'react'

export default function ResinPage() {
  const {
    // Canvas + camera
    pixelDensity,
    fov,
    cAzimuthAngle,
    cPolarAngle,
    cDistance,
    cameraZoom,
    uSpeed,
    uStrength,
    uDensity,
    uFrequency,
    uAmplitude,
    // Lighting
    lightType,
    envPreset,
    brightness,
    grain,
    // Geometry transform
    type,
    rotationX,
    rotationY,
    rotationZ,
    positionX,
    positionY,
    positionZ,
    // Resin surface
    transmission,
    thickness,
    ior,
    chromaticAberration,
    anisotropy,
    distortion,
    distortionScale,
    temporalDistortion,
    clearcoat,
    clearcoatRoughness,
    color1,
    color2,
    color3,
  } = useControls({
    Surface: folder({
      transmission: { value: 1, min: 0, max: 1 },
      thickness: { value: 0.45, min: 0, max: 5 },
      ior: { value: 1.2, min: 0, max: 2, step: 0.01 },
      chromaticAberration: { value: 0.22, min: -5, max: 5 },
      anisotropy: { value: 0.4, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.65, min: 0, max: 4, step: 0.01 },
      distortionScale: { value: 0.12, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0.08, min: 0, max: 1, step: 0.01 },
      clearcoat: { value: 1, min: 0.1, max: 1 },
      clearcoatRoughness: { value: 0.08, min: 0, max: 1 },
      color1: { value: '#f2f4ff' },
      color2: { value: '#c5d7ff' },
      color3: { value: '#9fb7ff' },
    }),
    Lighting: folder({
      lightType: { options: ['env', '3d'], value: 'env' },
      envPreset: { options: ['city', 'dawn', 'lobby'], value: 'city' },
      brightness: { value: 1.4, min: 0, max: 3, step: 0.05 },
      grain: { options: ['off', 'on'], value: 'off' },
    }),
    Camera: folder({
      pixelDensity: { value: 1.5, min: 0.5, max: 2, step: 0.05 },
      fov: { value: 35, min: 15, max: 100, step: 1 },
      cAzimuthAngle: { value: 200, min: 0, max: 360, step: 1 },
      cPolarAngle: { value: 90, min: 0, max: 180, step: 1 },
      cDistance: { value: 3.2, min: 0.5, max: 10, step: 0.05 },
      cameraZoom: { value: 1, min: 0.5, max: 8, step: 0.05 },
      uSpeed: { value: 0.3, min: 0, max: 2, step: 0.01 },
    }),
    Shape: folder({
      type: { options: ['sphere', 'plane', 'waterPlane'], value: 'sphere' },
      rotationX: { value: 0, min: -180, max: 180, step: 1 },
      rotationY: { value: 25, min: -180, max: 180, step: 1 },
      rotationZ: { value: 60, min: -180, max: 180, step: 1 },
      positionX: { value: 0, min: -5, max: 5, step: 0.05 },
      positionY: { value: 0, min: -5, max: 5, step: 0.05 },
      positionZ: { value: 0, min: -5, max: 5, step: 0.05 },
    }),
    Noise: folder({
      uStrength: { value: 2.0, min: 0, max: 8, step: 0.05 },
      uDensity: { value: 1.2, min: 0.1, max: 5, step: 0.05 },
      uFrequency: { value: 6.0, min: 0, max: 15, step: 0.1 },
      uAmplitude: { value: 0.9, min: 0, max: 5, step: 0.05 },
    }),
  })

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#eef1f7' }}>
      <ShaderGradientCanvas pixelDensity={pixelDensity} fov={fov}>
        <Grid />
        <ShaderGradient
          control='props'
          shader='resin'
          type={type}
          // Camera
          cAzimuthAngle={cAzimuthAngle}
          cPolarAngle={cPolarAngle}
          cDistance={cDistance}
          cameraZoom={cameraZoom}
          // Lighting
          lightType={lightType as any}
          envPreset={envPreset as any}
          brightness={brightness}
          grain={grain as any}
          // Noise + spiral
          uStrength={uStrength}
          uDensity={uDensity}
          uFrequency={uFrequency}
          uAmplitude={uAmplitude}
          uSpeed={uSpeed}
          // Transform
          positionX={positionX}
          positionY={positionY}
          positionZ={positionZ}
          rotationX={rotationX}
          rotationY={rotationY}
          rotationZ={rotationZ}
          // Resin surface
          transmission={transmission}
          thickness={thickness}
          ior={ior}
          chromaticAberration={chromaticAberration}
          anisotropy={anisotropy}
          distortion={distortion}
          distortionScale={distortionScale}
          temporalDistortion={temporalDistortion}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
          color1={color1}
          color2={color2}
          color3={color3}
        />
      </ShaderGradientCanvas>
    </div>
  )
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => {
  const lineGeom = useMemo(
    () => new THREE.PlaneGeometry(lineWidth, height),
    [lineWidth, height]
  )
  const lineMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({ color: '#999', side: THREE.DoubleSide }),
    []
  )

  return (
    <group position={[0, -1.02, 0]}>
      {Array.from({ length: number }, (_, y) =>
        Array.from({ length: number }, (_, x) => (
          <group
            key={x + ':' + y}
            position={[
              x * 2 - Math.floor(number / 2) * 2,
              -0.01,
              y * 2 - Math.floor(number / 2) * 2,
            ]}
          >
            <mesh
              geometry={lineGeom}
              material={lineMat}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={lineGeom}
              material={lineMat}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
        ))
      )}
      <gridHelper args={[100, 100, '#bbb', '#bbb']} position={[0, 1.01, 0]} />
    </group>
  )
}
