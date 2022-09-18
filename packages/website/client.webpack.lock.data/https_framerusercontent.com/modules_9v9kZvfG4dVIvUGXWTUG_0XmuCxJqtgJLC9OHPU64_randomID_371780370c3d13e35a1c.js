import { useConstant } from "https://framer.com/m/framer/useConstant.js@^1.0.0";
const BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/**
 * Generates a random string of BASE62 characters.
 */ export function randomID(length = 5) {
    return Array(length).fill(0).map(()=>BASE62[Math.floor(Math.random() * BASE62.length)]
    ).join("");
}
export function useRandomID(length = 5) {
    return useConstant(()=>randomID(length)
    );
}
const defaultStorageKey = "$$FramerRandomID";
/**
 * `randomID` but cached in localStorage.
 */ export function useCachedRandomID(storageKey = defaultStorageKey) {
    return useConstant(()=>{
        const storage = getLocalStorage();
        if (!storage) return randomID(8);
        const cachedValue = storage.getItem(storageKey);
        if (cachedValue) return cachedValue;
        const newID = randomID(8);
        storage.setItem(storageKey, newID);
        return newID;
    });
}
function getLocalStorage() {
    if (typeof window === undefined) return undefined;
    try {
        return window.localStorage;
    } catch (err) {
        return undefined;
    }
}

export const __FramerMetadata__ = {"exports":{"useRandomID":{"type":"function","annotations":{"framerContractVersion":"1"}},"useCachedRandomID":{"type":"function","annotations":{"framerContractVersion":"1"}},"randomID":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./randomID.map