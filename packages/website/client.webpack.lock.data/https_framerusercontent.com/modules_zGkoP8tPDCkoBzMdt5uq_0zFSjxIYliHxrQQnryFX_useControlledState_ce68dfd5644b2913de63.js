import * as React from "react";
export function useControlledState(value) {
    const [controlledValue, setValue] = React.useState(value);
    React.useEffect(()=>{
        setValue(value);
    }, [
        value
    ]);
    return [
        controlledValue,
        setValue
    ];
}

export const __FramerMetadata__ = {"exports":{"useControlledState":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useControlledState.map