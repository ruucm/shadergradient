import {
  useQueryState
} from "./chunk-QQGWN2EE.mjs";
import {
  __export1,
  useCursorStore
} from "./chunk-FBASGS47.mjs";
import {
  formatUrlString
} from "./chunk-CIS2NEPW.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/components/Shared/ShaderGradientStateless/useControlValues.ts
function useControlValues(control, _a) {
  var _b = _a, { urlString } = _b, props = __objRest(_b, ["urlString"]);
  const [type] = useQueryState("type");
  const [animate] = useQueryState("animate");
  const [range] = useQueryState("range");
  const [rangeStart] = useQueryState("rangeStart");
  const [rangeEnd] = useQueryState("rangeEnd");
  const [uTime] = useQueryState("uTime");
  const [uSpeed] = useQueryState("uSpeed");
  const [uStrength] = useQueryState("uStrength");
  const [uDensity] = useQueryState("uDensity");
  const [uFrequency] = useQueryState("uFrequency");
  const [uAmplitude] = useQueryState("uAmplitude");
  const [positionX] = useQueryState("positionX");
  const [positionY] = useQueryState("positionY");
  const [positionZ] = useQueryState("positionZ");
  const [rotationX] = useQueryState("rotationX");
  const [rotationY] = useQueryState("rotationY");
  const [rotationZ] = useQueryState("rotationZ");
  const [color1] = useQueryState("color1");
  const [color2] = useQueryState("color2");
  const [color3] = useQueryState("color3");
  const [cAzimuthAngle] = useQueryState("cAzimuthAngle");
  const [cPolarAngle] = useQueryState("cPolarAngle");
  const [cDistance] = useQueryState("cDistance");
  const [cameraZoom] = useQueryState("cameraZoom");
  const [wireframe] = useQueryState("wireframe");
  const [shader] = useQueryState("shader");
  const [lightType] = useQueryState("lightType");
  const [brightness] = useQueryState("brightness");
  const [envPreset] = useQueryState("envPreset");
  const [grain] = useQueryState("grain");
  const [reflection] = useQueryState("reflection");
  const [zoomOut] = useQueryState("zoomOut");
  const [toggleAxis] = useQueryState("toggleAxis");
  const hoverState = useCursorStore((state) => state.hoverState);
  const [frameRate] = useQueryState("frameRate");
  const [destination] = useQueryState("destination");
  const [format] = useQueryState("format");
  const queryProps = {
    type,
    animate,
    range,
    rangeStart,
    rangeEnd,
    frameRate,
    destination,
    format,
    uTime,
    uSpeed,
    uStrength,
    uDensity,
    uFrequency,
    uAmplitude,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    color1,
    color2,
    color3,
    cAzimuthAngle,
    cPolarAngle,
    cDistance,
    cameraZoom,
    wireframe,
    shader,
    lightType,
    brightness,
    envPreset,
    grain,
    reflection,
    zoomOut,
    toggleAxis,
    hoverState
    // include hoverState to flush the shader when it is hovered
  };
  if (control === "props") return clean(__spreadValues(__spreadValues({}, queryProps), props));
  else if (control === "query")
    return clean(
      urlString ? __export1(formatUrlString(urlString), {
        parseNumbers: true,
        parseBooleans: true,
        arrayFormat: "index"
      }) : queryProps
    );
}
function clean(obj) {
  const cleanedObject = {};
  for (const key in obj) {
    if (obj[key] !== null) {
      cleanedObject[key] = obj[key];
    }
  }
  return cleanedObject;
}

export {
  useControlValues
};
