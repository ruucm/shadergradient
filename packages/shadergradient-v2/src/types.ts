import { PropertyControls } from 'framer'

export type ShaderGradientType = 'plane' | 'waterPlane' | 'sphere'

export interface Position {
  positionX: number
  positionY: number
  positionZ: number
}

export interface Rotation {
  rotationX: number
  rotationY: number
  rotationZ: number
}

export interface ShaderGradientProps {
  position: Position
  rotation: Rotation
  type: ShaderGradientType
  uAmplitude?: number
}

export interface ShaderGradientWithControls
  extends React.FC<ShaderGradientProps> {
  propertyControls?: PropertyControls<ShaderGradientProps>
}

export interface MeshT {
  width: number
  height: number
  position: Position
  rotation: Rotation
  uAmplitude?: number
}
