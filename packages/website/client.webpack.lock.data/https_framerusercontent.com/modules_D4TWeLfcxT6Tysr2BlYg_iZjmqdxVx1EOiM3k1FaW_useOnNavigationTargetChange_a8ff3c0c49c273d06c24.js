import { useIsInCurrentNavigationTarget } from "framer";
import { useEffect } from "react";
export function useOnEnter(onEnter, enabled) {
    return useOnSpecificTargetChange(true, onEnter, enabled);
}
export function useOnExit(onExit, enabled) {
    return useOnSpecificTargetChange(false, onExit, enabled);
}
function useOnSpecificTargetChange(goal, callback, enabled = true) {
    const isInTarget = useIsInCurrentNavigationTarget();
    useEffect(()=>{
        if (enabled && isInTarget === goal) callback();
    }, [
        isInTarget
    ]);
}

export const __FramerMetadata__ = {"exports":{"useOnEnter":{"type":"function","annotations":{"framerContractVersion":"1"}},"useOnExit":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useOnNavigationTargetChange.map