export declare const useQueryStore: import("zustand").UseBoundStore<import("zustand").StoreApi<unknown>>;
export declare const updateGradientState: (querystate: object | string) => void;
export declare const useDomStore: import("zustand").UseBoundStore<import("zustand").StoreApi<{
    dom: any;
}>>;
export declare const useCursorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<unknown>>;
export declare const useUIStore: import("zustand").UseBoundStore<import("zustand").StoreApi<Omit<{
    activePreset: number;
    mode: string;
    loadingPercentage: number;
}, "setActivePreset" | "setMode" | "setLoadingPercentage"> & {
    setActivePreset: (by: number) => void;
    setMode: (data: any) => void;
    setLoadingPercentage: (data: any) => void;
}>>;
export declare function useFigma(): any[];
export declare const useBillingIntervalStore: import("zustand").UseBoundStore<import("zustand").StoreApi<unknown>>;
export declare function useBillingInterval(): any[];
//# sourceMappingURL=store.d.ts.map