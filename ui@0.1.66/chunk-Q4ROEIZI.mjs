// src/components/FigmaPlugin/NumberInput.tsx
import { useState, useCallback, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var NumberInput = ({
  label,
  value,
  setValue,
  mouseOverOn,
  setMouseOverOn,
  min,
  max,
  step
}) => {
  const [snapshot, setSnapshot] = useState(value);
  const [startVal, setStartVal] = useState(0);
  const onStart = useCallback(
    (event) => {
      setStartVal(event.clientX);
      setSnapshot(value);
    },
    [value]
  );
  useEffect(() => {
    const onUpdate = (event) => {
      var _a;
      if (startVal) {
        const diff = event.clientX - startVal;
        const sensitivity = 0.5;
        const rawValue = snapshot + diff * sensitivity;
        const newValue = step ? Math.round(rawValue / step) * step : rawValue;
        if (min !== void 0 && newValue < min) return;
        if (max !== void 0 && newValue > max) return;
        const decimalPlaces = step ? ((_a = step.toString().split(".")[1]) == null ? void 0 : _a.length) || 0 : 0;
        setValue(parseFloat(newValue.toFixed(decimalPlaces)));
      }
    };
    const onEnd = () => {
      setStartVal(0);
    };
    document.addEventListener("mousemove", onUpdate);
    document.addEventListener("mouseup", onEnd);
    return () => {
      document.removeEventListener("mousemove", onUpdate);
      document.removeEventListener("mouseup", onEnd);
    };
  }, [startVal, setValue, snapshot, min, max, step]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: 'w-full bg-[#F2F2F2] rounded-md flex flex-row gap-0 justify-center items-center h-full relative cursor-ew-resize font-["Inter"]',
      onMouseOver: () => setMouseOverOn(label),
      onMouseLeave: () => setMouseOverOn(""),
      onMouseDown: onStart,
      children: [
        /* @__PURE__ */ jsx("div", { className: "h-full w-fit flex justify-center items-center text-[9px] text-black opacity-70 capitalize ml-2 select-none", children: label }),
        /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value,
            onChange: (e) => {
              const parsed = parseFloat(e.target.value);
              if (!isNaN(parsed)) {
                setValue(parsed);
              }
            },
            className: "font-medium w-[24px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md [&::-webkit-inner-spin-button]:appearance-none overflow-visible select-none " + (mouseOverOn === label ? "text-[#ff340a]" : "text-[#000000]"),
            min,
            max,
            step
          }
        ) })
      ]
    }
  );
};

export {
  NumberInput
};
