export function detectAutoSizingAxis(props) {
    var ref, ref1;
    return {
        width: ((ref = props.style) === null || ref === void 0 ? void 0 : ref.width) !== "100%",
        height: ((ref1 = props.style) === null || ref1 === void 0 ? void 0 : ref1.height) !== "100%"
    };
}

export const __FramerMetadata__ = {"exports":{"detectAutoSizingAxis":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./detectAutoSizingAxis.map