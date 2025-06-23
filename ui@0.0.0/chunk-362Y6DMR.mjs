import {
  InputTitle
} from "./chunk-DBZGOJTR.mjs";
import {
  NumberInput
} from "./chunk-3CYQJ3RF.mjs";

// src/PluginUI/TripleNumberInput.tsx
import { useState, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function TripleNumberInput({
  title,
  defaultValueX,
  defaultValueY,
  defaultValueZ,
  setValueX,
  setValueY,
  setValueZ,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [sharedValueX, setSharedValueX] = useState(defaultValueX);
  const [sharedValueY, setSharedValueY] = useState(defaultValueY);
  const [sharedValueZ, setSharedValueZ] = useState(defaultValueZ);
  const [mouseOverOn, setMouseOverOn] = useState("");
  useEffect(() => {
    setSharedValueX(defaultValueX);
    setSharedValueY(defaultValueY);
    setSharedValueZ(defaultValueZ);
  }, []);
  useEffect(() => {
    setValueX(sharedValueX);
  }, [sharedValueX]);
  useEffect(() => {
    setValueY(sharedValueY);
  }, [sharedValueY]);
  useEffect(() => {
    setValueZ(sharedValueZ);
  }, [sharedValueZ]);
  useEffect(() => {
    setSharedValueX(defaultValueX);
  }, [defaultValueX]);
  useEffect(() => {
    setSharedValueY(defaultValueY);
  }, [defaultValueY]);
  useEffect(() => {
    setSharedValueZ(defaultValueZ);
  }, [defaultValueZ]);
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
              label: "x",
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
              label: "y",
              value: sharedValueY,
              setValue: setSharedValueY,
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
              label: "z",
              value: sharedValueZ,
              setValue: setSharedValueZ,
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
  TripleNumberInput
};
