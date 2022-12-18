import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import * as THREE from 'three'

function getFullscreenTriangle() {
  const geometry = new THREE.BufferGeometry()
  const vertices = new Float32Array([-1, -1, 3, -1, -1, 3])
  const uvs = new Float32Array([0, 0, 2, 0, 0, 2])

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 2))
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))

  return geometry
}

// Basic shader postprocess based on the template https://gist.github.com/RenaudRohlinger/bd5d15316a04d04380e93f10401c40e7
// USAGE: Simply call usePostprocess hook in your r3f component to apply the shader to the canvas as a postprocess effect
const usePostProcess = () => {
  const [{ dpr }, size, gl] = useThree((s) => [s.viewport, s.size, s.gl])

  const [screenCamera, screenScene, screen, renderTarget] = useMemo(() => {
    let screenScene = new THREE.Scene()
    const screenCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const screen = new THREE.Mesh(getFullscreenTriangle())
    screen.frustumCulled = false
    screenScene.add(screen)

    const renderTarget = new THREE.WebGLRenderTarget(512, 512, { samples: 4, encoding: gl.encoding })
    renderTarget.depthTexture = new THREE.DepthTexture() // fix depth issues

    // use ShaderMaterial for linearToOutputTexel
    screen.material = new THREE.RawShaderMaterial({
      uniforms: {
        diffuse: { value: null },
        time: { value: 0 },
      },
      vertexShader: /* glsl */ `

        in vec2 uv;
        in vec3 position;
				precision highp float;

        out vec2 vUv;
				void main() {
          vUv = uv;
					gl_Position = vec4( position, 1.0 );

        }
      `,
      fragmentShader: /* glsl */ `
				precision highp float;
        out highp vec4 pc_fragColor;
        uniform sampler2D diffuse;
        uniform float time;
        in vec2 vUv;

        // based on https://www.shadertoy.com/view/llGXzR
        float radial(vec2 pos, float radius)
        {
            float result = length(pos)-radius;
            result = fract(result*1.0);
            float result2 = 1.0 - result;
            float fresult = result * result2;
            fresult = pow((fresult*3.),7.);
            return fresult;
        }

				void main() {
          vec2 c_uv = vUv * 2.0 - 1.0;
          vec2 o_uv = vUv * 0.8;
          float gradient = radial(c_uv, time*0.8);
          vec2 fuv = mix(vUv,o_uv,gradient);
					pc_fragColor = texture(diffuse, fuv);
        }
      `,
      glslVersion: THREE.GLSL3,
    })
    screen.material.uniforms.diffuse.value = renderTarget.texture

    return [screenCamera, screenScene, screen, renderTarget]
  }, [])
  useEffect(() => {
    const { width, height } = size
    const { w, h } = {
      w: width * dpr,
      h: height * dpr,
    }
    renderTarget.setSize(w, h)
  }, [dpr, size, renderTarget])

  useFrame(({ scene, camera, gl }, delta) => {
    gl.setRenderTarget(renderTarget)
    gl.render(scene, camera)

    gl.setRenderTarget(null)
    if (screen) screen.material.uniforms.time.value += delta

    gl.render(screenScene, screenCamera)
  }, 1)
  return null
}

export default usePostProcess
