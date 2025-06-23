import * as zustand from 'zustand';
import * as React$1 from 'react';
import React__default, { ComponentType } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ControlType } from 'framer';
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

declare function HideBanner(Component: any): ComponentType;

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

export { ArrowLeft, ArrowRight, Button, CenterCrop1, CenterCrop2, ColorInput, DoubleNumberInput, Gap, HideBanner, Icons, InputTitle, PresetIndex, PresetTitle, Price, type Props, RangeSlider, ScrollableTextBox, SectionObserver, SectionText, SimpleSlider, Slider, TextAnimation, TextHover, TogglePrice, TripleNumberInput, WordGradient, WordGradientText, WordHighlight, WordHighlight2, randomBtn, randomGradient, randomText, slider, sliderSmartComp, textClipper, time, toggleSmartComp, useBillingInterval, useBillingIntervalStore, useStore, useUIStore, wordHighlightText };
