import { ControlType } from "framer";
// I realize this only applies to select right now
// but we can work on it in here
export function getVariantControls(Component, variant, additionalControls = {
}) {
    return {
        [`${variant}TextColor`]: {
            type: ControlType.Color,
            title: "Text Color",
            defaultValue: Component.defaultProps[`${variant}TextColor`],
            hidden: (props)=>props.variant !== variant
        },
        [`${variant}IconColor`]: {
            type: ControlType.Color,
            title: "Icon Color",
            defaultValue: Component.defaultProps[`${variant}IconColor`],
            hidden: (props)=>props.variant !== variant
        },
        [`${variant}BackgroundColor`]: {
            type: ControlType.Color,
            title: "Bg Color",
            defaultValue: Component.defaultProps[`${variant}BackgroundColor`],
            hidden: (props)=>props.variant !== variant
        },
        [`${variant}BorderColor`]: {
            type: ControlType.Color,
            title: "Border Color",
            defaultValue: Component.defaultProps[`${variant}BorderColor`],
            hidden: (props)=>props.variant !== variant
        },
        [`${variant}BorderWidth`]: {
            type: ControlType.Number,
            title: " ",
            min: 0,
            max: 5,
            displayStepper: true,
            defaultValue: Component.defaultProps[`${variant}BorderWidth`],
            hidden: (props)=>props.variant !== variant
        },
        ...additionalControls
    };
}

export const __FramerMetadata__ = {"exports":{"getVariantControls":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./variantUtils.map