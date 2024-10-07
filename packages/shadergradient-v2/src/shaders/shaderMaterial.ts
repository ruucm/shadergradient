import * as THREE from 'three'

export function shaderMaterial(
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
  fragmentShader: string,
  onInit?: (material?: THREE.MeshPhysicalMaterial) => void
) {
  return class extends THREE.MeshPhysicalMaterial {
    constructor() {
      const entries = Object.entries(uniforms)
      // Create unforms and shaders
      const colors = uniforms.colors
      const uC1 = colorToRgb(colors[0])
      const uC2 = colorToRgb(colors[1])
      const uC3 = colorToRgb(colors[2])
      const rgbColors = {
        uC1r: { value: formatColor(uC1?.r) },
        uC1g: { value: formatColor(uC1?.g) },
        uC1b: { value: formatColor(uC1?.b) },
        uC2r: { value: formatColor(uC2?.r) },
        uC2g: { value: formatColor(uC2?.g) },
        uC2b: { value: formatColor(uC2?.b) },
        uC3r: { value: formatColor(uC3?.r) },
        uC3g: { value: formatColor(uC3?.g) },
        uC3b: { value: formatColor(uC3?.b) },
      }

      const uniformValues = entries.reduce((acc, [name, value]) => {
        const uniform = THREE.UniformsUtils.clone({ [name]: { value } })
        return {
          ...acc,
          ...uniform,
        }
      }, {})

      super({
        metalness: 0.2, // similar effects reducing -0.2 intensity of the ambient light
        userData: uniformValues, // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)
        side: THREE.DoubleSide,
        onBeforeCompile: (shader) => {
          shader.uniforms = {
            ...shader.uniforms,
            ...uniformValues,
            ...rgbColors,
          }
          shader.vertexShader = vertexShader
          shader.fragmentShader = fragmentShader
        },
        // wireframe: true,
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
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

function rgbStringToRgb(rgbString: string) {
  const result = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  return result
    ? {
        r: parseInt(result[1]),
        g: parseInt(result[2]),
        b: parseInt(result[3]),
      }
    : null
}

// if color is hex, use hexToRgb
// if color is rgb, use rgbStringToRgb
function colorToRgb(color: string) {
  if (color.startsWith('#')) {
    return hexToRgb(color)
  } else if (color.startsWith('rgb')) {
    return rgbStringToRgb(color)
  } else {
    throw new Error('Invalid color format')
  }
}

function formatColor(color = 0) {
  return color / 255
}
