import * as THREE from 'three'

export function lineMaterial(
  uniforms: {
    [name: string]:
      | THREE.CubeTexture
      | THREE.Texture
      | Int32Array
      | Float32Array
      | THREE.Matrix4
      | THREE.Matrix3
      | THREE.Quaternion
      | THREE.Vector4
      | THREE.Vector3
      | THREE.Vector2
      | THREE.Color
      | number
      | boolean
      | Array<any>
      | null
  },
  vertexShader: string,
  onInit?: (material?: THREE.LineBasicMaterial) => void
) {
  return class extends THREE.LineBasicMaterial {
    static key: any
    constructor() {
      const entries = Object.entries(uniforms)

      const uniformValues = entries.reduce((acc, [name, value]) => {
        const uniform = THREE.UniformsUtils.clone({ [name]: { value } })
        return {
          ...acc,
          ...uniform,
        }
      }, {})

      super({
        color: '#ffffff',
        linewidth: 5,
        userData: uniformValues, // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)
        onBeforeCompile: (shader) => {
          shader.uniforms = {
            ...shader.uniforms,
            ...uniformValues,
          }
          shader.vertexShader = vertexShader
        },
      })
      // Create getter/setters
      entries.forEach(([name]) =>
        Object.defineProperty(this, name, {
          // @ts-ignore
          get: () => this.uniforms[name].value,
          // @ts-ignore
          set: (v) => (this.uniforms[name].value = v),
        })
      )
      if (onInit) onInit(this)
    }
  }
}
