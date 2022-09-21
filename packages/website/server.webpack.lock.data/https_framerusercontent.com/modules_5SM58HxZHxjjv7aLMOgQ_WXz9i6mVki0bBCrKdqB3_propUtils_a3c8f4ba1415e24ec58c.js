import { useMemo } from "react";
import { ControlType } from "framer";
export function useRadius(props) {
    const { borderRadius , isMixedBorderRadius , topLeftRadius , topRightRadius , bottomRightRadius , bottomLeftRadius ,  } = props;
    const radiusValue = useMemo(()=>isMixedBorderRadius ? `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px` : `${borderRadius}px`
    , [
        borderRadius,
        isMixedBorderRadius,
        topLeftRadius,
        topRightRadius,
        bottomRightRadius,
        bottomLeftRadius, 
    ]);
    return radiusValue;
}
export const borderRadiusControl = {
    borderRadius: {
        title: "Radius",
        type: ControlType.FusedNumber,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: [
            "Radius",
            "Radius per corner"
        ],
        valueKeys: [
            "topLeftRadius",
            "topRightRadius",
            "bottomRightRadius",
            "bottomLeftRadius", 
        ],
        valueLabels: [
            "TL",
            "TR",
            "BR",
            "BL"
        ],
        min: 0
    }
};
export function usePadding(props) {
    const { padding , paddingPerSide , paddingTop , paddingRight , paddingBottom , paddingLeft ,  } = props;
    const paddingValue = useMemo(()=>paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : padding
    , [
        padding,
        paddingPerSide,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft, 
    ]);
    return paddingValue;
}
export const paddingControl = {
    padding: {
        type: ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: [
            "Padding",
            "Padding per side"
        ],
        valueKeys: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft", 
        ],
        valueLabels: [
            "T",
            "R",
            "B",
            "L"
        ],
        min: 0,
        title: "Padding"
    }
};

export const __FramerMetadata__ = {"exports":{"borderRadiusControl":{"type":"variable","annotations":{"framerContractVersion":"1"}},"useRadius":{"type":"function","annotations":{"framerContractVersion":"1"}},"RadiusProps":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"PaddingProps":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"usePadding":{"type":"function","annotations":{"framerContractVersion":"1"}},"paddingControl":{"type":"variable","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./propUtils.map