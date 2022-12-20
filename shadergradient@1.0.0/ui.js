// src/UI/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        background: "blue",
        color: "white",
        padding: 20,
        display: "flex"
      },
      children: "ESM button33"
    }
  );
};

// src/UI/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Card = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: "skyblue",
        padding: 20
      },
      children: [
        /* @__PURE__ */ jsx2(Button, {}),
        "CAARD"
      ]
    }
  );
};
export {
  Button,
  Card
};
