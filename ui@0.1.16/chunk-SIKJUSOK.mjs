// src/components/FigmaPlugin/InputTitle.tsx
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function InputTitle({
  title,
  info,
  infoContent,
  condition = false
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: 'w-[105px] flex items-center flex-shrink-0 gap-0.5 select-none font-["Inter"] relative',
      children: [
        /* @__PURE__ */ jsxs("p", { className: "font-medium whitespace-nowrap select-none", children: [
          condition === true && /* @__PURE__ */ jsx("span", { className: "opacity-30", children: "\u21B3 " }),
          title
        ] }),
        info === true && /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex items-center justify-center relative w-fit h-fit p-0.5 cursor-pointer",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "#000000",
                viewBox: "0 0 256 256",
                className: "opacity-30",
                children: /* @__PURE__ */ jsx("path", { d: "M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z" })
              }
            )
          }
        ),
        info === true && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-fit h-fit absolute z-20 pointer-events-none duration-300 " + (isMouseOver === true ? "opacity-100 bottom-7" : "opacity-0 bottom-6"),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute w-full h-full bg-[#ff340a] z-0 rounded-md opacity-80", children: /* @__PURE__ */ jsx("div", { className: "bg-[#ff340a] absolute w-3 h-3 rotate-45 rounded-sm bottom-[-4px] left-[12px]" }) }),
              /* @__PURE__ */ jsx("p", { className: "relative z-20 p-2 text-white min-w-[200px] font-medium", children: infoContent })
            ]
          }
        )
      ]
    }
  );
}

export {
  InputTitle
};
