import {
  useCameraAnimation
} from "./chunk-AVV7TPJS.mjs";
import {
  extend,
  useThree
} from "./chunk-73SH6GTX.mjs";
import {
  three_module_exports
} from "./chunk-BT6X4JN2.mjs";
import {
  __objRest
} from "./chunk-5BEQP2BQ.mjs";

// ../../node_modules/.pnpm/camera-controls@2.9.0_three@0.169.0/node_modules/camera-controls/dist/camera-controls.module.js
var MOUSE_BUTTON = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4
};
var ACTION = Object.freeze({
  NONE: 0,
  ROTATE: 1,
  TRUCK: 2,
  OFFSET: 4,
  DOLLY: 8,
  ZOOM: 16,
  TOUCH_ROTATE: 32,
  TOUCH_TRUCK: 64,
  TOUCH_OFFSET: 128,
  TOUCH_DOLLY: 256,
  TOUCH_ZOOM: 512,
  TOUCH_DOLLY_TRUCK: 1024,
  TOUCH_DOLLY_OFFSET: 2048,
  TOUCH_DOLLY_ROTATE: 4096,
  TOUCH_ZOOM_TRUCK: 8192,
  TOUCH_ZOOM_OFFSET: 16384,
  TOUCH_ZOOM_ROTATE: 32768
});
var DOLLY_DIRECTION = {
  NONE: 0,
  IN: 1,
  OUT: -1
};
function isPerspectiveCamera(camera) {
  return camera.isPerspectiveCamera;
}
function isOrthographicCamera(camera) {
  return camera.isOrthographicCamera;
}
var PI_2 = Math.PI * 2;
var PI_HALF = Math.PI / 2;
var EPSILON = 1e-5;
var DEG2RAD = Math.PI / 180;
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function approxZero(number, error = EPSILON) {
  return Math.abs(number) < error;
}
function approxEquals(a, b, error = EPSILON) {
  return approxZero(a - b, error);
}
function roundToStep(value, step) {
  return Math.round(value / step) * step;
}
function infinityToMaxNumber(value) {
  if (isFinite(value))
    return value;
  if (value < 0)
    return -Number.MAX_VALUE;
  return Number.MAX_VALUE;
}
function maxNumberToInfinity(value) {
  if (Math.abs(value) < Number.MAX_VALUE)
    return value;
  return value * Infinity;
}
function smoothDamp(current, target, currentVelocityRef, smoothTime, maxSpeed = Infinity, deltaTime) {
  smoothTime = Math.max(1e-4, smoothTime);
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  let change = current - target;
  const originalTo = target;
  const maxChange = maxSpeed * smoothTime;
  change = clamp(change, -maxChange, maxChange);
  target = current - change;
  const temp = (currentVelocityRef.value + omega * change) * deltaTime;
  currentVelocityRef.value = (currentVelocityRef.value - omega * temp) * exp;
  let output = target + (change + temp) * exp;
  if (originalTo - current > 0 === output > originalTo) {
    output = originalTo;
    currentVelocityRef.value = (output - originalTo) / deltaTime;
  }
  return output;
}
function smoothDampVec3(current, target, currentVelocityRef, smoothTime, maxSpeed = Infinity, deltaTime, out) {
  smoothTime = Math.max(1e-4, smoothTime);
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  let targetX = target.x;
  let targetY = target.y;
  let targetZ = target.z;
  let changeX = current.x - targetX;
  let changeY = current.y - targetY;
  let changeZ = current.z - targetZ;
  const originalToX = targetX;
  const originalToY = targetY;
  const originalToZ = targetZ;
  const maxChange = maxSpeed * smoothTime;
  const maxChangeSq = maxChange * maxChange;
  const magnitudeSq = changeX * changeX + changeY * changeY + changeZ * changeZ;
  if (magnitudeSq > maxChangeSq) {
    const magnitude = Math.sqrt(magnitudeSq);
    changeX = changeX / magnitude * maxChange;
    changeY = changeY / magnitude * maxChange;
    changeZ = changeZ / magnitude * maxChange;
  }
  targetX = current.x - changeX;
  targetY = current.y - changeY;
  targetZ = current.z - changeZ;
  const tempX = (currentVelocityRef.x + omega * changeX) * deltaTime;
  const tempY = (currentVelocityRef.y + omega * changeY) * deltaTime;
  const tempZ = (currentVelocityRef.z + omega * changeZ) * deltaTime;
  currentVelocityRef.x = (currentVelocityRef.x - omega * tempX) * exp;
  currentVelocityRef.y = (currentVelocityRef.y - omega * tempY) * exp;
  currentVelocityRef.z = (currentVelocityRef.z - omega * tempZ) * exp;
  out.x = targetX + (changeX + tempX) * exp;
  out.y = targetY + (changeY + tempY) * exp;
  out.z = targetZ + (changeZ + tempZ) * exp;
  const origMinusCurrentX = originalToX - current.x;
  const origMinusCurrentY = originalToY - current.y;
  const origMinusCurrentZ = originalToZ - current.z;
  const outMinusOrigX = out.x - originalToX;
  const outMinusOrigY = out.y - originalToY;
  const outMinusOrigZ = out.z - originalToZ;
  if (origMinusCurrentX * outMinusOrigX + origMinusCurrentY * outMinusOrigY + origMinusCurrentZ * outMinusOrigZ > 0) {
    out.x = originalToX;
    out.y = originalToY;
    out.z = originalToZ;
    currentVelocityRef.x = (out.x - originalToX) / deltaTime;
    currentVelocityRef.y = (out.y - originalToY) / deltaTime;
    currentVelocityRef.z = (out.z - originalToZ) / deltaTime;
  }
  return out;
}
function extractClientCoordFromEvent(pointers, out) {
  out.set(0, 0);
  pointers.forEach((pointer) => {
    out.x += pointer.clientX;
    out.y += pointer.clientY;
  });
  out.x /= pointers.length;
  out.y /= pointers.length;
}
function notSupportedInOrthographicCamera(camera, message) {
  if (isOrthographicCamera(camera)) {
    console.warn(`${message} is not supported in OrthographicCamera`);
    return true;
  }
  return false;
}
var EventDispatcher = class {
  constructor() {
    this._listeners = {};
  }
  /**
   * Adds the specified event listener.
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  addEventListener(type, listener) {
    const listeners = this._listeners;
    if (listeners[type] === void 0)
      listeners[type] = [];
    if (listeners[type].indexOf(listener) === -1)
      listeners[type].push(listener);
  }
  /**
   * Presence of the specified event listener.
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  hasEventListener(type, listener) {
    const listeners = this._listeners;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  /**
   * Removes the specified event listener
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  removeEventListener(type, listener) {
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1)
        listenerArray.splice(index, 1);
    }
  }
  /**
   * Removes all event listeners
   * @param type event name
   * @category Methods
   */
  removeAllEventListeners(type) {
    if (!type) {
      this._listeners = {};
      return;
    }
    if (Array.isArray(this._listeners[type]))
      this._listeners[type].length = 0;
  }
  /**
   * Fire an event type.
   * @param event DispatcherEvent
   * @category Methods
   */
  dispatchEvent(event) {
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
    }
  }
};
var _a;
var VERSION = "2.9.0";
var TOUCH_DOLLY_FACTOR = 1 / 8;
var isMac = /Mac/.test((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.platform);
var THREE;
var _ORIGIN;
var _AXIS_Y;
var _AXIS_Z;
var _v2;
var _v3A;
var _v3B;
var _v3C;
var _cameraDirection;
var _xColumn;
var _yColumn;
var _zColumn;
var _deltaTarget;
var _deltaOffset;
var _sphericalA;
var _sphericalB;
var _box3A;
var _box3B;
var _sphere;
var _quaternionA;
var _quaternionB;
var _rotationMatrix;
var _raycaster;
var CameraControls = class _CameraControls extends EventDispatcher {
  /**
       * Injects THREE as the dependency. You can then proceed to use CameraControls.
       *
       * e.g
       * ```javascript
       * CameraControls.install( { THREE: THREE } );
       * ```
       *
       * Note: If you do not wish to use enter three.js to reduce file size(tree-shaking for example), make a subset to install.
       *
       * ```js
       * import {
       * 	Vector2,
       * 	Vector3,
       * 	Vector4,
       * 	Quaternion,
       * 	Matrix4,
       * 	Spherical,
       * 	Box3,
       * 	Sphere,
       * 	Raycaster,
       * 	MathUtils,
       * } from 'three';
       *
       * const subsetOfTHREE = {
       * 	Vector2   : Vector2,
       * 	Vector3   : Vector3,
       * 	Vector4   : Vector4,
       * 	Quaternion: Quaternion,
       * 	Matrix4   : Matrix4,
       * 	Spherical : Spherical,
       * 	Box3      : Box3,
       * 	Sphere    : Sphere,
       * 	Raycaster : Raycaster,
       * };
  
       * CameraControls.install( { THREE: subsetOfTHREE } );
       * ```
       * @category Statics
       */
  static install(libs) {
    THREE = libs.THREE;
    _ORIGIN = Object.freeze(new THREE.Vector3(0, 0, 0));
    _AXIS_Y = Object.freeze(new THREE.Vector3(0, 1, 0));
    _AXIS_Z = Object.freeze(new THREE.Vector3(0, 0, 1));
    _v2 = new THREE.Vector2();
    _v3A = new THREE.Vector3();
    _v3B = new THREE.Vector3();
    _v3C = new THREE.Vector3();
    _cameraDirection = new THREE.Vector3();
    _xColumn = new THREE.Vector3();
    _yColumn = new THREE.Vector3();
    _zColumn = new THREE.Vector3();
    _deltaTarget = new THREE.Vector3();
    _deltaOffset = new THREE.Vector3();
    _sphericalA = new THREE.Spherical();
    _sphericalB = new THREE.Spherical();
    _box3A = new THREE.Box3();
    _box3B = new THREE.Box3();
    _sphere = new THREE.Sphere();
    _quaternionA = new THREE.Quaternion();
    _quaternionB = new THREE.Quaternion();
    _rotationMatrix = new THREE.Matrix4();
    _raycaster = new THREE.Raycaster();
  }
  /**
   * list all ACTIONs
   * @category Statics
   */
  static get ACTION() {
    return ACTION;
  }
  /**
   * Creates a `CameraControls` instance.
   *
   * Note:
   * You **must install** three.js before using camera-controls. see [#install](#install)
   * Not doing so will lead to runtime errors (`undefined` references to THREE).
   *
   * e.g.
   * ```
   * CameraControls.install( { THREE } );
   * const cameraControls = new CameraControls( camera, domElement );
   * ```
   *
   * @param camera A `THREE.PerspectiveCamera` or `THREE.OrthographicCamera` to be controlled.
   * @param domElement A `HTMLElement` for the draggable area, usually `renderer.domElement`.
   * @category Constructor
   */
  constructor(camera, domElement) {
    super();
    this.minPolarAngle = 0;
    this.maxPolarAngle = Math.PI;
    this.minAzimuthAngle = -Infinity;
    this.maxAzimuthAngle = Infinity;
    this.minDistance = Number.EPSILON;
    this.maxDistance = Infinity;
    this.infinityDolly = false;
    this.minZoom = 0.01;
    this.maxZoom = Infinity;
    this.smoothTime = 0.25;
    this.draggingSmoothTime = 0.125;
    this.maxSpeed = Infinity;
    this.azimuthRotateSpeed = 1;
    this.polarRotateSpeed = 1;
    this.dollySpeed = 1;
    this.dollyDragInverted = false;
    this.truckSpeed = 2;
    this.dollyToCursor = false;
    this.dragToOffset = false;
    this.verticalDragToForward = false;
    this.boundaryFriction = 0;
    this.restThreshold = 0.01;
    this.colliderMeshes = [];
    this.cancel = () => {
    };
    this._enabled = true;
    this._state = ACTION.NONE;
    this._viewport = null;
    this._changedDolly = 0;
    this._changedZoom = 0;
    this._hasRested = true;
    this._boundaryEnclosesCamera = false;
    this._needsUpdate = true;
    this._updatedLastTime = false;
    this._elementRect = new DOMRect();
    this._isDragging = false;
    this._dragNeedsUpdate = true;
    this._activePointers = [];
    this._lockedPointer = null;
    this._interactiveArea = new DOMRect(0, 0, 1, 1);
    this._isUserControllingRotate = false;
    this._isUserControllingDolly = false;
    this._isUserControllingTruck = false;
    this._isUserControllingOffset = false;
    this._isUserControllingZoom = false;
    this._lastDollyDirection = DOLLY_DIRECTION.NONE;
    this._thetaVelocity = { value: 0 };
    this._phiVelocity = { value: 0 };
    this._radiusVelocity = { value: 0 };
    this._targetVelocity = new THREE.Vector3();
    this._focalOffsetVelocity = new THREE.Vector3();
    this._zoomVelocity = { value: 0 };
    this._truckInternal = (deltaX, deltaY, dragToOffset) => {
      let truckX;
      let pedestalY;
      if (isPerspectiveCamera(this._camera)) {
        const offset = _v3A.copy(this._camera.position).sub(this._target);
        const fov = this._camera.getEffectiveFOV() * DEG2RAD;
        const targetDistance = offset.length() * Math.tan(fov * 0.5);
        truckX = this.truckSpeed * deltaX * targetDistance / this._elementRect.height;
        pedestalY = this.truckSpeed * deltaY * targetDistance / this._elementRect.height;
      } else if (isOrthographicCamera(this._camera)) {
        const camera2 = this._camera;
        truckX = deltaX * (camera2.right - camera2.left) / camera2.zoom / this._elementRect.width;
        pedestalY = deltaY * (camera2.top - camera2.bottom) / camera2.zoom / this._elementRect.height;
      } else {
        return;
      }
      if (this.verticalDragToForward) {
        dragToOffset ? this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y, this._focalOffsetEnd.z, true) : this.truck(truckX, 0, true);
        this.forward(-pedestalY, true);
      } else {
        dragToOffset ? this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y + pedestalY, this._focalOffsetEnd.z, true) : this.truck(truckX, pedestalY, true);
      }
    };
    this._rotateInternal = (deltaX, deltaY) => {
      const theta = PI_2 * this.azimuthRotateSpeed * deltaX / this._elementRect.height;
      const phi = PI_2 * this.polarRotateSpeed * deltaY / this._elementRect.height;
      this.rotate(theta, phi, true);
    };
    this._dollyInternal = (delta, x, y) => {
      const dollyScale = Math.pow(0.95, -delta * this.dollySpeed);
      const lastDistance = this._sphericalEnd.radius;
      const distance = this._sphericalEnd.radius * dollyScale;
      const clampedDistance = clamp(distance, this.minDistance, this.maxDistance);
      const overflowedDistance = clampedDistance - distance;
      if (this.infinityDolly && this.dollyToCursor) {
        this._dollyToNoClamp(distance, true);
      } else if (this.infinityDolly && !this.dollyToCursor) {
        this.dollyInFixed(overflowedDistance, true);
        this._dollyToNoClamp(clampedDistance, true);
      } else {
        this._dollyToNoClamp(clampedDistance, true);
      }
      if (this.dollyToCursor) {
        this._changedDolly += (this.infinityDolly ? distance : clampedDistance) - lastDistance;
        this._dollyControlCoord.set(x, y);
      }
      this._lastDollyDirection = Math.sign(-delta);
    };
    this._zoomInternal = (delta, x, y) => {
      const zoomScale = Math.pow(0.95, delta * this.dollySpeed);
      const lastZoom = this._zoom;
      const zoom = this._zoom * zoomScale;
      this.zoomTo(zoom, true);
      if (this.dollyToCursor) {
        this._changedZoom += zoom - lastZoom;
        this._dollyControlCoord.set(x, y);
      }
    };
    if (typeof THREE === "undefined") {
      console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information.");
    }
    this._camera = camera;
    this._yAxisUpSpace = new THREE.Quaternion().setFromUnitVectors(this._camera.up, _AXIS_Y);
    this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert();
    this._state = ACTION.NONE;
    this._target = new THREE.Vector3();
    this._targetEnd = this._target.clone();
    this._focalOffset = new THREE.Vector3();
    this._focalOffsetEnd = this._focalOffset.clone();
    this._spherical = new THREE.Spherical().setFromVector3(_v3A.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace));
    this._sphericalEnd = this._spherical.clone();
    this._lastDistance = this._spherical.radius;
    this._zoom = this._camera.zoom;
    this._zoomEnd = this._zoom;
    this._lastZoom = this._zoom;
    this._nearPlaneCorners = [
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3()
    ];
    this._updateNearPlaneCorners();
    this._boundary = new THREE.Box3(new THREE.Vector3(-Infinity, -Infinity, -Infinity), new THREE.Vector3(Infinity, Infinity, Infinity));
    this._cameraUp0 = this._camera.up.clone();
    this._target0 = this._target.clone();
    this._position0 = this._camera.position.clone();
    this._zoom0 = this._zoom;
    this._focalOffset0 = this._focalOffset.clone();
    this._dollyControlCoord = new THREE.Vector2();
    this.mouseButtons = {
      left: ACTION.ROTATE,
      middle: ACTION.DOLLY,
      right: ACTION.TRUCK,
      wheel: isPerspectiveCamera(this._camera) ? ACTION.DOLLY : isOrthographicCamera(this._camera) ? ACTION.ZOOM : ACTION.NONE
    };
    this.touches = {
      one: ACTION.TOUCH_ROTATE,
      two: isPerspectiveCamera(this._camera) ? ACTION.TOUCH_DOLLY_TRUCK : isOrthographicCamera(this._camera) ? ACTION.TOUCH_ZOOM_TRUCK : ACTION.NONE,
      three: ACTION.TOUCH_TRUCK
    };
    const dragStartPosition = new THREE.Vector2();
    const lastDragPosition = new THREE.Vector2();
    const dollyStart = new THREE.Vector2();
    const onPointerDown = (event) => {
      if (!this._enabled || !this._domElement)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const elRect = this._domElement.getBoundingClientRect();
        const left = event.clientX / elRect.width;
        const top = event.clientY / elRect.height;
        if (left < this._interactiveArea.left || left > this._interactiveArea.right || top < this._interactiveArea.top || top > this._interactiveArea.bottom)
          return;
      }
      const mouseButton = event.pointerType !== "mouse" ? null : (event.buttons & MOUSE_BUTTON.LEFT) === MOUSE_BUTTON.LEFT ? MOUSE_BUTTON.LEFT : (event.buttons & MOUSE_BUTTON.MIDDLE) === MOUSE_BUTTON.MIDDLE ? MOUSE_BUTTON.MIDDLE : (event.buttons & MOUSE_BUTTON.RIGHT) === MOUSE_BUTTON.RIGHT ? MOUSE_BUTTON.RIGHT : null;
      if (mouseButton !== null) {
        const zombiePointer = this._findPointerByMouseButton(mouseButton);
        zombiePointer && this._disposePointer(zombiePointer);
      }
      if ((event.buttons & MOUSE_BUTTON.LEFT) === MOUSE_BUTTON.LEFT && this._lockedPointer)
        return;
      const pointer = {
        pointerId: event.pointerId,
        clientX: event.clientX,
        clientY: event.clientY,
        deltaX: 0,
        deltaY: 0,
        mouseButton
      };
      this._activePointers.push(pointer);
      this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
      this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
      this._domElement.ownerDocument.addEventListener("pointermove", onPointerMove, { passive: false });
      this._domElement.ownerDocument.addEventListener("pointerup", onPointerUp);
      this._isDragging = true;
      startDragging(event);
    };
    const onPointerMove = (event) => {
      if (event.cancelable)
        event.preventDefault();
      const pointerId = event.pointerId;
      const pointer = this._lockedPointer || this._findPointerById(pointerId);
      if (!pointer)
        return;
      pointer.clientX = event.clientX;
      pointer.clientY = event.clientY;
      pointer.deltaX = event.movementX;
      pointer.deltaY = event.movementY;
      this._state = 0;
      if (event.pointerType === "touch") {
        switch (this._activePointers.length) {
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
      } else {
        if (!this._isDragging && this._lockedPointer || this._isDragging && (event.buttons & MOUSE_BUTTON.LEFT) === MOUSE_BUTTON.LEFT) {
          this._state = this._state | this.mouseButtons.left;
        }
        if (this._isDragging && (event.buttons & MOUSE_BUTTON.MIDDLE) === MOUSE_BUTTON.MIDDLE) {
          this._state = this._state | this.mouseButtons.middle;
        }
        if (this._isDragging && (event.buttons & MOUSE_BUTTON.RIGHT) === MOUSE_BUTTON.RIGHT) {
          this._state = this._state | this.mouseButtons.right;
        }
      }
      dragging();
    };
    const onPointerUp = (event) => {
      const pointer = this._findPointerById(event.pointerId);
      if (pointer && pointer === this._lockedPointer)
        return;
      pointer && this._disposePointer(pointer);
      if (event.pointerType === "touch") {
        switch (this._activePointers.length) {
          case 0:
            this._state = ACTION.NONE;
            break;
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
      } else {
        this._state = ACTION.NONE;
      }
      endDragging();
    };
    let lastScrollTimeStamp = -1;
    const onMouseWheel = (event) => {
      if (!this._domElement)
        return;
      if (!this._enabled || this.mouseButtons.wheel === ACTION.NONE)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const elRect = this._domElement.getBoundingClientRect();
        const left = event.clientX / elRect.width;
        const top = event.clientY / elRect.height;
        if (left < this._interactiveArea.left || left > this._interactiveArea.right || top < this._interactiveArea.top || top > this._interactiveArea.bottom)
          return;
      }
      event.preventDefault();
      if (this.dollyToCursor || this.mouseButtons.wheel === ACTION.ROTATE || this.mouseButtons.wheel === ACTION.TRUCK) {
        const now = performance.now();
        if (lastScrollTimeStamp - now < 1e3)
          this._getClientRect(this._elementRect);
        lastScrollTimeStamp = now;
      }
      const deltaYFactor = isMac ? -1 : -3;
      const delta = event.deltaMode === 1 ? event.deltaY / deltaYFactor : event.deltaY / (deltaYFactor * 10);
      const x = this.dollyToCursor ? (event.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
      const y = this.dollyToCursor ? (event.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
      switch (this.mouseButtons.wheel) {
        case ACTION.ROTATE: {
          this._rotateInternal(event.deltaX, event.deltaY);
          this._isUserControllingRotate = true;
          break;
        }
        case ACTION.TRUCK: {
          this._truckInternal(event.deltaX, event.deltaY, false);
          this._isUserControllingTruck = true;
          break;
        }
        case ACTION.OFFSET: {
          this._truckInternal(event.deltaX, event.deltaY, true);
          this._isUserControllingOffset = true;
          break;
        }
        case ACTION.DOLLY: {
          this._dollyInternal(-delta, x, y);
          this._isUserControllingDolly = true;
          break;
        }
        case ACTION.ZOOM: {
          this._zoomInternal(-delta, x, y);
          this._isUserControllingZoom = true;
          break;
        }
      }
      this.dispatchEvent({ type: "control" });
    };
    const onContextMenu = (event) => {
      if (!this._domElement || !this._enabled)
        return;
      if (this.mouseButtons.right === _CameraControls.ACTION.NONE) {
        const pointerId = event instanceof PointerEvent ? event.pointerId : 0;
        const pointer = this._findPointerById(pointerId);
        pointer && this._disposePointer(pointer);
        this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
        this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
        return;
      }
      event.preventDefault();
    };
    const startDragging = (event) => {
      if (!this._enabled)
        return;
      extractClientCoordFromEvent(this._activePointers, _v2);
      this._getClientRect(this._elementRect);
      dragStartPosition.copy(_v2);
      lastDragPosition.copy(_v2);
      const isMultiTouch = this._activePointers.length >= 2;
      if (isMultiTouch) {
        const dx = _v2.x - this._activePointers[1].clientX;
        const dy = _v2.y - this._activePointers[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        dollyStart.set(0, distance);
        const x = (this._activePointers[0].clientX + this._activePointers[1].clientX) * 0.5;
        const y = (this._activePointers[0].clientY + this._activePointers[1].clientY) * 0.5;
        lastDragPosition.set(x, y);
      }
      this._state = 0;
      if (!event) {
        if (this._lockedPointer)
          this._state = this._state | this.mouseButtons.left;
      } else if ("pointerType" in event && event.pointerType === "touch") {
        switch (this._activePointers.length) {
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
      } else {
        if (!this._lockedPointer && (event.buttons & MOUSE_BUTTON.LEFT) === MOUSE_BUTTON.LEFT) {
          this._state = this._state | this.mouseButtons.left;
        }
        if ((event.buttons & MOUSE_BUTTON.MIDDLE) === MOUSE_BUTTON.MIDDLE) {
          this._state = this._state | this.mouseButtons.middle;
        }
        if ((event.buttons & MOUSE_BUTTON.RIGHT) === MOUSE_BUTTON.RIGHT) {
          this._state = this._state | this.mouseButtons.right;
        }
      }
      if ((this._state & ACTION.ROTATE) === ACTION.ROTATE || (this._state & ACTION.TOUCH_ROTATE) === ACTION.TOUCH_ROTATE || (this._state & ACTION.TOUCH_DOLLY_ROTATE) === ACTION.TOUCH_DOLLY_ROTATE || (this._state & ACTION.TOUCH_ZOOM_ROTATE) === ACTION.TOUCH_ZOOM_ROTATE) {
        this._sphericalEnd.theta = this._spherical.theta;
        this._sphericalEnd.phi = this._spherical.phi;
        this._thetaVelocity.value = 0;
        this._phiVelocity.value = 0;
      }
      if ((this._state & ACTION.TRUCK) === ACTION.TRUCK || (this._state & ACTION.TOUCH_TRUCK) === ACTION.TOUCH_TRUCK || (this._state & ACTION.TOUCH_DOLLY_TRUCK) === ACTION.TOUCH_DOLLY_TRUCK || (this._state & ACTION.TOUCH_ZOOM_TRUCK) === ACTION.TOUCH_ZOOM_TRUCK) {
        this._targetEnd.copy(this._target);
        this._targetVelocity.set(0, 0, 0);
      }
      if ((this._state & ACTION.DOLLY) === ACTION.DOLLY || (this._state & ACTION.TOUCH_DOLLY) === ACTION.TOUCH_DOLLY || (this._state & ACTION.TOUCH_DOLLY_TRUCK) === ACTION.TOUCH_DOLLY_TRUCK || (this._state & ACTION.TOUCH_DOLLY_OFFSET) === ACTION.TOUCH_DOLLY_OFFSET || (this._state & ACTION.TOUCH_DOLLY_ROTATE) === ACTION.TOUCH_DOLLY_ROTATE) {
        this._sphericalEnd.radius = this._spherical.radius;
        this._radiusVelocity.value = 0;
      }
      if ((this._state & ACTION.ZOOM) === ACTION.ZOOM || (this._state & ACTION.TOUCH_ZOOM) === ACTION.TOUCH_ZOOM || (this._state & ACTION.TOUCH_ZOOM_TRUCK) === ACTION.TOUCH_ZOOM_TRUCK || (this._state & ACTION.TOUCH_ZOOM_OFFSET) === ACTION.TOUCH_ZOOM_OFFSET || (this._state & ACTION.TOUCH_ZOOM_ROTATE) === ACTION.TOUCH_ZOOM_ROTATE) {
        this._zoomEnd = this._zoom;
        this._zoomVelocity.value = 0;
      }
      if ((this._state & ACTION.OFFSET) === ACTION.OFFSET || (this._state & ACTION.TOUCH_OFFSET) === ACTION.TOUCH_OFFSET || (this._state & ACTION.TOUCH_DOLLY_OFFSET) === ACTION.TOUCH_DOLLY_OFFSET || (this._state & ACTION.TOUCH_ZOOM_OFFSET) === ACTION.TOUCH_ZOOM_OFFSET) {
        this._focalOffsetEnd.copy(this._focalOffset);
        this._focalOffsetVelocity.set(0, 0, 0);
      }
      this.dispatchEvent({ type: "controlstart" });
    };
    const dragging = () => {
      if (!this._enabled || !this._dragNeedsUpdate)
        return;
      this._dragNeedsUpdate = false;
      extractClientCoordFromEvent(this._activePointers, _v2);
      const isPointerLockActive = this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement;
      const lockedPointer = isPointerLockActive ? this._lockedPointer || this._activePointers[0] : null;
      const deltaX = lockedPointer ? -lockedPointer.deltaX : lastDragPosition.x - _v2.x;
      const deltaY = lockedPointer ? -lockedPointer.deltaY : lastDragPosition.y - _v2.y;
      lastDragPosition.copy(_v2);
      if ((this._state & ACTION.ROTATE) === ACTION.ROTATE || (this._state & ACTION.TOUCH_ROTATE) === ACTION.TOUCH_ROTATE || (this._state & ACTION.TOUCH_DOLLY_ROTATE) === ACTION.TOUCH_DOLLY_ROTATE || (this._state & ACTION.TOUCH_ZOOM_ROTATE) === ACTION.TOUCH_ZOOM_ROTATE) {
        this._rotateInternal(deltaX, deltaY);
        this._isUserControllingRotate = true;
      }
      if ((this._state & ACTION.DOLLY) === ACTION.DOLLY || (this._state & ACTION.ZOOM) === ACTION.ZOOM) {
        const dollyX = this.dollyToCursor ? (dragStartPosition.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
        const dollyY = this.dollyToCursor ? (dragStartPosition.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
        const dollyDirection = this.dollyDragInverted ? -1 : 1;
        if ((this._state & ACTION.DOLLY) === ACTION.DOLLY) {
          this._dollyInternal(dollyDirection * deltaY * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
          this._isUserControllingDolly = true;
        } else {
          this._zoomInternal(dollyDirection * deltaY * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
          this._isUserControllingZoom = true;
        }
      }
      if ((this._state & ACTION.TOUCH_DOLLY) === ACTION.TOUCH_DOLLY || (this._state & ACTION.TOUCH_ZOOM) === ACTION.TOUCH_ZOOM || (this._state & ACTION.TOUCH_DOLLY_TRUCK) === ACTION.TOUCH_DOLLY_TRUCK || (this._state & ACTION.TOUCH_ZOOM_TRUCK) === ACTION.TOUCH_ZOOM_TRUCK || (this._state & ACTION.TOUCH_DOLLY_OFFSET) === ACTION.TOUCH_DOLLY_OFFSET || (this._state & ACTION.TOUCH_ZOOM_OFFSET) === ACTION.TOUCH_ZOOM_OFFSET || (this._state & ACTION.TOUCH_DOLLY_ROTATE) === ACTION.TOUCH_DOLLY_ROTATE || (this._state & ACTION.TOUCH_ZOOM_ROTATE) === ACTION.TOUCH_ZOOM_ROTATE) {
        const dx = _v2.x - this._activePointers[1].clientX;
        const dy = _v2.y - this._activePointers[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const dollyDelta = dollyStart.y - distance;
        dollyStart.set(0, distance);
        const dollyX = this.dollyToCursor ? (lastDragPosition.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
        const dollyY = this.dollyToCursor ? (lastDragPosition.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
        if ((this._state & ACTION.TOUCH_DOLLY) === ACTION.TOUCH_DOLLY || (this._state & ACTION.TOUCH_DOLLY_ROTATE) === ACTION.TOUCH_DOLLY_ROTATE || (this._state & ACTION.TOUCH_DOLLY_TRUCK) === ACTION.TOUCH_DOLLY_TRUCK || (this._state & ACTION.TOUCH_DOLLY_OFFSET) === ACTION.TOUCH_DOLLY_OFFSET) {
          this._dollyInternal(dollyDelta * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
          this._isUserControllingDolly = true;
        } else {
          this._zoomInternal(dollyDelta * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
          this._isUserControllingZoom = true;
        }
      }
      if ((this._state & ACTION.TRUCK) === ACTION.TRUCK || (this._state & ACTION.TOUCH_TRUCK) === ACTION.TOUCH_TRUCK || (this._state & ACTION.TOUCH_DOLLY_TRUCK) === ACTION.TOUCH_DOLLY_TRUCK || (this._state & ACTION.TOUCH_ZOOM_TRUCK) === ACTION.TOUCH_ZOOM_TRUCK) {
        this._truckInternal(deltaX, deltaY, false);
        this._isUserControllingTruck = true;
      }
      if ((this._state & ACTION.OFFSET) === ACTION.OFFSET || (this._state & ACTION.TOUCH_OFFSET) === ACTION.TOUCH_OFFSET || (this._state & ACTION.TOUCH_DOLLY_OFFSET) === ACTION.TOUCH_DOLLY_OFFSET || (this._state & ACTION.TOUCH_ZOOM_OFFSET) === ACTION.TOUCH_ZOOM_OFFSET) {
        this._truckInternal(deltaX, deltaY, true);
        this._isUserControllingOffset = true;
      }
      this.dispatchEvent({ type: "control" });
    };
    const endDragging = () => {
      extractClientCoordFromEvent(this._activePointers, _v2);
      lastDragPosition.copy(_v2);
      this._dragNeedsUpdate = false;
      if (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) {
        this._isDragging = false;
      }
      if (this._activePointers.length === 0 && this._domElement) {
        this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
        this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
        this.dispatchEvent({ type: "controlend" });
      }
    };
    this.lockPointer = () => {
      if (!this._enabled || !this._domElement)
        return;
      this.cancel();
      this._lockedPointer = {
        pointerId: -1,
        clientX: 0,
        clientY: 0,
        deltaX: 0,
        deltaY: 0,
        mouseButton: null
      };
      this._activePointers.push(this._lockedPointer);
      this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
      this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
      this._domElement.requestPointerLock();
      this._domElement.ownerDocument.addEventListener("pointerlockchange", onPointerLockChange);
      this._domElement.ownerDocument.addEventListener("pointerlockerror", onPointerLockError);
      this._domElement.ownerDocument.addEventListener("pointermove", onPointerMove, { passive: false });
      this._domElement.ownerDocument.addEventListener("pointerup", onPointerUp);
      startDragging();
    };
    this.unlockPointer = () => {
      var _a2, _b, _c;
      if (this._lockedPointer !== null) {
        this._disposePointer(this._lockedPointer);
        this._lockedPointer = null;
      }
      (_a2 = this._domElement) === null || _a2 === void 0 ? void 0 : _a2.ownerDocument.exitPointerLock();
      (_b = this._domElement) === null || _b === void 0 ? void 0 : _b.ownerDocument.removeEventListener("pointerlockchange", onPointerLockChange);
      (_c = this._domElement) === null || _c === void 0 ? void 0 : _c.ownerDocument.removeEventListener("pointerlockerror", onPointerLockError);
      this.cancel();
    };
    const onPointerLockChange = () => {
      const isPointerLockActive = this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement;
      if (!isPointerLockActive)
        this.unlockPointer();
    };
    const onPointerLockError = () => {
      this.unlockPointer();
    };
    this._addAllEventListeners = (domElement2) => {
      this._domElement = domElement2;
      this._domElement.style.touchAction = "none";
      this._domElement.style.userSelect = "none";
      this._domElement.style.webkitUserSelect = "none";
      this._domElement.addEventListener("pointerdown", onPointerDown);
      this._domElement.addEventListener("pointercancel", onPointerUp);
      this._domElement.addEventListener("wheel", onMouseWheel, { passive: false });
      this._domElement.addEventListener("contextmenu", onContextMenu);
    };
    this._removeAllEventListeners = () => {
      if (!this._domElement)
        return;
      this._domElement.style.touchAction = "";
      this._domElement.style.userSelect = "";
      this._domElement.style.webkitUserSelect = "";
      this._domElement.removeEventListener("pointerdown", onPointerDown);
      this._domElement.removeEventListener("pointercancel", onPointerUp);
      this._domElement.removeEventListener("wheel", onMouseWheel, { passive: false });
      this._domElement.removeEventListener("contextmenu", onContextMenu);
      this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
      this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
      this._domElement.ownerDocument.removeEventListener("pointerlockchange", onPointerLockChange);
      this._domElement.ownerDocument.removeEventListener("pointerlockerror", onPointerLockError);
    };
    this.cancel = () => {
      if (this._state === ACTION.NONE)
        return;
      this._state = ACTION.NONE;
      this._activePointers.length = 0;
      endDragging();
    };
    if (domElement)
      this.connect(domElement);
    this.update(0);
  }
  /**
   * The camera to be controlled
   * @category Properties
   */
  get camera() {
    return this._camera;
  }
  set camera(camera) {
    this._camera = camera;
    this.updateCameraUp();
    this._camera.updateProjectionMatrix();
    this._updateNearPlaneCorners();
    this._needsUpdate = true;
  }
  /**
   * Whether or not the controls are enabled.
   * `false` to disable user dragging/touch-move, but all methods works.
   * @category Properties
   */
  get enabled() {
    return this._enabled;
  }
  set enabled(enabled) {
    this._enabled = enabled;
    if (!this._domElement)
      return;
    if (enabled) {
      this._domElement.style.touchAction = "none";
      this._domElement.style.userSelect = "none";
      this._domElement.style.webkitUserSelect = "none";
    } else {
      this.cancel();
      this._domElement.style.touchAction = "";
      this._domElement.style.userSelect = "";
      this._domElement.style.webkitUserSelect = "";
    }
  }
  /**
   * Returns `true` if the controls are active updating.
   * readonly value.
   * @category Properties
   */
  get active() {
    return !this._hasRested;
  }
  /**
   * Getter for the current `ACTION`.
   * readonly value.
   * @category Properties
   */
  get currentAction() {
    return this._state;
  }
  /**
   * get/set Current distance.
   * @category Properties
   */
  get distance() {
    return this._spherical.radius;
  }
  set distance(distance) {
    if (this._spherical.radius === distance && this._sphericalEnd.radius === distance)
      return;
    this._spherical.radius = distance;
    this._sphericalEnd.radius = distance;
    this._needsUpdate = true;
  }
  // horizontal angle
  /**
   * get/set the azimuth angle (horizontal) in radians.
   * Every 360 degrees turn is added to `.azimuthAngle` value, which is accumulative.
   * @category Properties
   */
  get azimuthAngle() {
    return this._spherical.theta;
  }
  set azimuthAngle(azimuthAngle) {
    if (this._spherical.theta === azimuthAngle && this._sphericalEnd.theta === azimuthAngle)
      return;
    this._spherical.theta = azimuthAngle;
    this._sphericalEnd.theta = azimuthAngle;
    this._needsUpdate = true;
  }
  // vertical angle
  /**
   * get/set the polar angle (vertical) in radians.
   * @category Properties
   */
  get polarAngle() {
    return this._spherical.phi;
  }
  set polarAngle(polarAngle) {
    if (this._spherical.phi === polarAngle && this._sphericalEnd.phi === polarAngle)
      return;
    this._spherical.phi = polarAngle;
    this._sphericalEnd.phi = polarAngle;
    this._needsUpdate = true;
  }
  /**
   * Whether camera position should be enclosed in the boundary or not.
   * @category Properties
   */
  get boundaryEnclosesCamera() {
    return this._boundaryEnclosesCamera;
  }
  set boundaryEnclosesCamera(boundaryEnclosesCamera) {
    this._boundaryEnclosesCamera = boundaryEnclosesCamera;
    this._needsUpdate = true;
  }
  /**
   * Set drag-start, touches and wheel enable area in the domElement.
   * each values are between `0` and `1` inclusive, where `0` is left/top and `1` is right/bottom of the screen.
   * e.g. `{ x: 0, y: 0, width: 1, height: 1 }` for entire area.
   * @category Properties
   */
  set interactiveArea(interactiveArea) {
    this._interactiveArea.width = clamp(interactiveArea.width, 0, 1);
    this._interactiveArea.height = clamp(interactiveArea.height, 0, 1);
    this._interactiveArea.x = clamp(interactiveArea.x, 0, 1 - this._interactiveArea.width);
    this._interactiveArea.y = clamp(interactiveArea.y, 0, 1 - this._interactiveArea.height);
  }
  /**
   * Adds the specified event listener.
   * Applicable event types (which is `K`) are:
   * | Event name          | Timing |
   * | ------------------- | ------ |
   * | `'controlstart'`    | When the user starts to control the camera via mouse / touches. ¹ |
   * | `'control'`         | When the user controls the camera (dragging). |
   * | `'controlend'`      | When the user ends to control the camera. ¹ |
   * | `'transitionstart'` | When any kind of transition starts, either user control or using a method with `enableTransition = true` |
   * | `'update'`          | When the camera position is updated. |
   * | `'wake'`            | When the camera starts moving. |
   * | `'rest'`            | When the camera movement is below `.restThreshold` ². |
   * | `'sleep'`           | When the camera end moving. |
   *
   * 1. `mouseButtons.wheel` (Mouse wheel control) does not emit `'controlstart'` and `'controlend'`. `mouseButtons.wheel` uses scroll-event internally, and scroll-event happens intermittently. That means "start" and "end" cannot be detected.
   * 2. Due to damping, `sleep` will usually fire a few seconds after the camera _appears_ to have stopped moving. If you want to do something (e.g. enable UI, perform another transition) at the point when the camera has stopped, you probably want the `rest` event. This can be fine tuned using the `.restThreshold` parameter. See the [Rest and Sleep Example](https://yomotsu.github.io/camera-controls/examples/rest-and-sleep.html).
   *
   * e.g.
   * ```
   * cameraControl.addEventListener( 'controlstart', myCallbackFunction );
   * ```
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  addEventListener(type, listener) {
    super.addEventListener(type, listener);
  }
  /**
   * Removes the specified event listener
   * e.g.
   * ```
   * cameraControl.addEventListener( 'controlstart', myCallbackFunction );
   * ```
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  removeEventListener(type, listener) {
    super.removeEventListener(type, listener);
  }
  /**
   * Rotate azimuthal angle(horizontal) and polar angle(vertical).
   * Every value is added to the current value.
   * @param azimuthAngle Azimuth rotate angle. In radian.
   * @param polarAngle Polar rotate angle. In radian.
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  rotate(azimuthAngle, polarAngle, enableTransition = false) {
    return this.rotateTo(this._sphericalEnd.theta + azimuthAngle, this._sphericalEnd.phi + polarAngle, enableTransition);
  }
  /**
   * Rotate azimuthal angle(horizontal) to the given angle and keep the same polar angle(vertical) target.
   *
   * e.g.
   * ```
   * cameraControls.rotateAzimuthTo( 30 * THREE.MathUtils.DEG2RAD, true );
   * ```
   * @param azimuthAngle Azimuth rotate angle. In radian.
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  rotateAzimuthTo(azimuthAngle, enableTransition = false) {
    return this.rotateTo(azimuthAngle, this._sphericalEnd.phi, enableTransition);
  }
  /**
   * Rotate polar angle(vertical) to the given angle and keep the same azimuthal angle(horizontal) target.
   *
   * e.g.
   * ```
   * cameraControls.rotatePolarTo( 30 * THREE.MathUtils.DEG2RAD, true );
   * ```
   * @param polarAngle Polar rotate angle. In radian.
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  rotatePolarTo(polarAngle, enableTransition = false) {
    return this.rotateTo(this._sphericalEnd.theta, polarAngle, enableTransition);
  }
  /**
   * Rotate azimuthal angle(horizontal) and polar angle(vertical) to the given angle.
   * Camera view will rotate over the orbit pivot absolutely:
   *
   * azimuthAngle
   * ```
   *       0º
   *         \
   * 90º -----+----- -90º
   *           \
   *           180º
   * ```
   * | direction | angle                  |
   * | --------- | ---------------------- |
   * | front     | 0º                     |
   * | left      | 90º (`Math.PI / 2`)    |
   * | right     | -90º (`- Math.PI / 2`) |
   * | back      | 180º (`Math.PI`)       |
   *
   * polarAngle
   * ```
   *     180º
   *      |
   *      90º
   *      |
   *      0º
   * ```
   * | direction            | angle                  |
   * | -------------------- | ---------------------- |
   * | top/sky              | 180º (`Math.PI`)       |
   * | horizontal from view | 90º (`Math.PI / 2`)    |
   * | bottom/floor         | 0º                     |
   *
   * @param azimuthAngle Azimuth rotate angle to. In radian.
   * @param polarAngle Polar rotate angle to. In radian.
   * @param enableTransition  Whether to move smoothly or immediately
   * @category Methods
   */
  rotateTo(azimuthAngle, polarAngle, enableTransition = false) {
    this._isUserControllingRotate = false;
    const theta = clamp(azimuthAngle, this.minAzimuthAngle, this.maxAzimuthAngle);
    const phi = clamp(polarAngle, this.minPolarAngle, this.maxPolarAngle);
    this._sphericalEnd.theta = theta;
    this._sphericalEnd.phi = phi;
    this._sphericalEnd.makeSafe();
    this._needsUpdate = true;
    if (!enableTransition) {
      this._spherical.theta = this._sphericalEnd.theta;
      this._spherical.phi = this._sphericalEnd.phi;
    }
    const resolveImmediately = !enableTransition || approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * Dolly in/out camera position.
   * @param distance Distance of dollyIn. Negative number for dollyOut.
   * @param enableTransition Whether to move smoothly or immediately.
   * @category Methods
   */
  dolly(distance, enableTransition = false) {
    return this.dollyTo(this._sphericalEnd.radius - distance, enableTransition);
  }
  /**
   * Dolly in/out camera position to given distance.
   * @param distance Distance of dolly.
   * @param enableTransition Whether to move smoothly or immediately.
   * @category Methods
   */
  dollyTo(distance, enableTransition = false) {
    this._isUserControllingDolly = false;
    this._lastDollyDirection = DOLLY_DIRECTION.NONE;
    this._changedDolly = 0;
    return this._dollyToNoClamp(clamp(distance, this.minDistance, this.maxDistance), enableTransition);
  }
  _dollyToNoClamp(distance, enableTransition = false) {
    const lastRadius = this._sphericalEnd.radius;
    const hasCollider = this.colliderMeshes.length >= 1;
    if (hasCollider) {
      const maxDistanceByCollisionTest = this._collisionTest();
      const isCollided = approxEquals(maxDistanceByCollisionTest, this._spherical.radius);
      const isDollyIn = lastRadius > distance;
      if (!isDollyIn && isCollided)
        return Promise.resolve();
      this._sphericalEnd.radius = Math.min(distance, maxDistanceByCollisionTest);
    } else {
      this._sphericalEnd.radius = distance;
    }
    this._needsUpdate = true;
    if (!enableTransition) {
      this._spherical.radius = this._sphericalEnd.radius;
    }
    const resolveImmediately = !enableTransition || approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * Dolly in, but does not change the distance between the target and the camera, and moves the target position instead.
   * Specify a negative value for dolly out.
   * @param distance Distance of dolly.
   * @param enableTransition Whether to move smoothly or immediately.
   * @category Methods
   */
  dollyInFixed(distance, enableTransition = false) {
    this._targetEnd.add(this._getCameraDirection(_cameraDirection).multiplyScalar(distance));
    if (!enableTransition) {
      this._target.copy(this._targetEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) && approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) && approxEquals(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * Zoom in/out camera. The value is added to camera zoom.
   * Limits set with `.minZoom` and `.maxZoom`
   * @param zoomStep zoom scale
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  zoom(zoomStep, enableTransition = false) {
    return this.zoomTo(this._zoomEnd + zoomStep, enableTransition);
  }
  /**
   * Zoom in/out camera to given scale. The value overwrites camera zoom.
   * Limits set with .minZoom and .maxZoom
   * @param zoom
   * @param enableTransition
   * @category Methods
   */
  zoomTo(zoom, enableTransition = false) {
    this._isUserControllingZoom = false;
    this._zoomEnd = clamp(zoom, this.minZoom, this.maxZoom);
    this._needsUpdate = true;
    if (!enableTransition) {
      this._zoom = this._zoomEnd;
    }
    const resolveImmediately = !enableTransition || approxEquals(this._zoom, this._zoomEnd, this.restThreshold);
    this._changedZoom = 0;
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * @deprecated `pan()` has been renamed to `truck()`
   * @category Methods
   */
  pan(x, y, enableTransition = false) {
    console.warn("`pan` has been renamed to `truck`");
    return this.truck(x, y, enableTransition);
  }
  /**
   * Truck and pedestal camera using current azimuthal angle
   * @param x Horizontal translate amount
   * @param y Vertical translate amount
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  truck(x, y, enableTransition = false) {
    this._camera.updateMatrix();
    _xColumn.setFromMatrixColumn(this._camera.matrix, 0);
    _yColumn.setFromMatrixColumn(this._camera.matrix, 1);
    _xColumn.multiplyScalar(x);
    _yColumn.multiplyScalar(-y);
    const offset = _v3A.copy(_xColumn).add(_yColumn);
    const to = _v3B.copy(this._targetEnd).add(offset);
    return this.moveTo(to.x, to.y, to.z, enableTransition);
  }
  /**
   * Move forward / backward.
   * @param distance Amount to move forward / backward. Negative value to move backward
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  forward(distance, enableTransition = false) {
    _v3A.setFromMatrixColumn(this._camera.matrix, 0);
    _v3A.crossVectors(this._camera.up, _v3A);
    _v3A.multiplyScalar(distance);
    const to = _v3B.copy(this._targetEnd).add(_v3A);
    return this.moveTo(to.x, to.y, to.z, enableTransition);
  }
  /**
   * Move up / down.
   * @param height Amount to move up / down. Negative value to move down
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  elevate(height, enableTransition = false) {
    _v3A.copy(this._camera.up).multiplyScalar(height);
    return this.moveTo(this._targetEnd.x + _v3A.x, this._targetEnd.y + _v3A.y, this._targetEnd.z + _v3A.z, enableTransition);
  }
  /**
   * Move target position to given point.
   * @param x x coord to move center position
   * @param y y coord to move center position
   * @param z z coord to move center position
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  moveTo(x, y, z, enableTransition = false) {
    this._isUserControllingTruck = false;
    const offset = _v3A.set(x, y, z).sub(this._targetEnd);
    this._encloseToBoundary(this._targetEnd, offset, this.boundaryFriction);
    this._needsUpdate = true;
    if (!enableTransition) {
      this._target.copy(this._targetEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) && approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) && approxEquals(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * Look in the given point direction.
   * @param x point x.
   * @param y point y.
   * @param z point z.
   * @param enableTransition Whether to move smoothly or immediately.
   * @returns Transition end promise
   * @category Methods
   */
  lookInDirectionOf(x, y, z, enableTransition = false) {
    const point = _v3A.set(x, y, z);
    const direction = point.sub(this._targetEnd).normalize();
    const position = direction.multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);
    return this.setPosition(position.x, position.y, position.z, enableTransition);
  }
  /**
   * Fit the viewport to the box or the bounding box of the object, using the nearest axis. paddings are in unit.
   * set `cover: true` to fill enter screen.
   * e.g.
   * ```
   * cameraControls.fitToBox( myMesh );
   * ```
   * @param box3OrObject Axis aligned bounding box to fit the view.
   * @param enableTransition Whether to move smoothly or immediately.
   * @param options | `<object>` { cover: boolean, paddingTop: number, paddingLeft: number, paddingBottom: number, paddingRight: number }
   * @returns Transition end promise
   * @category Methods
   */
  fitToBox(box3OrObject, enableTransition, { cover = false, paddingLeft = 0, paddingRight = 0, paddingBottom = 0, paddingTop = 0 } = {}) {
    const promises = [];
    const aabb = box3OrObject.isBox3 ? _box3A.copy(box3OrObject) : _box3A.setFromObject(box3OrObject);
    if (aabb.isEmpty()) {
      console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting");
      Promise.resolve();
    }
    const theta = roundToStep(this._sphericalEnd.theta, PI_HALF);
    const phi = roundToStep(this._sphericalEnd.phi, PI_HALF);
    promises.push(this.rotateTo(theta, phi, enableTransition));
    const normal = _v3A.setFromSpherical(this._sphericalEnd).normalize();
    const rotation = _quaternionA.setFromUnitVectors(normal, _AXIS_Z);
    const viewFromPolar = approxEquals(Math.abs(normal.y), 1);
    if (viewFromPolar) {
      rotation.multiply(_quaternionB.setFromAxisAngle(_AXIS_Y, theta));
    }
    rotation.multiply(this._yAxisUpSpaceInverse);
    const bb = _box3B.makeEmpty();
    _v3B.copy(aabb.min).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.min).setX(aabb.max.x).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.min).setY(aabb.max.y).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).setZ(aabb.min.z).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.min).setZ(aabb.max.z).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).setY(aabb.min.y).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).setX(aabb.min.x).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    bb.min.x -= paddingLeft;
    bb.min.y -= paddingBottom;
    bb.max.x += paddingRight;
    bb.max.y += paddingTop;
    rotation.setFromUnitVectors(_AXIS_Z, normal);
    if (viewFromPolar) {
      rotation.premultiply(_quaternionB.invert());
    }
    rotation.premultiply(this._yAxisUpSpace);
    const bbSize = bb.getSize(_v3A);
    const center = bb.getCenter(_v3B).applyQuaternion(rotation);
    if (isPerspectiveCamera(this._camera)) {
      const distance = this.getDistanceToFitBox(bbSize.x, bbSize.y, bbSize.z, cover);
      promises.push(this.moveTo(center.x, center.y, center.z, enableTransition));
      promises.push(this.dollyTo(distance, enableTransition));
      promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
    } else if (isOrthographicCamera(this._camera)) {
      const camera = this._camera;
      const width = camera.right - camera.left;
      const height = camera.top - camera.bottom;
      const zoom = cover ? Math.max(width / bbSize.x, height / bbSize.y) : Math.min(width / bbSize.x, height / bbSize.y);
      promises.push(this.moveTo(center.x, center.y, center.z, enableTransition));
      promises.push(this.zoomTo(zoom, enableTransition));
      promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
    }
    return Promise.all(promises);
  }
  /**
   * Fit the viewport to the sphere or the bounding sphere of the object.
   * @param sphereOrMesh
   * @param enableTransition
   * @category Methods
   */
  fitToSphere(sphereOrMesh, enableTransition) {
    const promises = [];
    const isObject3D = "isObject3D" in sphereOrMesh;
    const boundingSphere = isObject3D ? _CameraControls.createBoundingSphere(sphereOrMesh, _sphere) : _sphere.copy(sphereOrMesh);
    promises.push(this.moveTo(boundingSphere.center.x, boundingSphere.center.y, boundingSphere.center.z, enableTransition));
    if (isPerspectiveCamera(this._camera)) {
      const distanceToFit = this.getDistanceToFitSphere(boundingSphere.radius);
      promises.push(this.dollyTo(distanceToFit, enableTransition));
    } else if (isOrthographicCamera(this._camera)) {
      const width = this._camera.right - this._camera.left;
      const height = this._camera.top - this._camera.bottom;
      const diameter = 2 * boundingSphere.radius;
      const zoom = Math.min(width / diameter, height / diameter);
      promises.push(this.zoomTo(zoom, enableTransition));
    }
    promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
    return Promise.all(promises);
  }
  /**
   * Look at the `target` from the `position`.
   * @param positionX
   * @param positionY
   * @param positionZ
   * @param targetX
   * @param targetY
   * @param targetZ
   * @param enableTransition
   * @category Methods
   */
  setLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, enableTransition = false) {
    this._isUserControllingRotate = false;
    this._isUserControllingDolly = false;
    this._isUserControllingTruck = false;
    this._lastDollyDirection = DOLLY_DIRECTION.NONE;
    this._changedDolly = 0;
    const target = _v3B.set(targetX, targetY, targetZ);
    const position = _v3A.set(positionX, positionY, positionZ);
    this._targetEnd.copy(target);
    this._sphericalEnd.setFromVector3(position.sub(target).applyQuaternion(this._yAxisUpSpace));
    this.normalizeRotations();
    this._needsUpdate = true;
    if (!enableTransition) {
      this._target.copy(this._targetEnd);
      this._spherical.copy(this._sphericalEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) && approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) && approxEquals(this._target.z, this._targetEnd.z, this.restThreshold) && approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * Similar to setLookAt, but it interpolates between two states.
   * @param positionAX
   * @param positionAY
   * @param positionAZ
   * @param targetAX
   * @param targetAY
   * @param targetAZ
   * @param positionBX
   * @param positionBY
   * @param positionBZ
   * @param targetBX
   * @param targetBY
   * @param targetBZ
   * @param t
   * @param enableTransition
   * @category Methods
   */
  lerpLookAt(positionAX, positionAY, positionAZ, targetAX, targetAY, targetAZ, positionBX, positionBY, positionBZ, targetBX, targetBY, targetBZ, t, enableTransition = false) {
    this._isUserControllingRotate = false;
    this._isUserControllingDolly = false;
    this._isUserControllingTruck = false;
    this._lastDollyDirection = DOLLY_DIRECTION.NONE;
    this._changedDolly = 0;
    const targetA = _v3A.set(targetAX, targetAY, targetAZ);
    const positionA = _v3B.set(positionAX, positionAY, positionAZ);
    _sphericalA.setFromVector3(positionA.sub(targetA).applyQuaternion(this._yAxisUpSpace));
    const targetB = _v3C.set(targetBX, targetBY, targetBZ);
    const positionB = _v3B.set(positionBX, positionBY, positionBZ);
    _sphericalB.setFromVector3(positionB.sub(targetB).applyQuaternion(this._yAxisUpSpace));
    this._targetEnd.copy(targetA.lerp(targetB, t));
    const deltaTheta = _sphericalB.theta - _sphericalA.theta;
    const deltaPhi = _sphericalB.phi - _sphericalA.phi;
    const deltaRadius = _sphericalB.radius - _sphericalA.radius;
    this._sphericalEnd.set(_sphericalA.radius + deltaRadius * t, _sphericalA.phi + deltaPhi * t, _sphericalA.theta + deltaTheta * t);
    this.normalizeRotations();
    this._needsUpdate = true;
    if (!enableTransition) {
      this._target.copy(this._targetEnd);
      this._spherical.copy(this._sphericalEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) && approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) && approxEquals(this._target.z, this._targetEnd.z, this.restThreshold) && approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * Set angle and distance by given position.
   * An alias of `setLookAt()`, without target change. Thus keep gazing at the current target
   * @param positionX
   * @param positionY
   * @param positionZ
   * @param enableTransition
   * @category Methods
   */
  setPosition(positionX, positionY, positionZ, enableTransition = false) {
    return this.setLookAt(positionX, positionY, positionZ, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, enableTransition);
  }
  /**
   * Set the target position where gaze at.
   * An alias of `setLookAt()`, without position change. Thus keep the same position.
   * @param targetX
   * @param targetY
   * @param targetZ
   * @param enableTransition
   * @category Methods
   */
  setTarget(targetX, targetY, targetZ, enableTransition = false) {
    const pos = this.getPosition(_v3A);
    const promise = this.setLookAt(pos.x, pos.y, pos.z, targetX, targetY, targetZ, enableTransition);
    this._sphericalEnd.phi = clamp(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle);
    return promise;
  }
  /**
   * Set focal offset using the screen parallel coordinates. z doesn't affect in Orthographic as with Dolly.
   * @param x
   * @param y
   * @param z
   * @param enableTransition
   * @category Methods
   */
  setFocalOffset(x, y, z, enableTransition = false) {
    this._isUserControllingOffset = false;
    this._focalOffsetEnd.set(x, y, z);
    this._needsUpdate = true;
    if (!enableTransition)
      this._focalOffset.copy(this._focalOffsetEnd);
    const resolveImmediately = !enableTransition || approxEquals(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && approxEquals(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && approxEquals(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  /**
   * Set orbit point without moving the camera.
   * SHOULD NOT RUN DURING ANIMATIONS. `setOrbitPoint()` will immediately fix the positions.
   * @param targetX
   * @param targetY
   * @param targetZ
   * @category Methods
   */
  setOrbitPoint(targetX, targetY, targetZ) {
    this._camera.updateMatrixWorld();
    _xColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 0);
    _yColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 1);
    _zColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
    const position = _v3A.set(targetX, targetY, targetZ);
    const distance = position.distanceTo(this._camera.position);
    const cameraToPoint = position.sub(this._camera.position);
    _xColumn.multiplyScalar(cameraToPoint.x);
    _yColumn.multiplyScalar(cameraToPoint.y);
    _zColumn.multiplyScalar(cameraToPoint.z);
    _v3A.copy(_xColumn).add(_yColumn).add(_zColumn);
    _v3A.z = _v3A.z + distance;
    this.dollyTo(distance, false);
    this.setFocalOffset(-_v3A.x, _v3A.y, -_v3A.z, false);
    this.moveTo(targetX, targetY, targetZ, false);
  }
  /**
   * Set the boundary box that encloses the target of the camera. box3 is in THREE.Box3
   * @param box3
   * @category Methods
   */
  setBoundary(box3) {
    if (!box3) {
      this._boundary.min.set(-Infinity, -Infinity, -Infinity);
      this._boundary.max.set(Infinity, Infinity, Infinity);
      this._needsUpdate = true;
      return;
    }
    this._boundary.copy(box3);
    this._boundary.clampPoint(this._targetEnd, this._targetEnd);
    this._needsUpdate = true;
  }
  /**
   * Set (or unset) the current viewport.
   * Set this when you want to use renderer viewport and .dollyToCursor feature at the same time.
   * @param viewportOrX
   * @param y
   * @param width
   * @param height
   * @category Methods
   */
  setViewport(viewportOrX, y, width, height) {
    if (viewportOrX === null) {
      this._viewport = null;
      return;
    }
    this._viewport = this._viewport || new THREE.Vector4();
    if (typeof viewportOrX === "number") {
      this._viewport.set(viewportOrX, y, width, height);
    } else {
      this._viewport.copy(viewportOrX);
    }
  }
  /**
   * Calculate the distance to fit the box.
   * @param width box width
   * @param height box height
   * @param depth box depth
   * @returns distance
   * @category Methods
   */
  getDistanceToFitBox(width, height, depth, cover = false) {
    if (notSupportedInOrthographicCamera(this._camera, "getDistanceToFitBox"))
      return this._spherical.radius;
    const boundingRectAspect = width / height;
    const fov = this._camera.getEffectiveFOV() * DEG2RAD;
    const aspect = this._camera.aspect;
    const heightToFit = (cover ? boundingRectAspect > aspect : boundingRectAspect < aspect) ? height : width / aspect;
    return heightToFit * 0.5 / Math.tan(fov * 0.5) + depth * 0.5;
  }
  /**
   * Calculate the distance to fit the sphere.
   * @param radius sphere radius
   * @returns distance
   * @category Methods
   */
  getDistanceToFitSphere(radius) {
    if (notSupportedInOrthographicCamera(this._camera, "getDistanceToFitSphere"))
      return this._spherical.radius;
    const vFOV = this._camera.getEffectiveFOV() * DEG2RAD;
    const hFOV = Math.atan(Math.tan(vFOV * 0.5) * this._camera.aspect) * 2;
    const fov = 1 < this._camera.aspect ? vFOV : hFOV;
    return radius / Math.sin(fov * 0.5);
  }
  /**
   * Returns the orbit center position, where the camera looking at.
   * @param out The receiving Vector3 instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getTarget(out, receiveEndValue = true) {
    const _out = !!out && out.isVector3 ? out : new THREE.Vector3();
    return _out.copy(receiveEndValue ? this._targetEnd : this._target);
  }
  /**
   * Returns the camera position.
   * @param out The receiving Vector3 instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getPosition(out, receiveEndValue = true) {
    const _out = !!out && out.isVector3 ? out : new THREE.Vector3();
    return _out.setFromSpherical(receiveEndValue ? this._sphericalEnd : this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(receiveEndValue ? this._targetEnd : this._target);
  }
  /**
   * Returns the spherical coordinates of the orbit.
   * @param out The receiving Spherical instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getSpherical(out, receiveEndValue = true) {
    const _out = out || new THREE.Spherical();
    return _out.copy(receiveEndValue ? this._sphericalEnd : this._spherical);
  }
  /**
   * Returns the focal offset, which is how much the camera appears to be translated in screen parallel coordinates.
   * @param out The receiving Vector3 instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getFocalOffset(out, receiveEndValue = true) {
    const _out = !!out && out.isVector3 ? out : new THREE.Vector3();
    return _out.copy(receiveEndValue ? this._focalOffsetEnd : this._focalOffset);
  }
  /**
   * Normalize camera azimuth angle rotation between 0 and 360 degrees.
   * @category Methods
   */
  normalizeRotations() {
    this._sphericalEnd.theta = this._sphericalEnd.theta % PI_2;
    if (this._sphericalEnd.theta < 0)
      this._sphericalEnd.theta += PI_2;
    this._spherical.theta += PI_2 * Math.round((this._sphericalEnd.theta - this._spherical.theta) / PI_2);
  }
  /**
   * stop all transitions.
   */
  stop() {
    this._focalOffset.copy(this._focalOffsetEnd);
    this._target.copy(this._targetEnd);
    this._spherical.copy(this._sphericalEnd);
    this._zoom = this._zoomEnd;
  }
  /**
   * Reset all rotation and position to defaults.
   * @param enableTransition
   * @category Methods
   */
  reset(enableTransition = false) {
    if (!approxEquals(this._camera.up.x, this._cameraUp0.x) || !approxEquals(this._camera.up.y, this._cameraUp0.y) || !approxEquals(this._camera.up.z, this._cameraUp0.z)) {
      this._camera.up.copy(this._cameraUp0);
      const position = this.getPosition(_v3A);
      this.updateCameraUp();
      this.setPosition(position.x, position.y, position.z);
    }
    const promises = [
      this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, enableTransition),
      this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, enableTransition),
      this.zoomTo(this._zoom0, enableTransition)
    ];
    return Promise.all(promises);
  }
  /**
   * Set current camera position as the default position.
   * @category Methods
   */
  saveState() {
    this._cameraUp0.copy(this._camera.up);
    this.getTarget(this._target0);
    this.getPosition(this._position0);
    this._zoom0 = this._zoom;
    this._focalOffset0.copy(this._focalOffset);
  }
  /**
   * Sync camera-up direction.
   * When camera-up vector is changed, `.updateCameraUp()` must be called.
   * @category Methods
   */
  updateCameraUp() {
    this._yAxisUpSpace.setFromUnitVectors(this._camera.up, _AXIS_Y);
    this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
  }
  /**
   * Apply current camera-up direction to the camera.
   * The orbit system will be re-initialized with the current position.
   * @category Methods
   */
  applyCameraUp() {
    const cameraDirection = _v3A.subVectors(this._target, this._camera.position).normalize();
    const side = _v3B.crossVectors(cameraDirection, this._camera.up);
    this._camera.up.crossVectors(side, cameraDirection).normalize();
    this._camera.updateMatrixWorld();
    const position = this.getPosition(_v3A);
    this.updateCameraUp();
    this.setPosition(position.x, position.y, position.z);
  }
  /**
   * Update camera position and directions.
   * This should be called in your tick loop every time, and returns true if re-rendering is needed.
   * @param delta
   * @returns updated
   * @category Methods
   */
  update(delta) {
    const deltaTheta = this._sphericalEnd.theta - this._spherical.theta;
    const deltaPhi = this._sphericalEnd.phi - this._spherical.phi;
    const deltaRadius = this._sphericalEnd.radius - this._spherical.radius;
    const deltaTarget = _deltaTarget.subVectors(this._targetEnd, this._target);
    const deltaOffset = _deltaOffset.subVectors(this._focalOffsetEnd, this._focalOffset);
    const deltaZoom = this._zoomEnd - this._zoom;
    if (approxZero(deltaTheta)) {
      this._thetaVelocity.value = 0;
      this._spherical.theta = this._sphericalEnd.theta;
    } else {
      const smoothTime = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.theta = smoothDamp(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, smoothTime, Infinity, delta);
      this._needsUpdate = true;
    }
    if (approxZero(deltaPhi)) {
      this._phiVelocity.value = 0;
      this._spherical.phi = this._sphericalEnd.phi;
    } else {
      const smoothTime = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.phi = smoothDamp(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, smoothTime, Infinity, delta);
      this._needsUpdate = true;
    }
    if (approxZero(deltaRadius)) {
      this._radiusVelocity.value = 0;
      this._spherical.radius = this._sphericalEnd.radius;
    } else {
      const smoothTime = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.radius = smoothDamp(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, smoothTime, this.maxSpeed, delta);
      this._needsUpdate = true;
    }
    if (approxZero(deltaTarget.x) && approxZero(deltaTarget.y) && approxZero(deltaTarget.z)) {
      this._targetVelocity.set(0, 0, 0);
      this._target.copy(this._targetEnd);
    } else {
      const smoothTime = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
      smoothDampVec3(this._target, this._targetEnd, this._targetVelocity, smoothTime, this.maxSpeed, delta, this._target);
      this._needsUpdate = true;
    }
    if (approxZero(deltaOffset.x) && approxZero(deltaOffset.y) && approxZero(deltaOffset.z)) {
      this._focalOffsetVelocity.set(0, 0, 0);
      this._focalOffset.copy(this._focalOffsetEnd);
    } else {
      const smoothTime = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
      smoothDampVec3(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, smoothTime, this.maxSpeed, delta, this._focalOffset);
      this._needsUpdate = true;
    }
    if (approxZero(deltaZoom)) {
      this._zoomVelocity.value = 0;
      this._zoom = this._zoomEnd;
    } else {
      const smoothTime = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
      this._zoom = smoothDamp(this._zoom, this._zoomEnd, this._zoomVelocity, smoothTime, Infinity, delta);
    }
    if (this.dollyToCursor) {
      if (isPerspectiveCamera(this._camera) && this._changedDolly !== 0) {
        const dollyControlAmount = this._spherical.radius - this._lastDistance;
        const camera = this._camera;
        const cameraDirection = this._getCameraDirection(_cameraDirection);
        const planeX = _v3A.copy(cameraDirection).cross(camera.up).normalize();
        if (planeX.lengthSq() === 0)
          planeX.x = 1;
        const planeY = _v3B.crossVectors(planeX, cameraDirection);
        const worldToScreen = this._sphericalEnd.radius * Math.tan(camera.getEffectiveFOV() * DEG2RAD * 0.5);
        const prevRadius = this._sphericalEnd.radius - dollyControlAmount;
        const lerpRatio = (prevRadius - this._sphericalEnd.radius) / this._sphericalEnd.radius;
        const cursor = _v3C.copy(this._targetEnd).add(planeX.multiplyScalar(this._dollyControlCoord.x * worldToScreen * camera.aspect)).add(planeY.multiplyScalar(this._dollyControlCoord.y * worldToScreen));
        const newTargetEnd = _v3A.copy(this._targetEnd).lerp(cursor, lerpRatio);
        const isMin = this._lastDollyDirection === DOLLY_DIRECTION.IN && this._spherical.radius <= this.minDistance;
        const isMax = this._lastDollyDirection === DOLLY_DIRECTION.OUT && this.maxDistance <= this._spherical.radius;
        if (this.infinityDolly && (isMin || isMax)) {
          this._sphericalEnd.radius -= dollyControlAmount;
          this._spherical.radius -= dollyControlAmount;
          const dollyAmount = _v3B.copy(cameraDirection).multiplyScalar(-dollyControlAmount);
          newTargetEnd.add(dollyAmount);
        }
        this._boundary.clampPoint(newTargetEnd, newTargetEnd);
        const targetEndDiff = _v3B.subVectors(newTargetEnd, this._targetEnd);
        this._targetEnd.copy(newTargetEnd);
        this._target.add(targetEndDiff);
        this._changedDolly -= dollyControlAmount;
        if (approxZero(this._changedDolly))
          this._changedDolly = 0;
      } else if (isOrthographicCamera(this._camera) && this._changedZoom !== 0) {
        const dollyControlAmount = this._zoom - this._lastZoom;
        const camera = this._camera;
        const worldCursorPosition = _v3A.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (camera.near + camera.far) / (camera.near - camera.far)).unproject(camera);
        const quaternion = _v3B.set(0, 0, -1).applyQuaternion(camera.quaternion);
        const cursor = _v3C.copy(worldCursorPosition).add(quaternion.multiplyScalar(-worldCursorPosition.dot(camera.up)));
        const prevZoom = this._zoom - dollyControlAmount;
        const lerpRatio = -(prevZoom - this._zoom) / this._zoom;
        const cameraDirection = this._getCameraDirection(_cameraDirection);
        const prevPlaneConstant = this._targetEnd.dot(cameraDirection);
        const newTargetEnd = _v3A.copy(this._targetEnd).lerp(cursor, lerpRatio);
        const newPlaneConstant = newTargetEnd.dot(cameraDirection);
        const pullBack = cameraDirection.multiplyScalar(newPlaneConstant - prevPlaneConstant);
        newTargetEnd.sub(pullBack);
        this._boundary.clampPoint(newTargetEnd, newTargetEnd);
        const targetEndDiff = _v3B.subVectors(newTargetEnd, this._targetEnd);
        this._targetEnd.copy(newTargetEnd);
        this._target.add(targetEndDiff);
        this._changedZoom -= dollyControlAmount;
        if (approxZero(this._changedZoom))
          this._changedZoom = 0;
      }
    }
    if (this._camera.zoom !== this._zoom) {
      this._camera.zoom = this._zoom;
      this._camera.updateProjectionMatrix();
      this._updateNearPlaneCorners();
      this._needsUpdate = true;
    }
    this._dragNeedsUpdate = true;
    const maxDistance = this._collisionTest();
    this._spherical.radius = Math.min(this._spherical.radius, maxDistance);
    this._spherical.makeSafe();
    this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target);
    this._camera.lookAt(this._target);
    const affectOffset = !approxZero(this._focalOffset.x) || !approxZero(this._focalOffset.y) || !approxZero(this._focalOffset.z);
    if (affectOffset) {
      this._camera.updateMatrixWorld();
      _xColumn.setFromMatrixColumn(this._camera.matrix, 0);
      _yColumn.setFromMatrixColumn(this._camera.matrix, 1);
      _zColumn.setFromMatrixColumn(this._camera.matrix, 2);
      _xColumn.multiplyScalar(this._focalOffset.x);
      _yColumn.multiplyScalar(-this._focalOffset.y);
      _zColumn.multiplyScalar(this._focalOffset.z);
      _v3A.copy(_xColumn).add(_yColumn).add(_zColumn);
      this._camera.position.add(_v3A);
    }
    if (this._boundaryEnclosesCamera) {
      this._encloseToBoundary(this._camera.position.copy(this._target), _v3A.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
    }
    const updated = this._needsUpdate;
    if (updated && !this._updatedLastTime) {
      this._hasRested = false;
      this.dispatchEvent({ type: "wake" });
      this.dispatchEvent({ type: "update" });
    } else if (updated) {
      this.dispatchEvent({ type: "update" });
      if (approxZero(deltaTheta, this.restThreshold) && approxZero(deltaPhi, this.restThreshold) && approxZero(deltaRadius, this.restThreshold) && approxZero(deltaTarget.x, this.restThreshold) && approxZero(deltaTarget.y, this.restThreshold) && approxZero(deltaTarget.z, this.restThreshold) && approxZero(deltaOffset.x, this.restThreshold) && approxZero(deltaOffset.y, this.restThreshold) && approxZero(deltaOffset.z, this.restThreshold) && approxZero(deltaZoom, this.restThreshold) && !this._hasRested) {
        this._hasRested = true;
        this.dispatchEvent({ type: "rest" });
      }
    } else if (!updated && this._updatedLastTime) {
      this.dispatchEvent({ type: "sleep" });
    }
    this._lastDistance = this._spherical.radius;
    this._lastZoom = this._zoom;
    this._updatedLastTime = updated;
    this._needsUpdate = false;
    return updated;
  }
  /**
   * Get all state in JSON string
   * @category Methods
   */
  toJSON() {
    return JSON.stringify({
      enabled: this._enabled,
      minDistance: this.minDistance,
      maxDistance: infinityToMaxNumber(this.maxDistance),
      minZoom: this.minZoom,
      maxZoom: infinityToMaxNumber(this.maxZoom),
      minPolarAngle: this.minPolarAngle,
      maxPolarAngle: infinityToMaxNumber(this.maxPolarAngle),
      minAzimuthAngle: infinityToMaxNumber(this.minAzimuthAngle),
      maxAzimuthAngle: infinityToMaxNumber(this.maxAzimuthAngle),
      smoothTime: this.smoothTime,
      draggingSmoothTime: this.draggingSmoothTime,
      dollySpeed: this.dollySpeed,
      truckSpeed: this.truckSpeed,
      dollyToCursor: this.dollyToCursor,
      verticalDragToForward: this.verticalDragToForward,
      target: this._targetEnd.toArray(),
      position: _v3A.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
      zoom: this._zoomEnd,
      focalOffset: this._focalOffsetEnd.toArray(),
      target0: this._target0.toArray(),
      position0: this._position0.toArray(),
      zoom0: this._zoom0,
      focalOffset0: this._focalOffset0.toArray()
    });
  }
  /**
   * Reproduce the control state with JSON. enableTransition is where anim or not in a boolean.
   * @param json
   * @param enableTransition
   * @category Methods
   */
  fromJSON(json, enableTransition = false) {
    const obj = JSON.parse(json);
    this.enabled = obj.enabled;
    this.minDistance = obj.minDistance;
    this.maxDistance = maxNumberToInfinity(obj.maxDistance);
    this.minZoom = obj.minZoom;
    this.maxZoom = maxNumberToInfinity(obj.maxZoom);
    this.minPolarAngle = obj.minPolarAngle;
    this.maxPolarAngle = maxNumberToInfinity(obj.maxPolarAngle);
    this.minAzimuthAngle = maxNumberToInfinity(obj.minAzimuthAngle);
    this.maxAzimuthAngle = maxNumberToInfinity(obj.maxAzimuthAngle);
    this.smoothTime = obj.smoothTime;
    this.draggingSmoothTime = obj.draggingSmoothTime;
    this.dollySpeed = obj.dollySpeed;
    this.truckSpeed = obj.truckSpeed;
    this.dollyToCursor = obj.dollyToCursor;
    this.verticalDragToForward = obj.verticalDragToForward;
    this._target0.fromArray(obj.target0);
    this._position0.fromArray(obj.position0);
    this._zoom0 = obj.zoom0;
    this._focalOffset0.fromArray(obj.focalOffset0);
    this.moveTo(obj.target[0], obj.target[1], obj.target[2], enableTransition);
    _sphericalA.setFromVector3(_v3A.fromArray(obj.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace));
    this.rotateTo(_sphericalA.theta, _sphericalA.phi, enableTransition);
    this.dollyTo(_sphericalA.radius, enableTransition);
    this.zoomTo(obj.zoom, enableTransition);
    this.setFocalOffset(obj.focalOffset[0], obj.focalOffset[1], obj.focalOffset[2], enableTransition);
    this._needsUpdate = true;
  }
  /**
   * Attach all internal event handlers to enable drag control.
   * @category Methods
   */
  connect(domElement) {
    if (this._domElement) {
      console.warn("camera-controls is already connected.");
      return;
    }
    domElement.setAttribute("data-camera-controls-version", VERSION);
    this._addAllEventListeners(domElement);
    this._getClientRect(this._elementRect);
  }
  /**
   * Detach all internal event handlers to disable drag control.
   */
  disconnect() {
    this.cancel();
    this._removeAllEventListeners();
    if (this._domElement) {
      this._domElement.removeAttribute("data-camera-controls-version");
      this._domElement = void 0;
    }
  }
  /**
   * Dispose the cameraControls instance itself, remove all eventListeners.
   * @category Methods
   */
  dispose() {
    this.removeAllEventListeners();
    this.disconnect();
  }
  // it's okay to expose public though
  _getTargetDirection(out) {
    return out.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse);
  }
  // it's okay to expose public though
  _getCameraDirection(out) {
    return this._getTargetDirection(out).negate();
  }
  _findPointerById(pointerId) {
    return this._activePointers.find((activePointer) => activePointer.pointerId === pointerId);
  }
  _findPointerByMouseButton(mouseButton) {
    return this._activePointers.find((activePointer) => activePointer.mouseButton === mouseButton);
  }
  _disposePointer(pointer) {
    this._activePointers.splice(this._activePointers.indexOf(pointer), 1);
  }
  _encloseToBoundary(position, offset, friction) {
    const offsetLength2 = offset.lengthSq();
    if (offsetLength2 === 0) {
      return position;
    }
    const newTarget = _v3B.copy(offset).add(position);
    const clampedTarget = this._boundary.clampPoint(newTarget, _v3C);
    const deltaClampedTarget = clampedTarget.sub(newTarget);
    const deltaClampedTargetLength2 = deltaClampedTarget.lengthSq();
    if (deltaClampedTargetLength2 === 0) {
      return position.add(offset);
    } else if (deltaClampedTargetLength2 === offsetLength2) {
      return position;
    } else if (friction === 0) {
      return position.add(offset).add(deltaClampedTarget);
    } else {
      const offsetFactor = 1 + friction * deltaClampedTargetLength2 / offset.dot(deltaClampedTarget);
      return position.add(_v3B.copy(offset).multiplyScalar(offsetFactor)).add(deltaClampedTarget.multiplyScalar(1 - friction));
    }
  }
  _updateNearPlaneCorners() {
    if (isPerspectiveCamera(this._camera)) {
      const camera = this._camera;
      const near = camera.near;
      const fov = camera.getEffectiveFOV() * DEG2RAD;
      const heightHalf = Math.tan(fov * 0.5) * near;
      const widthHalf = heightHalf * camera.aspect;
      this._nearPlaneCorners[0].set(-widthHalf, -heightHalf, 0);
      this._nearPlaneCorners[1].set(widthHalf, -heightHalf, 0);
      this._nearPlaneCorners[2].set(widthHalf, heightHalf, 0);
      this._nearPlaneCorners[3].set(-widthHalf, heightHalf, 0);
    } else if (isOrthographicCamera(this._camera)) {
      const camera = this._camera;
      const zoomInv = 1 / camera.zoom;
      const left = camera.left * zoomInv;
      const right = camera.right * zoomInv;
      const top = camera.top * zoomInv;
      const bottom = camera.bottom * zoomInv;
      this._nearPlaneCorners[0].set(left, top, 0);
      this._nearPlaneCorners[1].set(right, top, 0);
      this._nearPlaneCorners[2].set(right, bottom, 0);
      this._nearPlaneCorners[3].set(left, bottom, 0);
    }
  }
  // lateUpdate
  _collisionTest() {
    let distance = Infinity;
    const hasCollider = this.colliderMeshes.length >= 1;
    if (!hasCollider)
      return distance;
    if (notSupportedInOrthographicCamera(this._camera, "_collisionTest"))
      return distance;
    const rayDirection = this._getTargetDirection(_cameraDirection);
    _rotationMatrix.lookAt(_ORIGIN, rayDirection, this._camera.up);
    for (let i = 0; i < 4; i++) {
      const nearPlaneCorner = _v3B.copy(this._nearPlaneCorners[i]);
      nearPlaneCorner.applyMatrix4(_rotationMatrix);
      const origin = _v3C.addVectors(this._target, nearPlaneCorner);
      _raycaster.set(origin, rayDirection);
      _raycaster.far = this._spherical.radius + 1;
      const intersects = _raycaster.intersectObjects(this.colliderMeshes);
      if (intersects.length !== 0 && intersects[0].distance < distance) {
        distance = intersects[0].distance;
      }
    }
    return distance;
  }
  /**
   * Get its client rect and package into given `DOMRect` .
   */
  _getClientRect(target) {
    if (!this._domElement)
      return;
    const rect = this._domElement.getBoundingClientRect();
    target.x = rect.left;
    target.y = rect.top;
    if (this._viewport) {
      target.x += this._viewport.x;
      target.y += rect.height - this._viewport.w - this._viewport.y;
      target.width = this._viewport.z;
      target.height = this._viewport.w;
    } else {
      target.width = rect.width;
      target.height = rect.height;
    }
    return target;
  }
  _createOnRestPromise(resolveImmediately) {
    if (resolveImmediately)
      return Promise.resolve();
    this._hasRested = false;
    this.dispatchEvent({ type: "transitionstart" });
    return new Promise((resolve) => {
      const onResolve = () => {
        this.removeEventListener("rest", onResolve);
        resolve();
      };
      this.addEventListener("rest", onResolve);
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _addAllEventListeners(_domElement) {
  }
  _removeAllEventListeners() {
  }
  /**
   * backward compatible
   * @deprecated use smoothTime (in seconds) instead
   * @category Properties
   */
  get dampingFactor() {
    console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.");
    return 0;
  }
  /**
   * backward compatible
   * @deprecated use smoothTime (in seconds) instead
   * @category Properties
   */
  set dampingFactor(_) {
    console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.");
  }
  /**
   * backward compatible
   * @deprecated use draggingSmoothTime (in seconds) instead
   * @category Properties
   */
  get draggingDampingFactor() {
    console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.");
    return 0;
  }
  /**
   * backward compatible
   * @deprecated use draggingSmoothTime (in seconds) instead
   * @category Properties
   */
  set draggingDampingFactor(_) {
    console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.");
  }
  static createBoundingSphere(object3d, out = new THREE.Sphere()) {
    const boundingSphere = out;
    const center = boundingSphere.center;
    _box3A.makeEmpty();
    object3d.traverseVisible((object) => {
      if (!object.isMesh)
        return;
      _box3A.expandByObject(object);
    });
    _box3A.getCenter(center);
    let maxRadiusSq = 0;
    object3d.traverseVisible((object) => {
      if (!object.isMesh)
        return;
      const mesh = object;
      const geometry = mesh.geometry.clone();
      geometry.applyMatrix4(mesh.matrixWorld);
      const bufferGeometry = geometry;
      const position = bufferGeometry.attributes.position;
      for (let i = 0, l = position.count; i < l; i++) {
        _v3A.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_v3A));
      }
    });
    boundingSphere.radius = Math.sqrt(maxRadiusSq);
    return boundingSphere;
  }
};

// src/ShaderGradient/Controls/CameraControl.tsx
import { jsx } from "react/jsx-runtime";
function CameraControl(_a2) {
  var _b = _a2, {
    smoothTime = 0.05
  } = _b, props = __objRest(_b, [
    "smoothTime"
  ]);
  CameraControls.install({ THREE: three_module_exports });
  extend({ CameraControls });
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const ref = useCameraAnimation(props);
  return (
    // @ts-ignore
    /* @__PURE__ */ jsx(
      "cameraControls",
      {
        ref,
        args: [camera, gl.domElement],
        enableDamping: true,
        smoothTime,
        zoomSpeed: 10,
        dollySpeed: 10,
        restThreshold: 0
      }
    )
  );
}

export {
  CameraControl
};
/*! Bundled license information:

camera-controls/dist/camera-controls.module.js:
  (*!
   * camera-controls
   * https://github.com/yomotsu/camera-controls
   * (c) 2017 @yomotsu
   * Released under the MIT License.
   *)
*/
