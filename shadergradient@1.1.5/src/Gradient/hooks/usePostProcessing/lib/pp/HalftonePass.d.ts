import { Pass } from './Pass';
declare class HalftonePass extends Pass {
    constructor(width: any, height: any, params: any);
    render(renderer: any, writeBuffer: any, readBuffer: any): void;
    setSize(width: any, height: any): void;
    initialize(renderer: any, alpha: any, frameBufferType: any): void;
    addEventListener(): void;
    getAttributes(): any;
    getFragmentShader(): any;
    getVertexShader(): any;
    update(renderer: any, inputBuffer: any, deltaTime: any): void;
}
export { HalftonePass };
//# sourceMappingURL=HalftonePass.d.ts.map