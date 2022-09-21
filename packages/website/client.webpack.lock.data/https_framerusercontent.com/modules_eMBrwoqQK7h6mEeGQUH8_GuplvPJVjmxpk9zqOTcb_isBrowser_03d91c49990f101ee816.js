import { useMemo } from "react";
export const isBrowserSafari = ()=>{
    if (typeof navigator !== `undefined`) {
        const userAgent = navigator.userAgent.toLowerCase();
        const isSafari = (userAgent.indexOf("safari") > -1 || userAgent.indexOf("framermobile") > -1 || userAgent.indexOf("framerx") > -1) && userAgent.indexOf("chrome") < 0;
        return isSafari;
    } else return false;
};
export const useIsBrowserSafari = ()=>useMemo(()=>isBrowserSafari()
    , [])
;

export const __FramerMetadata__ = {"exports":{"useIsBrowserSafari":{"type":"variable","annotations":{"framerContractVersion":"1"}},"isBrowserSafari":{"type":"variable","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./isBrowser.map