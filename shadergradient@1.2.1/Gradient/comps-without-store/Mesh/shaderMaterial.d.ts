import * as THREE from 'three';
export declare function shaderMaterial(uniforms: {
    [name: string]: THREE.CubeTexture | THREE.Texture | Int32Array | Float32Array | THREE.Matrix4 | THREE.Matrix3 | THREE.Quaternion | THREE.Vector4 | THREE.Vector3 | THREE.Vector2 | THREE.Color | number | boolean | Array<any> | null;
}, vertexShader: string, fragmentShader: string, onInit?: (material?: THREE.MeshPhysicalMaterial) => void): {
    new (): {};
};
//# sourceMappingURL=shaderMaterial.d.ts.map