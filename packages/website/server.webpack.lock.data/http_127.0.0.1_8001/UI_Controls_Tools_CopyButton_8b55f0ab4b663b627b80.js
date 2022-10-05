var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/UI/Controls/Tools/CopyButton.tsx
import * as React from "react";
import { IconHoverBox } from "../../HoverBox/IconHoverBox.js";
var CopyButton = () => {
  const [copyUrlText, setCopyUrl] = React.useState("Copy");
  const [isHovered, setIsHovered] = React.useState(false);
  const initial = () => __async(void 0, null, function* () {
    yield setTimeout(() => {
      setIsHovered(false);
    }, 3e3);
  });
  React.useEffect(() => {
    setIsHovered(true);
    initial();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center",
    style: { marginLeft: 5 }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center cursor-pointer text-large font-medium bg-primary p-1.5 w-[70px] text-white rounded-sm justify-center",
    onClick: () => __async(void 0, null, function* () {
      window.navigator.clipboard.writeText(window.location.href);
      setCopyUrl("Copied!");
      yield setTimeout(() => {
        setCopyUrl("Copy");
      }, 2e3);
    }),
    onMouseOver: () => {
      setIsHovered(true);
    },
    onMouseLeave: () => {
      setIsHovered(false);
    }
  }, copyUrlText), /* @__PURE__ */ React.createElement(IconHoverBox, {
    content: "Share it, or use it in Figma/Framer",
    isHovered,
    bottom: 90
  }));
};
export {
  CopyButton
};
