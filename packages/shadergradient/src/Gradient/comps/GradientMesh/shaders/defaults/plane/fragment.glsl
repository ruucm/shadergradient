
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
