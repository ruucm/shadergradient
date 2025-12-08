import {
  useQueryState,
  useURLQueryState
} from "./chunk-2FTBD3PI.mjs";

// src/components/Shared/BasicControls.tsx
import { ControlType } from "framer";
import { jsx } from "react/jsx-runtime";
function ChangeColorButton() {
  const [, setColor1] = useQueryState("color1");
  return /* @__PURE__ */ jsx("button", { onClick: () => setColor1("#0D77E0"), children: "useQueryState" });
}
function ChangeButton3({ url }) {
  const setQueryValue = useURLQueryState();
  return /* @__PURE__ */ jsx("button", { onClick: () => setQueryValue(url), children: "setQueryValue" });
}
ChangeButton3.propertyControls = {
  url: {
    type: ControlType.String
  }
};

export {
  ChangeColorButton,
  ChangeButton3
};
