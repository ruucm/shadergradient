import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';
export * from '@react-three/fiber';

type ShaderGradientCanvasT = {
    children: ReactNode;
    pointerEvents?: CSSProperties['pointerEvents'];
    pixelDensity?: number;
    fov?: number;
    [x: string]: any;
};
declare function ShaderGradientCanvas({ children, pointerEvents, pixelDensity, fov, ...rest }: ShaderGradientCanvasT): react_jsx_runtime.JSX.Element;

type MeshT = {
    type?: 'plane' | 'sphere' | 'waterPlane';
    animate?: 'on' | 'off';
    range?: 'enabled' | 'disabled';
    rangeStart?: number;
    rangeEnd?: number;
    uTime?: number;
    uSpeed?: number;
    uStrength?: number;
    uDensity?: number;
    uFrequency?: number;
    uAmplitude?: number;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
    color1?: string;
    color2?: string;
    color3?: string;
    reflection?: number;
    wireframe?: boolean;
    shader?: string;
    rotSpringOption?: any;
    posSpringOption?: any;
    urlString?: string;
};
type GradientT = MeshT & {
    control?: 'query' | 'props';
    isFigmaPlugin?: boolean;
    dampingFactor?: number;
    frameRate?: number;
    cAzimuthAngle?: number;
    cPolarAngle?: number;
    cDistance?: number;
    cameraZoom?: number;
    lightType?: '3d' | 'env';
    brightness?: number;
    envPreset?: 'city' | 'dawn' | 'lobby';
    grain?: 'on' | 'off';
    grainBlending?: number;
    zoomOut?: boolean;
    toggleAxis?: boolean;
    hoverState?: string;
    enableTransition?: boolean;
};

declare function ShaderGradient({ control, dampingFactor, rotSpringOption, posSpringOption, isFigmaPlugin, enableTransition, ...props }: GradientT): react_jsx_runtime.JSX.Element;

declare function Placeholder({ title, color1, color2, }: {
    title?: string;
    color1?: string;
    color2?: string;
}): react_jsx_runtime.JSX.Element;

export { Placeholder, ShaderGradient, ShaderGradientCanvas };
