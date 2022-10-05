import * as React from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const l = ()=>letters[Math.floor(Math.random() * letters.length)]
;
export const randomID = ()=>l() + l() + l() + l() + l() + l() + l() + l() + l()
;
function createUniqueClass(suffix) {
    return `framer-${suffix}-${randomID()}`;
}
export function useUniqueClassName(suffix, deps) {
    const [className, setClassName] = React.useState(createUniqueClass(suffix));
    React.useEffect(()=>{
        setClassName(createUniqueClass(suffix));
    }, [
        suffix,
        ...deps
    ]);
    return className;
}

export const __FramerMetadata__ = {"exports":{"useUniqueClassName":{"type":"function","annotations":{"framerContractVersion":"1"}},"randomID":{"type":"variable","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useUniqueClassName.map