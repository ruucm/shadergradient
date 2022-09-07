
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

#define SQRT2_MINUS_ONE 0.41421356
#define SQRT2_HALF_MINUS_ONE 0.20710678
// #define PI2 6.28318531
#define SHAPE_DOT 1
#define SHAPE_ELLIPSE 2
#define SHAPE_LINE 3
#define SHAPE_SQUARE 4
#define BLENDING_LINEAR 1
#define BLENDING_MULTIPLY 2
#define BLENDING_ADD 3
#define BLENDING_LIGHTER 4
#define BLENDING_DARKER 5
uniform sampler2D tDiffuse;
uniform float radius;
uniform float rotateR;
uniform float rotateG;
uniform float rotateB;
uniform float scatter;
uniform float width;
uniform float height;
uniform int shape;
uniform bool disable;
uniform float blending;
uniform int blendingMode;
varying vec2 vUv;
uniform bool greyscale;
const int samples = 8;




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



float blend( float a, float b, float t ) {

// linear blend
    return a * ( 1.0 - t ) + b * t;

}

float hypot( float x, float y ) {

// vector magnitude
    return sqrt( x * x + y * y );

}

float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

// apply shape-specific transforms
    float dist = hypot( coord.x - p.x, coord.y - p.y );
    float rad = channel;

    if ( shape == SHAPE_DOT ) {

        rad = pow( abs( rad ), 1.125 ) * rad_max;

    } else if ( shape == SHAPE_ELLIPSE ) {

        rad = pow( abs( rad ), 1.125 ) * rad_max;

        if ( dist != 0.0 ) {
            float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
            dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
        }

    } else if ( shape == SHAPE_LINE ) {

        rad = pow( abs( rad ), 1.5) * rad_max;
        float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
        dist = hypot( normal.x * dot_p, normal.y * dot_p );

    } else if ( shape == SHAPE_SQUARE ) {

        float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
        float sin_t = abs( sin( theta ) );
        float cos_t = abs( cos( theta ) );
        rad = pow( abs( rad ), 1.4 );
        rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

    }

    return rad - dist;

}


struct Cell {

// grid sample positions
    vec2 normal;
    vec2 p1;
    vec2 p2;
    vec2 p3;
    vec2 p4;
    float samp2;
    float samp1;
    float samp3;
    float samp4;

};

vec4 getSample( vec2 point ) {

// multi-sampled point
    vec4 tex = texture( tDiffuse, vec2( point.x / width, point.y / height ) );
    float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
    float step = PI2 / float( samples );
    float dist = radius * 0.66;

    for ( int i = 0; i < samples; ++i ) {

        float r = base + step * float( i );
        vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
        tex += texture( tDiffuse, vec2( coord.x / width, coord.y / height ) );

    }

    tex /= float( samples ) + 1.0;
    return tex;

}


float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

// get colour for given point
    float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

    if ( channel == 0 ) {

        c.samp1 = getSample( c.p1 ).r;
        c.samp2 = getSample( c.p2 ).r;
        c.samp3 = getSample( c.p3 ).r;
        c.samp4 = getSample( c.p4 ).r;

    } else if (channel == 1) {

        c.samp1 = getSample( c.p1 ).g;
        c.samp2 = getSample( c.p2 ).g;
        c.samp3 = getSample( c.p3 ).g;
        c.samp4 = getSample( c.p4 ).g;

    } else {

        c.samp1 = getSample( c.p1 ).b;
        c.samp3 = getSample( c.p3 ).b;
        c.samp2 = getSample( c.p2 ).b;
        c.samp4 = getSample( c.p4 ).b;

    }

    dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
    dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
    dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
    dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
    res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
    res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
    res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
    res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
    res = clamp( res, 0.0, 1.0 );

    return res;

}

Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

// get containing cell
    Cell c;

// calc grid
    vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
    float threshold = step * 0.5;
    float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
    float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
    vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
    float offset_normal = mod( hypot( offset.x, offset.y ), step );
    float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
    float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
    float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
    float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
    float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

// get closest corner
    c.normal = n;
    c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
    c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

// scatter
    if ( scatter != 0.0 ) {

        float off_mag = scatter * threshold * 0.5;
        float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
        c.p1.x += cos( off_angle ) * off_mag;
        c.p1.y += sin( off_angle ) * off_mag;

    }

// find corners
    float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
    float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
    c.p2.x = c.p1.x - n.x * normal_step;
    c.p2.y = c.p1.y - n.y * normal_step;
    c.p3.x = c.p1.x + n.y * line_step;
    c.p3.y = c.p1.y - n.x * line_step;
    c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
    c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

    return c;

}

float blendColour( float a, float b, float t ) {

// blend colours
    if ( blendingMode == BLENDING_LINEAR ) {
        return blend( a, b, 1.0 - t );
    } else if ( blendingMode == BLENDING_ADD ) {
        return blend( a, min( 1.0, a + b ), t );
    } else if ( blendingMode == BLENDING_MULTIPLY ) {
        return blend( a, max( 0.0, a * b ), t );
    } else if ( blendingMode == BLENDING_LIGHTER ) {
        return blend( a, max( a, b ), t );
    } else if ( blendingMode == BLENDING_DARKER ) {
        return blend( a, min( a, b ), t );
    } else {
        return blend( a, b, 1.0 - t );
    }

}






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



  vec2 p = vec2( vUv.x * width, vUv.y * height );
  vec2 origin = vec2( 0, 0 );
  float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

  // get channel samples
  Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
  Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
  Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
  float r = getDotColour( cell_r, p, 0, rotateR, aa );
  float g = getDotColour( cell_g, p, 1, rotateG, aa );
  float b = getDotColour( cell_b, p, 2, rotateB, aa );

  // blend with original
  vec4 colour = texture( tDiffuse, vUv );
  r = blendColour( r, diffuseColor.x, 0.5 );
  g = blendColour( g, diffuseColor.y, 0.5 );
  b = blendColour( b, diffuseColor.z, 0.5 );

  // vec3 grainColor = mix(vec3(r, g, b), outgoingLight, 0.1);


  // gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  gl_FragColor = vec4( r, g, b, diffuseColor.a );
  // gl_FragColor = vec4(grainColor, diffuseColor.a );

  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
