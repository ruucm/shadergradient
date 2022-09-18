import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
export const containerStyles = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const nullIconStyle = {
    minWidth: "10px",
    minHeight: "10px",
    maxWidth: "20px",
    maxHeight: "20px",
    width: "60%",
    height: "60%"
};
const emptyStateStyle = {
    ...containerStyles,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column"
};
export const NullState = /*#__PURE__*/ React.forwardRef((_, ref)=>{
    return(/*#__PURE__*/ _jsx("div", {
        style: emptyStateStyle,
        ref: ref
    }));
}) /*

<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                style={nullIconStyle}
            >
                <path
                    d="M 12.857 0 C 19.958 0 25.714 5.756 25.714 12.857 C 25.714 19.958 19.958 25.714 12.857 25.714 C 5.756 25.714 0 19.958 0 12.857 C 0 5.756 5.756 0 12.857 0 Z"
                    fill="#FFFFFF"
                ></path>
                <path
                    d="M 20.357 20.357 L 27.857 27.857"
                    fill="transparent"
                    strokeWidth="4.28"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                ></path>
                <g transform="translate(9.643 6.429)">
                    <path
                        d="M 3.214 12.857 L 3.214 12.857"
                        fill="transparent"
                        strokeWidth="3.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M 0 3.214 C 0 1.004 1.843 0 3.214 0 C 4.586 0 6.429 0.603 6.429 3.214 C 6.429 5.826 3.214 5.913 3.214 7.232 C 3.214 8.552 3.214 8.571 3.214 8.571"
                        fill="transparent"
                        strokeWidth="3.22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
            */ ;

export const __FramerMetadata__ = {"exports":{"containerStyles":{"type":"variable","annotations":{"framerContractVersion":"1"}},"NullState":{"type":"variable","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./nullstate.map