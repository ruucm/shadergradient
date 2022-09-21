import { Color } from "framer";
export function colorFromToken(color) {
    if (color.startsWith("var(--token-")) return "rgb" + color.split(") /*")[0].split(", rgb")[1];
    return color;
}
export function colorTokentoValue(color) {
    return Color(colorFromToken(color)).toValue();
}

export const __FramerMetadata__ = {"exports":{"colorFromToken":{"type":"function","annotations":{"framerContractVersion":"1"}},"colorTokentoValue":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./colorFromToken.map