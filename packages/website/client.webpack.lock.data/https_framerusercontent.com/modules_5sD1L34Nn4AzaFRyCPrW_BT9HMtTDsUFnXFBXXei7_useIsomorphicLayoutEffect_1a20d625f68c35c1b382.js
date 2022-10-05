import{useLayoutEffect,useEffect}from"react";/**
 * Swaps `useLayoutEffect` for `useEffect` on the server to avoid React warnings.
 * NOTE! The effect won't run on the server.
 */ export const useIsomorphicLayoutEffect=typeof document!=="undefined"?useLayoutEffect:useEffect;
export const __FramerMetadata__ = {"exports":{"useIsomorphicLayoutEffect":{"type":"variable","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./useIsomorphicLayoutEffect.map