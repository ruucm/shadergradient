import {
  colorToRgb,
  formatColor
} from "./chunk-BI5IV7LU.mjs";
import {
  extend,
  useFrame,
  useThree
} from "./chunk-NLXVRQGB.mjs";
import {
  BackSide,
  CanvasTexture,
  ClampToEdgeWrapping,
  Color,
  DepthTexture,
  DoubleSide,
  FloatType,
  FrontSide,
  HalfFloatType,
  LinearFilter,
  MathUtils,
  MeshPhysicalMaterial,
  NoToneMapping,
  SRGBColorSpace,
  ShaderMaterial,
  UniformsUtils,
  WebGLRenderTarget
} from "./chunk-QDIU42HX.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Mesh/ResinMaterial.tsx
import { useEffect as useEffect2, useMemo as useMemo2 } from "react";

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// ../../node_modules/.pnpm/@react-three+drei@9.122.0_@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3_990d3f4b8664bb47af81c6568329cf81/node_modules/@react-three/drei/core/shaderMaterial.js
function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
  const material = class material extends ShaderMaterial {
    constructor(parameters = {}) {
      const entries = Object.entries(uniforms);
      super({
        uniforms: entries.reduce((acc, [name, value]) => {
          const uniform = UniformsUtils.clone({
            [name]: {
              value
            }
          });
          return __spreadValues(__spreadValues({}, acc), uniform);
        }, {}),
        vertexShader,
        fragmentShader
      });
      this.key = "";
      entries.forEach(([name]) => Object.defineProperty(this, name, {
        get: () => this.uniforms[name].value,
        set: (v) => this.uniforms[name].value = v
      }));
      Object.assign(this, parameters);
      if (onInit) onInit(this);
    }
  };
  material.key = MathUtils.generateUUID();
  return material;
}

// ../../node_modules/.pnpm/@react-three+drei@9.122.0_@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3_990d3f4b8664bb47af81c6568329cf81/node_modules/@react-three/drei/core/Fbo.js
import * as React from "react";
function useFBO(width, height, settings) {
  const size = useThree((state) => state.size);
  const viewport = useThree((state) => state.viewport);
  const _width = typeof width === "number" ? width : size.width * viewport.dpr;
  const _height = typeof height === "number" ? height : size.height * viewport.dpr;
  const _settings = (typeof width === "number" ? settings : width) || {};
  const _a = _settings, {
    samples = 0,
    depth
  } = _a, targetSettings = __objRest(_a, [
    "samples",
    "depth"
  ]);
  const target = React.useMemo(() => {
    const target2 = new WebGLRenderTarget(_width, _height, __spreadValues({
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      type: HalfFloatType
    }, targetSettings));
    if (depth) {
      target2.depthTexture = new DepthTexture(_width, _height, FloatType);
    }
    target2.samples = samples;
    return target2;
  }, []);
  React.useLayoutEffect(() => {
    target.setSize(_width, _height);
    if (samples) target.samples = samples;
  }, [samples, target, _width, _height]);
  React.useEffect(() => {
    return () => target.dispose();
  }, []);
  return target;
}

// ../../node_modules/.pnpm/@react-three+drei@9.122.0_@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3_990d3f4b8664bb47af81c6568329cf81/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js
import * as React2 from "react";

// ../../node_modules/.pnpm/@react-three+drei@9.122.0_@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3_990d3f4b8664bb47af81c6568329cf81/node_modules/@react-three/drei/materials/DiscardMaterial.js
var DiscardMaterial = /* @__PURE__ */ shaderMaterial({}, "void main() { }", "void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");

