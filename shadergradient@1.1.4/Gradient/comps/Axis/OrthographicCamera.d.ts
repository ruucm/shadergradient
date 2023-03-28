import * as THREE from 'three';
import * as React from 'react';
type Props = Omit<JSX.IntrinsicElements['orthographicCamera'], 'children'> & {
    /** Registers the camera as the system default, fiber will start rendering with it */
    makeDefault?: boolean;
    /** Making it manual will stop responsiveness and you have to calculate aspect ratio yourself. */
    manual?: boolean;
    /** The contents will either follow the camera, or be hidden when filming if you pass a function */
    children?: React.ReactNode | ((texture: THREE.Texture) => React.ReactNode);
    /** Number of frames to render, Infinity */
    frames?: number;
    /** Resolution of the FBO, 256 */
    resolution?: number;
    /** Optional environment map for functional use */
    envMap?: THREE.Texture;
};
export declare const OrthographicCamera: React.ForwardRefExoticComponent<Pick<Props, "children" | "view" | "quaternion" | "visible" | "type" | "name" | "key" | "id" | "bottom" | "left" | "right" | "top" | "copy" | "onUpdate" | "scale" | "clear" | "position" | "zoom" | "add" | "translateX" | "translateY" | "translateZ" | "rotateX" | "rotateY" | "rotateZ" | "clone" | "manual" | "attach" | "args" | "uuid" | "userData" | "applyMatrix4" | "applyQuaternion" | "lookAt" | "toJSON" | "dispose" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "envMap" | "up" | "rotation" | "matrix" | "layers" | "isOrthographicCamera" | "near" | "far" | "updateProjectionMatrix" | "setViewOffset" | "clearViewOffset" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "getWorldDirection" | "updateMatrixWorld" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "translateOnAxis" | "localToWorld" | "worldToLocal" | "remove" | "removeFromParent" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "resolution" | "frames" | "makeDefault"> & React.RefAttributes<unknown>>;
export {};
//# sourceMappingURL=OrthographicCamera.d.ts.map