// src/components/Shared/TailwindLoader.tsx
import { ControlType } from "framer";
import { useEffect, useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
function TailwindLoader({ href }) {
  const tailwindLoaded = useTailwind(href);
  return /* @__PURE__ */ jsx(Fragment, { children: tailwindLoaded ? /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "loaded (tailwind)" }) : /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "loading.." }) });
}
function useTailwind(href) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const existingLink = Array.from(
      document.head.querySelectorAll("link")
    ).find((link) => link.href === href);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      setLoaded(true);
      return () => {
        document.head.removeChild(link);
      };
    } else {
      setLoaded(true);
    }
  }, []);
  return loaded;
}
TailwindLoader.propertyControls = {
  href: {
    type: ControlType.String,
    defaultValue: "https://ruucm.github.io/shadergradient/ui@0.0.0/styles.css"
  }
};

export {
  TailwindLoader
};
