import {
  m
} from "./chunk-VYZZJNZ3.mjs";

// src/components/Web/TempControls.tsx
import { ControlType } from "framer";
import { jsx } from "react/jsx-runtime";
function ChangeColorButton() {
  const [, setColor1] = m.useQueryState("color1");
  return /* @__PURE__ */ jsx("button", { onClick: () => setColor1("#0D77E0"), children: "useQueryState" });
}
function ChangeButton2({ url }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => {
        console.log("m", m);
        console.log("url", url);
        m.updateGradientState(url);
      },
      children: "ChangeButton2"
    }
  );
}
function ChangeButton3({ url }) {
  const setQueryValue = m.useURLQueryState();
  return /* @__PURE__ */ jsx("button", { onClick: () => setQueryValue(url), children: "setQueryValue" });
}
ChangeButton2.propertyControls = {
  url: {
    type: ControlType.String
  }
};
ChangeButton3.propertyControls = {
  url: {
    type: ControlType.String
  }
};

export {
  ChangeColorButton,
  ChangeButton2,
  ChangeButton3
};
