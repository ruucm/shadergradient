declare function ShaderGradientCanvas({ children, style, pixelDensity, fov, pointerEvents, }: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    pixelDensity?: number;
    fov?: number;
    pointerEvents?: 'none' | 'auto';
}): JSX.Element;

type typeT = 'plane' | 'sphere' | 'waterPlane';
type animateT = 'on' | 'off';
type MeshT = {
    type?: typeT;
    animate?: animateT;
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
};
type LightTypeT = '3d' | 'env';
type EnvironmentPresetT = 'city' | 'dawn' | 'lobby';
type GradientT = MeshT & {
    control?: 'query' | 'props';
    isFigmaPlugin?: boolean;
    smoothTime?: number;
    cAzimuthAngle?: number;
    cPolarAngle?: number;
    cDistance?: number;
    cameraZoom?: number;
    lightType?: LightTypeT;
    brightness?: number;
    envPreset?: EnvironmentPresetT;
    grain?: 'on' | 'off';
    grainBlending?: number;
    zoomOut?: boolean;
    toggleAxis?: boolean;
    hoverState?: string;
    enableTransition?: boolean;
    urlString?: string;
};

declare function ShaderGradient(passedProps: GradientT): JSX.Element;

export { ShaderGradient, ShaderGradientCanvas };
