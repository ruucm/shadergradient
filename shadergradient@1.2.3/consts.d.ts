export declare const canvasProps: (pixelDensity: number, fov: number) => {
    dpr: number;
    camera: {
        fov: number;
    };
    linear: boolean;
    flat: boolean;
    gl: {
        preserveDrawingBuffer: boolean;
    };
};
export declare const links: {
    title: string;
    link: string;
}[];
export declare const defaultPlanesZoom = 1;
export declare const defaultSphereDistance = 14;
export declare const zoomOutPlanes: {
    zoom: number;
    distance: number;
};
export declare const zoomOutSphere: {
    zoom: number;
    distance: number;
};
export declare const aboutAngles: number[];
export declare const aboutPositions: number[];
export declare const aboutRotations: number[];
export declare const aboutMobilePositions: number[];
export declare const hdrBase = "https://ruucm.github.io/shadergradient/shadergradient@1.0.0";
export declare const mainLoading: {
    meshDelay: number;
    meshDur: number;
    rotDelay: number;
    rotDur: number;
    posDelay: number;
    posDur: number;
    logoTransition: number;
    text: number;
    to: number;
};
export declare const envBasePath = "https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/";
export declare const STRIPE_BUY_YEARLY_URL = "https://buy.stripe.com/00g5kV0g553QcjC9AB";
export declare const STRIPE_BUY_MONTHLY_URL = "https://buy.stripe.com/fZe5kVd2R53QcjC7su";
export declare const STRIPE_BILLING_URL = "https://billing.stripe.com/p/login/aEU8Audql6LagDe9AA";
//# sourceMappingURL=consts.d.ts.map