// ../../node_modules/.pnpm/@react-three+drei@9.122.0_@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3_990d3f4b8664bb47af81c6568329cf81/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js
var MeshTransmissionMaterialImpl = class extends MeshPhysicalMaterial {
  constructor(samples = 6, transmissionSampler = false) {
    super();
    this.uniforms = {
      chromaticAberration: {
        value: 0.05
      },
      // Transmission must always be 0, unless transmissionSampler is being used
      transmission: {
        value: 0
      },
      // Instead a workaround is used, see below for reasons why
      _transmission: {
        value: 1
      },
      transmissionMap: {
        value: null
      },
      // Roughness is 1 in THREE.MeshPhysicalMaterial but it makes little sense in a transmission material
      roughness: {
        value: 0
      },
      thickness: {
        value: 0
      },
      thicknessMap: {
        value: null
      },
      attenuationDistance: {
        value: Infinity
      },
      attenuationColor: {
        value: new Color("white")
      },
      anisotropicBlur: {
        value: 0.1
      },
      time: {
        value: 0
      },
      distortion: {
        value: 0
      },
      distortionScale: {
        value: 0.5
      },
      temporalDistortion: {
        value: 0
      },
      buffer: {
        value: null
      }
    };
    this.onBeforeCompile = (shader) => {
      shader.uniforms = __spreadValues(__spreadValues({}, shader.uniforms), this.uniforms);
      if (this.anisotropy > 0) shader.defines.USE_ANISOTROPY = "";
      if (transmissionSampler) shader.defines.USE_SAMPLER = "";
      else shader.defines.USE_TRANSMISSION = "";
      shader.fragmentShader = /*glsl*/
      `
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
` + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <transmission_pars_fragment>",
        /*glsl*/
        `
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <transmission_fragment>",
        /*glsl*/
        `  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${samples}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${samples})) , material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${samples})), material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${samples}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`
      );
    };
    Object.keys(this.uniforms).forEach((name) => Object.defineProperty(this, name, {
      get: () => this.uniforms[name].value,
      set: (v) => this.uniforms[name].value = v
    }));
  }
};
var MeshTransmissionMaterial = /* @__PURE__ */ React2.forwardRef((_a, fref) => {
  var _b = _a, {
    buffer,
    transmissionSampler = false,
    backside = false,
    side = FrontSide,
    transmission = 1,
    thickness = 0,
    backsideThickness = 0,
    backsideEnvMapIntensity = 1,
    samples = 10,
    resolution,
    backsideResolution,
    background,
    anisotropy,
    anisotropicBlur
  } = _b, props = __objRest(_b, [
    "buffer",
    "transmissionSampler",
    "backside",
    "side",
    "transmission",
    "thickness",
    "backsideThickness",
    "backsideEnvMapIntensity",
    "samples",
    "resolution",
    "backsideResolution",
    "background",
    "anisotropy",
    "anisotropicBlur"
  ]);
  extend({
    MeshTransmissionMaterial: MeshTransmissionMaterialImpl
  });
  const ref = React2.useRef(null);
  const [discardMaterial] = React2.useState(() => new DiscardMaterial());
  const fboBack = useFBO(backsideResolution || resolution);
  const fboMain = useFBO(resolution);
  let oldBg;
  let oldEnvMapIntensity;
  let oldTone;
  let parent;
  useFrame((state) => {
    ref.current.time = state.clock.elapsedTime;
    if (ref.current.buffer === fboMain.texture && !transmissionSampler) {
      parent = ref.current.__r3f.parent;
      if (parent) {
        oldTone = state.gl.toneMapping;
        oldBg = state.scene.background;
        oldEnvMapIntensity = ref.current.envMapIntensity;
        state.gl.toneMapping = NoToneMapping;
        if (background) state.scene.background = background;
        parent.material = discardMaterial;
        if (backside) {
          state.gl.setRenderTarget(fboBack);
          state.gl.render(state.scene, state.camera);
          parent.material = ref.current;
          parent.material.buffer = fboBack.texture;
          parent.material.thickness = backsideThickness;
          parent.material.side = BackSide;
          parent.material.envMapIntensity = backsideEnvMapIntensity;
        }
        state.gl.setRenderTarget(fboMain);
        state.gl.render(state.scene, state.camera);
        parent.material = ref.current;
        parent.material.thickness = thickness;
        parent.material.side = side;
        parent.material.buffer = fboMain.texture;
        parent.material.envMapIntensity = oldEnvMapIntensity;
        state.scene.background = oldBg;
        state.gl.setRenderTarget(null);
        state.gl.toneMapping = oldTone;
      }
    }
  });
  React2.useImperativeHandle(fref, () => ref.current, []);
  return /* @__PURE__ */ React2.createElement("meshTransmissionMaterial", _extends({
    // Samples must re-compile the shader so we memoize it
    args: [samples, transmissionSampler],
    ref
  }, props, {
    buffer: buffer || fboMain.texture,
    _transmission: transmission,
    anisotropicBlur: anisotropicBlur !== null && anisotropicBlur !== void 0 ? anisotropicBlur : anisotropy,
    transmission: transmissionSampler ? transmission : 0,
    thickness,
    side
  }));
});

// src/ShaderGradient/Mesh/ResinMaterial.tsx
import { jsx } from "react/jsx-runtime";
function ResinMaterial({ uniforms }) {
  var _a, _b, _c;
  const resinGradientTexture = useMemo2(() => {
    var _a2, _b2, _c2;
    if (typeof document === "undefined") return null;
    const colorSources2 = [
      (uniforms == null ? void 0 : uniforms.uColor1) || (((_a2 = uniforms == null ? void 0 : uniforms.colors) == null ? void 0 : _a2[0]) ? colorToRgb(uniforms.colors[0]) : null),
      (uniforms == null ? void 0 : uniforms.uColor2) || (((_b2 = uniforms == null ? void 0 : uniforms.colors) == null ? void 0 : _b2[1]) ? colorToRgb(uniforms.colors[1]) : null),
      (uniforms == null ? void 0 : uniforms.uColor3) || (((_c2 = uniforms == null ? void 0 : uniforms.colors) == null ? void 0 : _c2[2]) ? colorToRgb(uniforms.colors[2]) : null)
    ];
    const primarySource2 = colorSources2[0] || colorToRgb("#ffffff");
    const secondarySource2 = colorSources2[1] || primarySource2;
    const tertiarySource2 = colorSources2[2] || primarySource2;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const toCss = (src) => {
      var _a3, _b3, _c3;
      return `rgb(${Math.round((_a3 = src == null ? void 0 : src.r) != null ? _a3 : 255)}, ${Math.round(
        (_b3 = src == null ? void 0 : src.g) != null ? _b3 : 255
      )}, ${Math.round((_c3 = src == null ? void 0 : src.b) != null ? _c3 : 255)})`;
    };
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, toCss(primarySource2));
    gradient.addColorStop(0.5, toCss(secondarySource2));
    gradient.addColorStop(1, toCss(tertiarySource2));
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    texture.colorSpace = SRGBColorSpace;
    texture.wrapS = ClampToEdgeWrapping;
    texture.wrapT = ClampToEdgeWrapping;
    texture.magFilter = LinearFilter;
    texture.minFilter = LinearFilter;
    return texture;
  }, [
    uniforms == null ? void 0 : uniforms.uColor1,
    uniforms == null ? void 0 : uniforms.uColor2,
    uniforms == null ? void 0 : uniforms.uColor3,
    uniforms == null ? void 0 : uniforms.colors
  ]);
  useEffect2(() => {
    return () => {
      resinGradientTexture == null ? void 0 : resinGradientTexture.dispose();
    };
  }, [resinGradientTexture]);
  const {
    uColor1,
    uColor2,
    uColor3,
    transmission,
    thickness,
    ior,
    chromaticAberration,
    anisotropy,
    distortion,
    distortionScale,
    temporalDistortion,
    clearcoat,
    clearcoatRoughness
  } = uniforms;
  const colorSources = [
    uColor1 || (((_a = uniforms.colors) == null ? void 0 : _a[0]) ? colorToRgb(uniforms.colors[0]) : colorToRgb("#ffffff")),
    uColor2 || (((_b = uniforms.colors) == null ? void 0 : _b[1]) ? colorToRgb(uniforms.colors[1]) : null),
    uColor3 || (((_c = uniforms.colors) == null ? void 0 : _c[2]) ? colorToRgb(uniforms.colors[2]) : null)
  ];
  const primarySource = colorSources[0];
  const secondarySource = colorSources[1] || primarySource;
  const tertiarySource = colorSources[2] || primarySource;
  const toThreeColor = (src) => {
    var _a2, _b2, _c2;
    return new Color(
      formatColor((_a2 = src == null ? void 0 : src.r) != null ? _a2 : 255),
      formatColor((_b2 = src == null ? void 0 : src.g) != null ? _b2 : 255),
      formatColor((_c2 = src == null ? void 0 : src.b) != null ? _c2 : 255)
    );
  };
  const primaryColor = toThreeColor(primarySource);
  const secondaryColor = toThreeColor(secondarySource);
  const tertiaryColor = toThreeColor(tertiarySource);
  const blendedBackground = primaryColor.clone().add(secondaryColor).add(tertiaryColor).multiplyScalar(1 / 3);
  const attenuationColor = secondaryColor.clone().lerp(tertiaryColor, 0.35);
  return /* @__PURE__ */ jsx(
    MeshTransmissionMaterial,
    {
      background: blendedBackground,
      map: resinGradientTexture || void 0,
      color: resinGradientTexture ? new Color(1, 1, 1) : primaryColor,
      attenuationColor,
      transmission,
      thickness,
      roughness: 0,
      ior,
      chromaticAberration,
      anisotropy,
      distortion,
      distortionScale,
      temporalDistortion,
      clearcoat,
      clearcoatRoughness,
      side: DoubleSide
    }
  );
}

export {
  ResinMaterial
};
