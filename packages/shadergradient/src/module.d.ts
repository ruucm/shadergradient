declare module '*.glsl' {
  const value: string
  export default value
}

declare module 'framer' {
  export const ControlType: Record<string, unknown>
  export const RenderTarget: {
    canvas: string
    preview: string
    current: () => string
  }
}
