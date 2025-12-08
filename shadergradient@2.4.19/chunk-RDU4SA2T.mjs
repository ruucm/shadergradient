import {
  useGizmoContext
} from "./chunk-ZNOFOFJJ.mjs";
import {
  useThree
} from "./chunk-73SH6GTX.mjs";
import {
  CanvasTexture
} from "./chunk-BT6X4JN2.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Axis/GizmoViewport.tsx
import * as React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Axis({ scale = [0.8, 0.05, 0.05], color, rotation }) {
  return /* @__PURE__ */ jsx("group", { rotation, children: /* @__PURE__ */ jsxs("mesh", { position: [0.4, 0, 0], children: [
    /* @__PURE__ */ jsx("boxGeometry", { args: scale }),
    /* @__PURE__ */ jsx("meshBasicMaterial", { color, toneMapped: false })
  ] }) });
}
function AxisHead(_a) {
  var _b = _a, {
    onClick,
    font,
    disabled,
    arcStyle,
    label,
    labelColor,
    axisHeadScale = 1
  } = _b, props = __objRest(_b, [
    "onClick",
    "font",
    "disabled",
    "arcStyle",
    "label",
    "labelColor",
    "axisHeadScale"
  ]);
  const gl = useThree((state) => state.gl);
  const texture = React.useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(32, 32, 16, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle = arcStyle;
    context.fill();
    if (label) {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = labelColor;
      context.fillText(label, 32, 41);
    }
    return new CanvasTexture(canvas);
  }, [arcStyle, label, labelColor, font]);
  const [active, setActive] = React.useState(false);
  const scale = (label ? 1 : 0.75) * (active ? 1.2 : 1) * axisHeadScale;
  const handlePointerOver = (e) => {
    e.stopPropagation();
    setActive(true);
  };
  const handlePointerOut = (e) => {
    e.stopPropagation();
    setActive(false);
  };
  return /* @__PURE__ */ jsx(
    "sprite",
    __spreadProps(__spreadValues({
      scale,
      onPointerOver: !disabled ? handlePointerOver : void 0,
      onPointerOut: !disabled ? onClick || handlePointerOut : void 0
    }, props), {
      children: /* @__PURE__ */ jsx(
        "spriteMaterial",
        {
          map: texture,
          "map-encoding": gl.outputEncoding,
          "map-anisotropy": gl.capabilities.getMaxAnisotropy() || 1,
          alphaTest: 0.3,
          opacity: label ? 1 : 0.75,
          toneMapped: false
        }
      )
    })
  );
}
var GizmoViewport = (_a) => {
  var _b = _a, {
    hideNegativeAxes,
    hideAxisHeads,
    disabled,
    font = "18px Inter var, Arial, sans-serif",
    axisColors = ["#ff2060", "#20df80", "#2080ff"],
    axisHeadScale = 1,
    axisScale,
    labels = ["X", "Y", "Z"],
    labelColor = "#000",
    onClick
  } = _b, props = __objRest(_b, [
    "hideNegativeAxes",
    "hideAxisHeads",
    "disabled",
    "font",
    "axisColors",
    "axisHeadScale",
    "axisScale",
    "labels",
    "labelColor",
    "onClick"
  ]);
  const [colorX, colorY, colorZ] = axisColors;
  const { tweenCamera, raycast } = useGizmoContext();
  const axisHeadProps = {
    font,
    disabled,
    labelColor,
    raycast,
    onClick,
    axisHeadScale,
    onPointerDown: !disabled ? (e) => {
      tweenCamera(e.object.position);
      e.stopPropagation();
    } : void 0
  };
  return /* @__PURE__ */ jsxs("group", __spreadProps(__spreadValues({ scale: 40 }, props), { children: [
    /* @__PURE__ */ jsx(Axis, { color: colorX, rotation: [0, 0, 0], scale: axisScale }),
    /* @__PURE__ */ jsx(Axis, { color: colorY, rotation: [0, 0, Math.PI / 2], scale: axisScale }),
    /* @__PURE__ */ jsx(Axis, { color: colorZ, rotation: [0, -Math.PI / 2, 0], scale: axisScale }),
    !hideAxisHeads && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        AxisHead,
        __spreadValues({
          arcStyle: colorX,
          position: [1, 0, 0],
          label: labels[0]
        }, axisHeadProps)
      ),
      /* @__PURE__ */ jsx(
        AxisHead,
        __spreadValues({
          arcStyle: colorY,
          position: [0, 1, 0],
          label: labels[1]
        }, axisHeadProps)
      ),
      /* @__PURE__ */ jsx(
        AxisHead,
        __spreadValues({
          arcStyle: colorZ,
          position: [0, 0, 1],
          label: labels[2]
        }, axisHeadProps)
      ),
      !hideNegativeAxes && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          AxisHead,
          __spreadValues({
            arcStyle: colorX,
            position: [-1, 0, 0]
          }, axisHeadProps)
        ),
        /* @__PURE__ */ jsx(
          AxisHead,
          __spreadValues({
            arcStyle: colorY,
            position: [0, -1, 0]
          }, axisHeadProps)
        ),
        /* @__PURE__ */ jsx(
          AxisHead,
          __spreadValues({
            arcStyle: colorZ,
            position: [0, 0, -1]
          }, axisHeadProps)
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsx("pointLight", { position: [10, 10, 10], intensity: 0.5 })
  ] }));
};

export {
  GizmoViewport
};
