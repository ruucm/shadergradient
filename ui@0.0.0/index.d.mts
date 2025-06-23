import * as zustand from 'zustand';
import { GradientT, ShaderGradientCanvas } from '@shadergradient/react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ControlType } from 'framer';
import * as React$1 from 'react';
import React__default, { ComponentType } from 'react';
import { MotionValue } from 'framer-motion';

declare const useUIStore: zustand.UseBoundStore<zustand.StoreApi<Omit<{
    activePreset: number;
    mode: string;
    loadingPercentage: number;
}, "setActivePreset" | "setMode" | "setLoadingPercentage"> & {
    setActivePreset: (by: number) => void;
    setMode: (data: any) => void;
    setLoadingPercentage: (data: any) => void;
}>>;

declare const useQueryState: (propName: any, defaultValue?: any) => any[];
declare const useURLQueryState: () => (search: any) => void;

declare const PRESETS: {
    title: any;
    color: any;
    url: string;
}[];

declare function ShaderGradientStateless(passedProps: GradientT): JSX.Element;
declare namespace ShaderGradientStateless {
    var propertyControls: {
        control: {
            type: any;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
        };
        activeTab: {
            title: string;
            type: any;
            options: string[];
            hidden: (props: any) => boolean;
        };
        type: {
            type: any;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
            hidden: (props: any) => boolean;
        };
        shader: {
            type: any;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
            hidden: (props: any) => boolean;
        };
        animate: {
            type: any;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
            hidden: (props: any) => boolean;
        };
        uTime: {
            title: string;
            type: any;
            step: number;
            displayStepper: boolean;
            hidden: (props: any) => boolean;
        };
        uSpeed: {
            title: string;
            type: any;
            step: number;
            min: number;
            displayStepper: boolean;
            defaultValue: number;
            hidden: (props: any) => boolean;
        };
        noise: {
            type: any;
            controls: {
                uStrength: {
                    type: any;
                    title: string;
                    step: number;
                    min: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
                uDensity: {
                    type: any;
                    title: string;
                    step: number;
                    min: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
            };
            hidden: (props: any) => boolean;
        };
        uAmplitude: {
            type: any;
            title: string;
            step: number;
            min: number;
            displayStepper: boolean;
            defaultValue: number;
            hidden: (props: any) => boolean;
        };
        pixelDensity: {
            type: any;
            step: number;
            min: number;
            max: number;
            displayStepper: boolean;
            defaultValue: number;
            hidden: (props: any) => boolean;
        };
        grain: {
            type: any;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
            hidden: (props: any) => boolean;
        };
        lightType: {
            type: any;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
            defaultValue: string;
            hidden: (props: any) => boolean;
        };
        envPreset: {
            type: any;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
            hidden: (props: any) => boolean;
        };
        brightness: {
            type: any;
            step: number;
            min: number;
            max: number;
            defaultValue: number;
            hidden: (props: any) => any;
        };
        reflection: {
            type: any;
            step: number;
            min: number;
            max: number;
            defaultValue: number;
            hidden: (props: any) => any;
        };
        color1: {
            type: any;
            defaultValue: string;
            hidden: (props: any) => boolean;
        };
        color2: {
            type: any;
            defaultValue: string;
            hidden: (props: any) => boolean;
        };
        color3: {
            type: any;
            defaultValue: string;
            hidden: (props: any) => boolean;
        };
        cDistance: {
            title: string;
            type: any;
            displayStepper: boolean;
            min: number;
            max: number;
            defaultValue: number;
            hidden: (props: any) => boolean;
        };
        cameraZoom: {
            type: any;
            displayStepper: boolean;
            step: number;
            min: number;
            max: number;
            defaultValue: number;
            hidden: (props: any) => boolean;
        };
        cameraAngle: {
            type: any;
            controls: {
                cAzimuthAngle: {
                    title: string;
                    type: any;
                    displayStepper: boolean;
                    step: number;
                    min: number;
                    max: number;
                    defaultValue: number;
                };
                cPolarAngle: {
                    title: string;
                    type: any;
                    displayStepper: boolean;
                    step: number;
                    min: number;
                    max: number;
                    defaultValue: number;
                };
            };
            hidden: (props: any) => boolean;
        };
        position: {
            type: any;
            controls: {
                positionX: {
                    type: any;
                    step: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
                positionY: {
                    type: any;
                    step: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
                positionZ: {
                    type: any;
                    step: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
            };
            hidden: (props: any) => boolean;
        };
        rotation: {
            type: any;
            controls: {
                rotationX: {
                    type: any;
                    step: number;
                    min: number;
                    max: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
                rotationY: {
                    type: any;
                    step: number;
                    min: number;
                    max: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
                rotationZ: {
                    type: any;
                    step: number;
                    min: number;
                    max: number;
                    displayStepper: boolean;
                    defaultValue: number;
                };
            };
            hidden: (props: any) => boolean;
        };
        urlString: {
            type: any;
            placeholder: string;
            defaultValue: string;
            hidden: (props: any) => boolean;
        };
        zoomOut: {
            type: any;
            title: string;
            enabledTitle: string;
            disabledTitle: string;
            hidden: (props: any) => boolean;
        };
        toggleAxis: {
            type: any;
            title: string;
            enabledTitle: string;
            disabledTitle: string;
            hidden: (props: any) => boolean;
        };
        pointerEvents: {
            type: any;
            title: string;
            options: string[];
            optionTitles: string[];
            displaySegmentedControl: boolean;
            hidden: (props: any) => boolean;
        };
        performantOnCanvas: {
            type: any;
            defaultValue: boolean;
        };
        lazyLoad: {
            type: any;
            defaultValue: boolean;
        };
        threshold: {
            type: any;
            min: number;
            max: number;
            step: number;
            defaultValue: number;
            displayStepper: boolean;
            title: string;
            hidden: (props: any) => boolean;
        };
    };
}

declare const ShaderGradientStatelessCanvas: typeof ShaderGradientCanvas;

declare function TextAnimation({ fontSize, color, content, delay, width, yBefore, isFramerCanvas, fontFamily, }: {
    fontSize: any;
    color: any;
    content: any;
    delay: any;
    width?: any;
    yBefore?: number;
    isFramerCanvas?: boolean;
    fontFamily?: string;
}): react_jsx_runtime.JSX.Element;

declare function TextHover({ fontSize, color, content, delay, width, font, border, fontWeight, isFramerCanvas, }: {
    fontSize: any;
    color: any;
    content: any;
    delay?: number;
    width?: any;
    font?: any;
    border?: boolean;
    fontWeight?: number;
    isFramerCanvas?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function ChangeColorButton(): react_jsx_runtime.JSX.Element;
declare function ChangeButton3({ url }: {
    url: any;
}): react_jsx_runtime.JSX.Element;
declare namespace ChangeButton3 {
    var propertyControls: {
        url: {
            type: ControlType;
        };
    };
}

type ButtonPropsT = {
    kind?: 'primary' | 'secondary';
} & React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare const Button: React$1.FC<ButtonPropsT>;

declare function Icons({ iconName, color }: {
    iconName: any;
    color: any;
}): react_jsx_runtime.JSX.Element;
declare namespace Icons {
    var propertyControls: {
        color: {
            type: ControlType;
        };
        iconName: {
            type: ControlType;
            options: string[];
        };
    };
}

declare enum KnobOptions {
    Hide = "Hide",
    Hover = "Hover",
    Show = "Show"
}
interface Props {
    value?: number | MotionValue;
    trackHeight?: number;
    fillColor?: string;
    focusColor?: string;
    min?: number;
    max?: number;
    onChange?: (val: number) => void;
    onChangeLive?: (val: number) => void;
    onMax?: () => void;
    onMin?: () => void;
    trackColor?: string;
    trackRadius?: number;
    knobSize?: number;
    knobColor?: string;
    constrainKnob?: boolean;
    shadow?: string;
    shouldAnimateChange?: boolean;
    transition?: {
        [key: string]: any;
    };
    overdrag?: boolean;
    knobSetting?: KnobOptions;
    style?: React.CSSProperties;
    height?: number;
    width?: number;
}
/**
 * SLIDER
 *
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 20
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight any
 */
declare const SimpleSlider: React.ComponentType<Props>;

declare function ScrollableTextBox(): react_jsx_runtime.JSX.Element;

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
declare function TriggerSection({ width, height, title }: {
    width: any;
    height: any;
    title: any;
}): react_jsx_runtime.JSX.Element;
declare namespace TriggerSection {
    var propertyControls: {
        title: {
            type: ControlType;
            defaultValue: string;
        };
    };
}

type SliderPropsT = {
    title: string;
    defaultValue: number;
    setValue: any;
    step: number;
    min: number;
    max: number;
    info: boolean;
    infoContent: string;
    condition: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Slider({ title, defaultValue, setValue, step, min, max, info, infoContent, condition, }: SliderPropsT): JSX.Element;

type ColorInputPropsT = {
    defaultValue: number;
    setValue: any;
} & React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function ColorInput({ defaultValue, setValue, }: ColorInputPropsT): JSX.Element;

type RangeSliderPropsT = {
    title: string;
    defaultValue: [number, number];
    value: [number, number];
    setValue: (value: [number, number]) => void;
    step: number;
    min: number;
    max: number;
    info: boolean;
    infoContent: string;
    condition: boolean;
};
declare function RangeSlider({ title, defaultValue, setValue, step, min, max, info, infoContent, condition, }: RangeSliderPropsT): JSX.Element;

type InputTitlePropsT = {
    title: string;
    info: boolean;
    infoContent: any;
    condition: boolean;
} & React__default.DetailedHTMLProps<React__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function InputTitle({ title, info, infoContent, condition, }: InputTitlePropsT): JSX.Element;

type TripleNumberInputPropsT = {
    title: string;
    defaultValueX: number;
    defaultValueY: number;
    defaultValueZ: number;
    setValueX: any;
    setValueY: any;
    setValueZ: any;
    step: number;
    min: number;
    max: number;
    info: boolean;
    infoContent: string;
    condition: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function TripleNumberInput({ title, defaultValueX, defaultValueY, defaultValueZ, setValueX, setValueY, setValueZ, step, min, max, info, infoContent, condition, }: TripleNumberInputPropsT): JSX.Element;

type DoubleNumberInputPropsT = {
    title: string;
    labelX: string;
    labelY: string;
    defaultValueX: number;
    defaultValueY: number;
    setValueX: any;
    setValueY: any;
    step: number;
    min: number;
    max: number;
    info: boolean;
    infoContent: string;
    condition: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function DoubleNumberInput({ title, defaultValueX, defaultValueY, labelX, labelY, setValueX, setValueY, step, min, max, info, infoContent, condition, }: DoubleNumberInputPropsT): JSX.Element;

declare function HideBanner(Component: any): ComponentType;

declare const todo = "";

declare const useStore: any;
declare function SectionText(Component: any): ComponentType;
declare function SectionObserver(Component: any): ComponentType;
declare function Gap(Component: any): ComponentType;
declare function CenterCrop1(Component: any): ComponentType;
declare function CenterCrop2(Component: any): ComponentType;
declare function WordGradient(Component: ComponentType<any>): ComponentType;
declare function WordGradientText(Component: ComponentType<any>): ComponentType;
declare function WordHighlight2(Component: any): ComponentType;
declare function WordHighlight(Component: any): ComponentType;
declare function wordHighlightText(Component: any): ComponentType;

declare const useBillingIntervalStore: zustand.UseBoundStore<zustand.StoreApi<unknown>>;
declare function useBillingInterval(): any[];
declare function TogglePrice(Component: any): ComponentType;
declare function Price(Component: any): ComponentType;

declare function ArrowLeft(Component: any): ComponentType;
declare function ArrowRight(Component: any): ComponentType;
declare function PresetIndex(Component: any): ComponentType;
declare function PresetTitle(Component: any): ComponentType;
declare function randomGradient(Component: any): ComponentType;
declare function randomText(Component: any): ComponentType;
declare function randomBtn(Component: any): ComponentType;
declare function time(Component: any): ComponentType;
declare function slider(Component: any): ComponentType;
declare function sliderSmartComp(Component: any): ComponentType;
declare function toggleSmartComp(Component: any): ComponentType;
declare function textClipper(Component: any): ComponentType;

export { ArrowLeft, ArrowRight, Button, CenterCrop1, CenterCrop2, ChangeButton3, ChangeColorButton, ColorInput, DoubleNumberInput, Gap, HideBanner, Icons, InputTitle, PRESETS, PresetIndex, PresetTitle, Price, type Props, RangeSlider, ScrollableTextBox, SectionObserver, SectionText, ShaderGradientStateless, ShaderGradientStatelessCanvas, SimpleSlider, Slider, TextAnimation, TextHover, TogglePrice, TriggerSection, TripleNumberInput, WordGradient, WordGradientText, WordHighlight, WordHighlight2, randomBtn, randomGradient, randomText, slider, sliderSmartComp, textClipper, time, todo, toggleSmartComp, useBillingInterval, useBillingIntervalStore, useQueryState, useStore, useUIStore, useURLQueryState, wordHighlightText };
