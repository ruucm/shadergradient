import { useCallback, useEffect, useRef } from "react";
import { motionValue, animate, RenderTarget } from "framer";
// @ts-ignore
import { isMotionValue } from "https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js";
// @ts-ignore
import { useConstant } from "https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js";
export function useAutoMotionValue(inputValue, options) {
    var ref;
    // Put options on a local ref
    // Might wanna just memo instead but it works for now
    const optionsRef = useRef(options);
    const animation = useRef();
    const didInitialMount = useRef(false);
    const isOnCanvas = RenderTarget.current() === RenderTarget.canvas;
    // in-progress - trying to figure out effect hooks
    const onChangeDeps = (options === null || options === void 0 ? void 0 : options.onChangeDeps) ? options.onChangeDeps : [];
    // Memoize the onChange handler
    const onChange = useCallback(options === null || options === void 0 ? void 0 : options.onChange, [
        ...onChangeDeps, 
    ]);
    // Optionally scale the value from props
    const transformer = useCallback((value)=>((ref = optionsRef.current) === null || ref === void 0 ? void 0 : ref.transform) ? optionsRef.current.transform(value) : value
    , []);
    // Create new MotionValue from inputValue
    const value = useConstant(()=>isMotionValue(inputValue) ? inputValue : motionValue(transformer(inputValue))
    );
    // Setting value from prop change
    useEffect(()=>{
        if (!isMotionValue(inputValue) && didInitialMount.current) {
            var ref1, ref2;
            const newValue = transformer(inputValue);
            (ref1 = animation.current) === null || ref1 === void 0 ? void 0 : ref1.stop();
            // Call change callback
            if (onChange) onChange(newValue, value);
            // Trigger animation to new value
            if (((ref2 = optionsRef.current) === null || ref2 === void 0 ? void 0 : ref2.animate) && !isOnCanvas) {
                var ref3;
                // @ts-ignore
                animation.current = animate(value, newValue, (ref3 = optionsRef.current) === null || ref3 === void 0 ? void 0 : ref3.transition);
            } else {
                value.set(newValue);
            }
        }
        didInitialMount.current = true;
    }, [
        inputValue,
        ...onChangeDeps
    ]);
    return value;
}

export const __FramerMetadata__ = {"exports":{"useAutoMotionValue":{"type":"function","annotations":{"framerContractVersion":"1"}}}}