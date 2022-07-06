import * as React from 'react'
import { useQueryState } from '../../hooks/index'
import { NumberInput, Slider } from '../../UI/index'
import { InputPanel } from './InputPanel'

type ViewControlsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ViewControls: React.FC<ViewControlsPropsT> = () => {
  const [cDistance, setCdistance] = useQueryState('cDistance')
  const [cameraZoom, setCameraZoom] = useQueryState('cameraZoom')

  const [cAzimuthAngle, setCazimuthAngle] = useQueryState('cAzimuthAngle')
  const [cPolarAngle, setCpolarAngle] = useQueryState('cPolarAngle')

  const [positionX, setPositionX] = useQueryState('positionX')
  const [positionY, setPositionY] = useQueryState('positionY')
  const [positionZ, setPositionZ] = useQueryState('positionZ')
  const [rotationX, setRotationX] = useQueryState('rotationX')
  const [rotationY, setRotationY] = useQueryState('rotationY')
  const [rotationZ, setRotationZ] = useQueryState('rotationZ')
  const [fov, setFov] = useQueryState('fov')

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
          arrow={true}
        />
        <NumberInput
          label='polar'
          step={10}
          min={0}
          max={180}
          value={cPolarAngle}
          setValue={setCpolarAngle}
          arrow={true}
        />
      </InputPanel>

      {/* Object Controls */}
      <InputPanel title='Object Position'>
        <NumberInput
          label='x'
          step={0.1}
          value={positionX}
          setValue={setPositionX}
          arrow={true}
        />
        <NumberInput
          label='y'
          step={0.1}
          value={positionY}
          setValue={setPositionY}
          arrow={true}
        />
        <NumberInput
          label='z'
          step={0.1}
          value={positionZ}
          setValue={setPositionZ}
          arrow={true}
        />
      </InputPanel>

      <InputPanel title='Object Rotation'>
        <NumberInput
          label='x'
          step={10}
          value={rotationX}
          setValue={setRotationX}
          arrow={true}
        />
        <NumberInput
          label='y'
          step={10}
          value={rotationY}
          setValue={setRotationY}
          arrow={true}
        />
        <NumberInput
          label='z'
          step={10}
          value={rotationZ}
          setValue={setRotationZ}
          arrow={true}
        />
      </InputPanel>

      {/* Camera frustum vertical field of view, from bottom to top of view, in degrees */}
      <InputPanel title='Field of view'>
        <Slider
          defaultValue={fov}
          setValue={setFov}
          step={10}
          min={0}
          max={180}
        />
      </InputPanel>
    </div>
  )
}
