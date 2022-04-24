import * as React from 'react'
import { useQueryState } from '../../hooks/index'
import { InputPanel } from '../../InputPanel'
import { NumberInput, Slider } from '../../UI/index'

type ViewControlsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ViewControls: React.FC<ViewControlsPropsT> = () => {
  const [cDistance, setCdistance] = useQueryState('cDistance')
  const [cameraZoom, setCameraZoom] = useQueryState('cameraZoom')

  const [cameraPositionX, setCameraPositionX] = useQueryState('cameraPositionX')
  const [cameraPositionY, setCameraPositionY] = useQueryState('cameraPositionY')
  const [cameraPositionZ, setCameraPositionZ] = useQueryState('cameraPositionZ')

  const [cAzimuthAngle, setCazimuthAngle] = useQueryState('cAzimuthAngle')
  const [cPolarAngle, setCpolarAngle] = useQueryState('cPolarAngle')

  const [positionX, setPositionX] = useQueryState('positionX')
  const [positionY, setPositionY] = useQueryState('positionY')
  const [positionZ, setPositionZ] = useQueryState('positionZ')
  const [rotationX, setRotationX] = useQueryState('rotationX')
  const [rotationY, setRotationY] = useQueryState('rotationY')
  const [rotationZ, setRotationZ] = useQueryState('rotationZ')
  const [isHovered, setIsHovered] = React.useState('')

  const [type] = useQueryState('type')

  return (
    <div className='flex flex-col gap-3'>
      {/* Zoom */}

      {type !== 'sphere' && (
        <InputPanel title='Distance'>
          <Slider
            defaultValue={cDistance}
            setValue={setCdistance}
            step={0.1}
            min={0}
            max={20}
          />
        </InputPanel>
      )}
      {type === 'sphere' && (
        <InputPanel title='Zoom'>
          <Slider
            defaultValue={cameraZoom}
            setValue={setCameraZoom}
            step={0.1}
            min={0.1}
            max={30}
          />
        </InputPanel>
      )}

      {/* Positions */}
      {/* <InputPanel title="Position X">
        <Slider
          defaultValue={cameraPositionX}
          setValue={setCameraPositionX}
          step={0.1}
          min={-5}
          max={5}
        />
      </InputPanel>

      <InputPanel title="Position Y">
        <Slider
          defaultValue={cameraPositionY}
          setValue={setCameraPositionY}
          step={0.1}
          min={-5}
          max={5}
        />
      </InputPanel>

      <InputPanel title="Position Z">
        <Slider
          defaultValue={cameraPositionZ}
          setValue={setCameraPositionZ}
          step={0.1}
          min={-5}
          max={5}
        />
      </InputPanel> */}

      {/* rotateTo (camera-controls) */}
      <InputPanel
        title='Camera Angle'
        info={true}
        hoverContent='Imagine a globe. Azimuth moves the camera in the direction of latitude, and polar, in the direction of longtitude'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Camera Angle')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <NumberInput
          label='azimuth'
          step={10}
          value={cAzimuthAngle}
          setValue={setCazimuthAngle}
        />
        <NumberInput
          label='polar'
          step={10}
          min={0}
          max={180}
          value={cPolarAngle}
          setValue={setCpolarAngle}
        />
      </InputPanel>

      {/* Object Controls */}
      <InputPanel title='Object Position'>
        <NumberInput
          label='x'
          step={0.1}
          value={positionX}
          setValue={setPositionX}
        />
        <NumberInput
          label='y'
          step={0.1}
          value={positionY}
          setValue={setPositionY}
        />
        <NumberInput
          label='z'
          step={0.1}
          value={positionZ}
          setValue={setPositionZ}
        />
      </InputPanel>

      <InputPanel title='Object Rotation'>
        <NumberInput
          label='x'
          step={10}
          value={rotationX}
          setValue={setRotationX}
        />
        <NumberInput
          label='y'
          step={10}
          value={rotationY}
          setValue={setRotationY}
        />
        <NumberInput
          label='z'
          step={10}
          value={rotationZ}
          setValue={setRotationZ}
        />
      </InputPanel>
    </div>
  )
}
