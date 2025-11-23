import {
  NumberInput
} from "./chunk-NQRDJNYL.mjs";
import {
  InputTitle
} from "./chunk-SIKJUSOK.mjs";

// src/components/FigmaPlugin/DoubleNumberInput.tsx
import { useState, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function DoubleNumberInput({
  title,
  defaultValueX,
  defaultValueY,
  labelX,
  labelY,
  setValueX,
  setValueY,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [sharedValueX, setSharedValueX] = useState(defaultValueX);
  const [sharedValueY, setSharedValueY] = useState(defaultValueY);
  const [mouseOverOn, setMouseOverOn] = useState("");
  useEffect(() => {
    setSharedValueX(defaultValueX);
    setSharedValueY(defaultValueY);
  }, []);
  useEffect(() => {
    setValueX(sharedValueX);
  }, [sharedValueX]);
  useEffect(() => {
    setValueY(sharedValueY);
  }, [sharedValueY]);
  useEffect(() => {
    setSharedValueX(defaultValueX);
  }, [defaultValueX]);
  useEffect(() => {
    setSharedValueY(defaultValueY);
  }, [defaultValueY]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center w-full h-[26px] flex-row gap-2",
      style: { fontFamily: "Inter Medium" },
      children: [
        /* @__PURE__ */ jsx(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full h-fit flex-row gap-2", children: [
          /* @__PURE__ */ jsx(
            NumberInput,
            {
              label: labelX,
              value: sharedValueX,
              setValue: setSharedValueX,
              mouseOverOn,
              setMouseOverOn,
              min,
              max,
              step
            }
          ),
          /* @__PURE__ */ jsx(
            NumberInput,
            {
              label: labelY,
              value: sharedValueY,
              setValue: setSharedValueY,
              mouseOverOn,
              setMouseOverOn,
              min,
              max,
              step
            }
          )
        ] })
      ]
    }
  );
}

export {
  DoubleNumberInput
};
