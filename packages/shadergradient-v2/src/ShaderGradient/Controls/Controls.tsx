import { CameraControl } from './CameraControl'
import { GradientT } from '@/types'

interface ControlsProps extends GradientT {
  onUpdate?: (updates: Partial<GradientT>) => void
}

export function Controls({
  onUpdate,
  type = 'plane',
  ...props
}: ControlsProps): JSX.Element {
  const handleCameraUpdate = (data: {
    azimuthAngle: number
    polarAngle: number
    distance?: number
    zoom?: number
  }) => {
    if (!onUpdate) return

    const updates: Partial<GradientT> = {
      cAzimuthAngle: data.azimuthAngle,
      cPolarAngle: data.polarAngle,
    }

    if (data.distance !== undefined) {
      updates.cDistance = data.distance
    }
    if (data.zoom !== undefined) {
      updates.cameraZoom = data.zoom
    }

    onUpdate(updates)
  }

  return (
    <>
      <CameraControl
        {...props}
        type={type}
        onCameraUpdate={handleCameraUpdate}
      />
    </>
  )
}
