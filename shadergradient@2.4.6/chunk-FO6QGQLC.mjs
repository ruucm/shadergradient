import {
  Box3,
  DataTextureLoader,
  DataUtils,
  Float32BufferAttribute,
  FloatType,
  HalfFloatType,
  InstancedBufferGeometry,
  InstancedInterleavedBuffer,
  InterleavedBufferAttribute,
  Line3,
  LinearFilter,
  MathUtils,
  Matrix4,
  Mesh,
  REVISION,
  ShaderMaterial,
  Sphere,
  UniformsLib,
  UniformsUtils,
  Vector2,
  Vector3,
  Vector4,
  WireframeGeometry
} from "./chunk-QDIU42HX.mjs";

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/loaders/RGBELoader.js
var RGBELoader = class extends DataTextureLoader {
  constructor(manager) {
    super(manager);
    this.type = HalfFloatType;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(buffer) {
    const rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
      switch (rgbe_error_code) {
        case rgbe_read_error:
          throw new Error("THREE.RGBELoader: Read Error: " + (msg || ""));
        case rgbe_write_error:
          throw new Error("THREE.RGBELoader: Write Error: " + (msg || ""));
        case rgbe_format_error:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (msg || ""));
        default:
        case rgbe_memory_error:
          throw new Error("THREE.RGBELoader: Memory Error: " + (msg || ""));
      }
    }, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
      const chunkSize = 128;
      lineLimit = !lineLimit ? 1024 : lineLimit;
      let p = buffer2.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
      while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer2.byteLength) {
        s += chunk;
        len += chunk.length;
        p += chunkSize;
        chunk += String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
      }
      if (-1 < i) {
        if (false !== consume)
          buffer2.pos += len + i + 1;
        return s + chunk.slice(0, i);
      }
      return false;
    }, RGBE_ReadHeader = function(buffer2) {
      const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let line, match;
      if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) {
        rgbe_error(rgbe_read_error, "no header found");
      }
      if (!(match = line.match(magic_token_re))) {
        rgbe_error(rgbe_format_error, "bad initial token");
      }
      header.valid |= RGBE_VALID_PROGRAMTYPE;
      header.programtype = match[1];
      header.string += line + "\n";
      while (true) {
        line = fgets(buffer2);
        if (false === line)
          break;
        header.string += line + "\n";
        if ("#" === line.charAt(0)) {
          header.comments += line + "\n";
          continue;
        }
        if (match = line.match(gamma_re)) {
          header.gamma = parseFloat(match[1]);
        }
        if (match = line.match(exposure_re)) {
          header.exposure = parseFloat(match[1]);
        }
        if (match = line.match(format_re)) {
          header.valid |= RGBE_VALID_FORMAT;
          header.format = match[1];
        }
        if (match = line.match(dimensions_re)) {
          header.valid |= RGBE_VALID_DIMENSIONS;
          header.height = parseInt(match[1], 10);
          header.width = parseInt(match[2], 10);
        }
        if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS)
          break;
      }
      if (!(header.valid & RGBE_VALID_FORMAT)) {
        rgbe_error(rgbe_format_error, "missing format specifier");
      }
      if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
        rgbe_error(rgbe_format_error, "missing image size specifier");
      }
      return header;
    }, RGBE_ReadPixels_RLE = function(buffer2, w2, h2) {
      const scanline_width = w2;
      if (
        // run length encoding is not allowed so read flat
        scanline_width < 8 || scanline_width > 32767 || // this file is not run length encoded
        2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128
      ) {
        return new Uint8Array(buffer2);
      }
      if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) {
        rgbe_error(rgbe_format_error, "wrong scanline width");
      }
      const data_rgba = new Uint8Array(4 * w2 * h2);
      if (!data_rgba.length) {
        rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
      }
      let offset = 0, pos = 0;
      const ptr_end = 4 * scanline_width;
      const rgbeStart = new Uint8Array(4);
      const scanline_buffer = new Uint8Array(ptr_end);
      let num_scanlines = h2;
      while (num_scanlines > 0 && pos < buffer2.byteLength) {
        if (pos + 4 > buffer2.byteLength) {
          rgbe_error(rgbe_read_error);
        }
        rgbeStart[0] = buffer2[pos++];
        rgbeStart[1] = buffer2[pos++];
        rgbeStart[2] = buffer2[pos++];
        rgbeStart[3] = buffer2[pos++];
        if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {
          rgbe_error(rgbe_format_error, "bad rgbe scanline format");
        }
        let ptr = 0, count;
        while (ptr < ptr_end && pos < buffer2.byteLength) {
          count = buffer2[pos++];
          const isEncodedRun = count > 128;
          if (isEncodedRun)
            count -= 128;
          if (0 === count || ptr + count > ptr_end) {
            rgbe_error(rgbe_format_error, "bad scanline data");
          }
          if (isEncodedRun) {
            const byteValue = buffer2[pos++];
            for (let i = 0; i < count; i++) {
              scanline_buffer[ptr++] = byteValue;
            }
          } else {
            scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
            ptr += count;
            pos += count;
          }
        }
        const l = scanline_width;
        for (let i = 0; i < l; i++) {
          let off = 0;
          data_rgba[offset] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 1] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 2] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 3] = scanline_buffer[i + off];
          offset += 4;
        }
        num_scanlines--;
      }
      return data_rgba;
    };
    const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e - 128) / 255;
      destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
      destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
      destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
      destArray[destOffset + 3] = 1;
    };
    const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e - 128) / 255;
      destArray[destOffset + 0] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
      destArray[destOffset + 1] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
      destArray[destOffset + 2] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
      destArray[destOffset + 3] = DataUtils.toHalfFloat(1);
    };
    const byteArray = new Uint8Array(buffer);
    byteArray.pos = 0;
    const rgbe_header_info = RGBE_ReadHeader(byteArray);
    const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
    let data, type;
    let numElements;
    switch (this.type) {
      case FloatType:
        numElements = image_rgba_data.length / 4;
        const floatArray = new Float32Array(numElements * 4);
        for (let j = 0; j < numElements; j++) {
          RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
        }
        data = floatArray;
        type = FloatType;
        break;
      case HalfFloatType:
        numElements = image_rgba_data.length / 4;
        const halfArray = new Uint16Array(numElements * 4);
        for (let j = 0; j < numElements; j++) {
          RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
        }
        data = halfArray;
        type = HalfFloatType;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: w,
      height: h,
      data,
      header: rgbe_header_info.string,
      gamma: rgbe_header_info.gamma,
      exposure: rgbe_header_info.exposure,
      type
    };
  }
  setDataType(value) {
    this.type = value;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    function onLoadCallback(texture, texData) {
      switch (texture.type) {
        case FloatType:
        case HalfFloatType:
          if ("colorSpace" in texture)
            texture.colorSpace = "srgb-linear";
          else
            texture.encoding = 3e3;
          texture.minFilter = LinearFilter;
          texture.magFilter = LinearFilter;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;
      }
      if (onLoad)
        onLoad(texture, texData);
    }
    return super.load(url, onLoadCallback, onProgress, onError);
  }
};

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/lines/LineSegmentsGeometry.js
var _box = /* @__PURE__ */ new Box3();
var _vector = /* @__PURE__ */ new Vector3();
var LineSegmentsGeometry = class extends InstancedBufferGeometry {
  constructor() {
    super();
    this.isLineSegmentsGeometry = true;
    this.type = "LineSegmentsGeometry";
    const positions = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0];
    const uvs = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2];
    const index = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(index);
    this.setAttribute("position", new Float32BufferAttribute(positions, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  applyMatrix4(matrix) {
    const start = this.attributes.instanceStart;
    const end = this.attributes.instanceEnd;
    if (start !== void 0) {
      start.applyMatrix4(matrix);
      end.applyMatrix4(matrix);
      start.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  setPositions(array) {
    let lineSegments;
    if (array instanceof Float32Array) {
      lineSegments = array;
    } else if (Array.isArray(array)) {
      lineSegments = new Float32Array(array);
    }
    const instanceBuffer = new InstancedInterleavedBuffer(lineSegments, 6, 1);
    this.setAttribute("instanceStart", new InterleavedBufferAttribute(instanceBuffer, 3, 0));
    this.setAttribute("instanceEnd", new InterleavedBufferAttribute(instanceBuffer, 3, 3));
    this.computeBoundingBox();
    this.computeBoundingSphere();
    return this;
  }
  setColors(array, itemSize = 3) {
    let colors;
    if (array instanceof Float32Array) {
      colors = array;
    } else if (Array.isArray(array)) {
      colors = new Float32Array(array);
    }
    const instanceColorBuffer = new InstancedInterleavedBuffer(colors, itemSize * 2, 1);
    this.setAttribute("instanceColorStart", new InterleavedBufferAttribute(instanceColorBuffer, itemSize, 0));
    this.setAttribute("instanceColorEnd", new InterleavedBufferAttribute(instanceColorBuffer, itemSize, itemSize));
    return this;
  }
  fromWireframeGeometry(geometry) {
    this.setPositions(geometry.attributes.position.array);
    return this;
  }
  fromEdgesGeometry(geometry) {
    this.setPositions(geometry.attributes.position.array);
    return this;
  }
  fromMesh(mesh) {
    this.fromWireframeGeometry(new WireframeGeometry(mesh.geometry));
    return this;
  }
  fromLineSegments(lineSegments) {
    const geometry = lineSegments.geometry;
    this.setPositions(geometry.attributes.position.array);
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    const start = this.attributes.instanceStart;
    const end = this.attributes.instanceEnd;
    if (start !== void 0 && end !== void 0) {
      this.boundingBox.setFromBufferAttribute(start);
      _box.setFromBufferAttribute(end);
      this.boundingBox.union(_box);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    if (this.boundingBox === null) {
      this.computeBoundingBox();
    }
    const start = this.attributes.instanceStart;
    const end = this.attributes.instanceEnd;
    if (start !== void 0 && end !== void 0) {
      const center = this.boundingSphere.center;
      this.boundingBox.getCenter(center);
      let maxRadiusSq = 0;
      for (let i = 0, il = start.count; i < il; i++) {
        _vector.fromBufferAttribute(start, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector));
        _vector.fromBufferAttribute(end, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector));
      }
      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
      if (isNaN(this.boundingSphere.radius)) {
        console.error(
          "THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",
          this
        );
      }
    }
  }
  toJSON() {
  }
  applyMatrix(matrix) {
    console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().");
    return this.applyMatrix4(matrix);
  }
};

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/lines/LineGeometry.js
var LineGeometry = class extends LineSegmentsGeometry {
  constructor() {
    super();
    this.isLineGeometry = true;
    this.type = "LineGeometry";
  }
  setPositions(array) {
    const length = array.length - 3;
    const points = new Float32Array(2 * length);
    for (let i = 0; i < length; i += 3) {
      points[2 * i] = array[i];
      points[2 * i + 1] = array[i + 1];
      points[2 * i + 2] = array[i + 2];
      points[2 * i + 3] = array[i + 3];
      points[2 * i + 4] = array[i + 4];
      points[2 * i + 5] = array[i + 5];
    }
    super.setPositions(points);
    return this;
  }
  setColors(array, itemSize = 3) {
    const length = array.length - itemSize;
    const colors = new Float32Array(2 * length);
    if (itemSize === 3) {
      for (let i = 0; i < length; i += itemSize) {
        colors[2 * i] = array[i];
        colors[2 * i + 1] = array[i + 1];
        colors[2 * i + 2] = array[i + 2];
        colors[2 * i + 3] = array[i + 3];
        colors[2 * i + 4] = array[i + 4];
        colors[2 * i + 5] = array[i + 5];
      }
    } else {
      for (let i = 0; i < length; i += itemSize) {
        colors[2 * i] = array[i];
        colors[2 * i + 1] = array[i + 1];
        colors[2 * i + 2] = array[i + 2];
        colors[2 * i + 3] = array[i + 3];
        colors[2 * i + 4] = array[i + 4];
        colors[2 * i + 5] = array[i + 5];
        colors[2 * i + 6] = array[i + 6];
        colors[2 * i + 7] = array[i + 7];
      }
    }
    super.setColors(colors, itemSize);
    return this;
  }
  fromLine(line) {
    const geometry = line.geometry;
    this.setPositions(geometry.attributes.position.array);
    return this;
  }
};

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/_polyfill/constants.js
var version = /* @__PURE__ */ (() => parseInt(REVISION.replace(/\D+/g, "")))();

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/lines/LineMaterial.js
var LineMaterial = class extends ShaderMaterial {
  constructor(parameters) {
    super({
      type: "LineMaterial",
      uniforms: UniformsUtils.clone(
        UniformsUtils.merge([
          UniformsLib.common,
          UniformsLib.fog,
          {
            worldUnits: { value: 1 },
            linewidth: { value: 1 },
            resolution: { value: new Vector2(1, 1) },
            dashOffset: { value: 0 },
            dashScale: { value: 1 },
            dashSize: { value: 1 },
            gapSize: { value: 1 }
            // todo FIX - maybe change to totalSize
          }
        ])
      ),
      vertexShader: (
        /* glsl */
        `
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`
      ),
      clipping: true
      // required for clipping support
    });
    this.isLineMaterial = true;
    this.onBeforeCompile = function() {
      if (this.transparent) {
        this.defines.USE_LINE_COLOR_ALPHA = "1";
      } else {
        delete this.defines.USE_LINE_COLOR_ALPHA;
      }
    };
    Object.defineProperties(this, {
      color: {
        enumerable: true,
        get: function() {
          return this.uniforms.diffuse.value;
        },
        set: function(value) {
          this.uniforms.diffuse.value = value;
        }
      },
      worldUnits: {
        enumerable: true,
        get: function() {
          return "WORLD_UNITS" in this.defines;
        },
        set: function(value) {
          if (value === true) {
            this.defines.WORLD_UNITS = "";
          } else {
            delete this.defines.WORLD_UNITS;
          }
        }
      },
      linewidth: {
        enumerable: true,
        get: function() {
          return this.uniforms.linewidth.value;
        },
        set: function(value) {
          this.uniforms.linewidth.value = value;
        }
      },
      dashed: {
        enumerable: true,
        get: function() {
          return Boolean("USE_DASH" in this.defines);
        },
        set(value) {
          if (Boolean(value) !== Boolean("USE_DASH" in this.defines)) {
            this.needsUpdate = true;
          }
          if (value === true) {
            this.defines.USE_DASH = "";
          } else {
            delete this.defines.USE_DASH;
          }
        }
      },
      dashScale: {
        enumerable: true,
        get: function() {
          return this.uniforms.dashScale.value;
        },
        set: function(value) {
          this.uniforms.dashScale.value = value;
        }
      },
      dashSize: {
        enumerable: true,
        get: function() {
          return this.uniforms.dashSize.value;
        },
        set: function(value) {
          this.uniforms.dashSize.value = value;
        }
      },
      dashOffset: {
        enumerable: true,
        get: function() {
          return this.uniforms.dashOffset.value;
        },
        set: function(value) {
          this.uniforms.dashOffset.value = value;
        }
      },
      gapSize: {
        enumerable: true,
        get: function() {
          return this.uniforms.gapSize.value;
        },
        set: function(value) {
          this.uniforms.gapSize.value = value;
        }
      },
      opacity: {
        enumerable: true,
        get: function() {
          return this.uniforms.opacity.value;
        },
        set: function(value) {
          this.uniforms.opacity.value = value;
        }
      },
      resolution: {
        enumerable: true,
        get: function() {
          return this.uniforms.resolution.value;
        },
        set: function(value) {
          this.uniforms.resolution.value.copy(value);
        }
      },
      alphaToCoverage: {
        enumerable: true,
        get: function() {
          return Boolean("USE_ALPHA_TO_COVERAGE" in this.defines);
        },
        set: function(value) {
          if (Boolean(value) !== Boolean("USE_ALPHA_TO_COVERAGE" in this.defines)) {
            this.needsUpdate = true;
          }
          if (value === true) {
            this.defines.USE_ALPHA_TO_COVERAGE = "";
            this.extensions.derivatives = true;
          } else {
            delete this.defines.USE_ALPHA_TO_COVERAGE;
            this.extensions.derivatives = false;
          }
        }
      }
    });
    this.setValues(parameters);
  }
};

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/_polyfill/uv1.js
var UV1 = version >= 125 ? "uv1" : "uv2";

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/lines/LineSegments2.js
var _viewport = /* @__PURE__ */ new Vector4();
var _start = /* @__PURE__ */ new Vector3();
var _end = /* @__PURE__ */ new Vector3();
var _start4 = /* @__PURE__ */ new Vector4();
var _end4 = /* @__PURE__ */ new Vector4();
var _ssOrigin = /* @__PURE__ */ new Vector4();
var _ssOrigin3 = /* @__PURE__ */ new Vector3();
var _mvMatrix = /* @__PURE__ */ new Matrix4();
var _line = /* @__PURE__ */ new Line3();
var _closestPoint = /* @__PURE__ */ new Vector3();
var _box2 = /* @__PURE__ */ new Box3();
var _sphere = /* @__PURE__ */ new Sphere();
var _clipToWorldVector = /* @__PURE__ */ new Vector4();
var _ray;
var _lineWidth;
function getWorldSpaceHalfWidth(camera, distance, resolution) {
  _clipToWorldVector.set(0, 0, -distance, 1).applyMatrix4(camera.projectionMatrix);
  _clipToWorldVector.multiplyScalar(1 / _clipToWorldVector.w);
  _clipToWorldVector.x = _lineWidth / resolution.width;
  _clipToWorldVector.y = _lineWidth / resolution.height;
  _clipToWorldVector.applyMatrix4(camera.projectionMatrixInverse);
  _clipToWorldVector.multiplyScalar(1 / _clipToWorldVector.w);
  return Math.abs(Math.max(_clipToWorldVector.x, _clipToWorldVector.y));
}
function raycastWorldUnits(lineSegments, intersects) {
  const matrixWorld = lineSegments.matrixWorld;
  const geometry = lineSegments.geometry;
  const instanceStart = geometry.attributes.instanceStart;
  const instanceEnd = geometry.attributes.instanceEnd;
  const segmentCount = Math.min(geometry.instanceCount, instanceStart.count);
  for (let i = 0, l = segmentCount; i < l; i++) {
    _line.start.fromBufferAttribute(instanceStart, i);
    _line.end.fromBufferAttribute(instanceEnd, i);
    _line.applyMatrix4(matrixWorld);
    const pointOnLine = new Vector3();
    const point = new Vector3();
    _ray.distanceSqToSegment(_line.start, _line.end, point, pointOnLine);
    const isInside = point.distanceTo(pointOnLine) < _lineWidth * 0.5;
    if (isInside) {
      intersects.push({
        point,
        pointOnLine,
        distance: _ray.origin.distanceTo(point),
        object: lineSegments,
        face: null,
        faceIndex: i,
        uv: null,
        [UV1]: null
      });
    }
  }
}
function raycastScreenSpace(lineSegments, camera, intersects) {
  const projectionMatrix = camera.projectionMatrix;
  const material = lineSegments.material;
  const resolution = material.resolution;
  const matrixWorld = lineSegments.matrixWorld;
  const geometry = lineSegments.geometry;
  const instanceStart = geometry.attributes.instanceStart;
  const instanceEnd = geometry.attributes.instanceEnd;
  const segmentCount = Math.min(geometry.instanceCount, instanceStart.count);
  const near = -camera.near;
  _ray.at(1, _ssOrigin);
  _ssOrigin.w = 1;
  _ssOrigin.applyMatrix4(camera.matrixWorldInverse);
  _ssOrigin.applyMatrix4(projectionMatrix);
  _ssOrigin.multiplyScalar(1 / _ssOrigin.w);
  _ssOrigin.x *= resolution.x / 2;
  _ssOrigin.y *= resolution.y / 2;
  _ssOrigin.z = 0;
  _ssOrigin3.copy(_ssOrigin);
  _mvMatrix.multiplyMatrices(camera.matrixWorldInverse, matrixWorld);
  for (let i = 0, l = segmentCount; i < l; i++) {
    _start4.fromBufferAttribute(instanceStart, i);
    _end4.fromBufferAttribute(instanceEnd, i);
    _start4.w = 1;
    _end4.w = 1;
    _start4.applyMatrix4(_mvMatrix);
    _end4.applyMatrix4(_mvMatrix);
    const isBehindCameraNear = _start4.z > near && _end4.z > near;
    if (isBehindCameraNear) {
      continue;
    }
    if (_start4.z > near) {
      const deltaDist = _start4.z - _end4.z;
      const t = (_start4.z - near) / deltaDist;
      _start4.lerp(_end4, t);
    } else if (_end4.z > near) {
      const deltaDist = _end4.z - _start4.z;
      const t = (_end4.z - near) / deltaDist;
      _end4.lerp(_start4, t);
    }
    _start4.applyMatrix4(projectionMatrix);
    _end4.applyMatrix4(projectionMatrix);
    _start4.multiplyScalar(1 / _start4.w);
    _end4.multiplyScalar(1 / _end4.w);
    _start4.x *= resolution.x / 2;
    _start4.y *= resolution.y / 2;
    _end4.x *= resolution.x / 2;
    _end4.y *= resolution.y / 2;
    _line.start.copy(_start4);
    _line.start.z = 0;
    _line.end.copy(_end4);
    _line.end.z = 0;
    const param = _line.closestPointToPointParameter(_ssOrigin3, true);
    _line.at(param, _closestPoint);
    const zPos = MathUtils.lerp(_start4.z, _end4.z, param);
    const isInClipSpace = zPos >= -1 && zPos <= 1;
    const isInside = _ssOrigin3.distanceTo(_closestPoint) < _lineWidth * 0.5;
    if (isInClipSpace && isInside) {
      _line.start.fromBufferAttribute(instanceStart, i);
      _line.end.fromBufferAttribute(instanceEnd, i);
      _line.start.applyMatrix4(matrixWorld);
      _line.end.applyMatrix4(matrixWorld);
      const pointOnLine = new Vector3();
      const point = new Vector3();
      _ray.distanceSqToSegment(_line.start, _line.end, point, pointOnLine);
      intersects.push({
        point,
        pointOnLine,
        distance: _ray.origin.distanceTo(point),
        object: lineSegments,
        face: null,
        faceIndex: i,
        uv: null,
        [UV1]: null
      });
    }
  }
}
var LineSegments2 = class extends Mesh {
  constructor(geometry = new LineSegmentsGeometry(), material = new LineMaterial({ color: Math.random() * 16777215 })) {
    super(geometry, material);
    this.isLineSegments2 = true;
    this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const geometry = this.geometry;
    const instanceStart = geometry.attributes.instanceStart;
    const instanceEnd = geometry.attributes.instanceEnd;
    const lineDistances = new Float32Array(2 * instanceStart.count);
    for (let i = 0, j = 0, l = instanceStart.count; i < l; i++, j += 2) {
      _start.fromBufferAttribute(instanceStart, i);
      _end.fromBufferAttribute(instanceEnd, i);
      lineDistances[j] = j === 0 ? 0 : lineDistances[j - 1];
      lineDistances[j + 1] = lineDistances[j] + _start.distanceTo(_end);
    }
    const instanceDistanceBuffer = new InstancedInterleavedBuffer(lineDistances, 2, 1);
    geometry.setAttribute("instanceDistanceStart", new InterleavedBufferAttribute(instanceDistanceBuffer, 1, 0));
    geometry.setAttribute("instanceDistanceEnd", new InterleavedBufferAttribute(instanceDistanceBuffer, 1, 1));
    return this;
  }
  raycast(raycaster, intersects) {
    const worldUnits = this.material.worldUnits;
    const camera = raycaster.camera;
    if (camera === null && !worldUnits) {
      console.error(
        'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'
      );
    }
    const threshold = raycaster.params.Line2 !== void 0 ? raycaster.params.Line2.threshold || 0 : 0;
    _ray = raycaster.ray;
    const matrixWorld = this.matrixWorld;
    const geometry = this.geometry;
    const material = this.material;
    _lineWidth = material.linewidth + threshold;
    if (geometry.boundingSphere === null) {
      geometry.computeBoundingSphere();
    }
    _sphere.copy(geometry.boundingSphere).applyMatrix4(matrixWorld);
    let sphereMargin;
    if (worldUnits) {
      sphereMargin = _lineWidth * 0.5;
    } else {
      const distanceToSphere = Math.max(camera.near, _sphere.distanceToPoint(_ray.origin));
      sphereMargin = getWorldSpaceHalfWidth(camera, distanceToSphere, material.resolution);
    }
    _sphere.radius += sphereMargin;
    if (_ray.intersectsSphere(_sphere) === false) {
      return;
    }
    if (geometry.boundingBox === null) {
      geometry.computeBoundingBox();
    }
    _box2.copy(geometry.boundingBox).applyMatrix4(matrixWorld);
    let boxMargin;
    if (worldUnits) {
      boxMargin = _lineWidth * 0.5;
    } else {
      const distanceToBox = Math.max(camera.near, _box2.distanceToPoint(_ray.origin));
      boxMargin = getWorldSpaceHalfWidth(camera, distanceToBox, material.resolution);
    }
    _box2.expandByScalar(boxMargin);
    if (_ray.intersectsBox(_box2) === false) {
      return;
    }
    if (worldUnits) {
      raycastWorldUnits(this, intersects);
    } else {
      raycastScreenSpace(this, camera, intersects);
    }
  }
  onBeforeRender(renderer) {
    const uniforms = this.material.uniforms;
    if (uniforms && uniforms.resolution) {
      renderer.getViewport(_viewport);
      this.material.uniforms.resolution.value.set(_viewport.z, _viewport.w);
    }
  }
};

// ../../node_modules/.pnpm/three-stdlib@2.35.15_three@0.169.0/node_modules/three-stdlib/lines/Line2.js
var Line2 = class extends LineSegments2 {
  constructor(geometry = new LineGeometry(), material = new LineMaterial({ color: Math.random() * 16777215 })) {
    super(geometry, material);
    this.isLine2 = true;
    this.type = "Line2";
  }
};

export {
  RGBELoader,
  LineGeometry,
  LineMaterial,
  Line2
};
