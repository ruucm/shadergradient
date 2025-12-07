import * as zustand_middleware from 'zustand/middleware';
import * as zustand from 'zustand';
import { SupabaseClient as SupabaseClient$1 } from '@supabase/supabase-js';
import { GradientT } from '@shadergradient/react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ControlType } from 'framer';
import * as React$1 from 'react';
import React__default, { ComponentType } from 'react';
import { MotionValue } from 'framer-motion';

declare const useUIStore: zustand.UseBoundStore<zustand.StoreApi<Omit<{
    activePreset: number;
    mode: string;
    loadingPercentage: number;
    inputMode: string;
    urlInput: string;
    error: string;
    figmaPage: string;
    easyView: boolean;
}, "setActivePreset" | "setInputMode" | "setMode" | "setUrlInput" | "setError" | "setFigmaPage" | "setLoadingPercentage" | "setEasyView"> & {
    setActivePreset: (by: number) => void;
    setInputMode: (data: any) => void;
    setMode: (data: any) => void;
    setUrlInput: (data: any) => void;
    setError: (data: any) => void;
    setFigmaPage: (data: any) => void;
    setLoadingPercentage: (data: any) => void;
    setEasyView: (data: any) => void;
}>>;
interface ScrollableBoxState {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}
declare const useScrollableBoxStore: zustand.UseBoundStore<Omit<zustand.StoreApi<ScrollableBoxState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<zustand_middleware.PersistOptions<ScrollableBoxState, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ScrollableBoxState) => void) => () => void;
        onFinishHydration: (fn: (state: ScrollableBoxState) => void) => () => void;
        getOptions: () => Partial<zustand_middleware.PersistOptions<ScrollableBoxState, unknown>>;
    };
}>;
declare const useFigmaStore: zustand.UseBoundStore<zustand.StoreApi<unknown>>;
declare function useFigma(): any[];
declare const useBillingIntervalStore: zustand.UseBoundStore<zustand.StoreApi<unknown>>;
declare function useBillingInterval(): any[];
interface ScrollStore {
    highlightWord: number;
    currentSection: number;
    setHighlightWord: (word: number) => void;
    setCurrentSection: (section: number) => void;
}
declare const useScrollStore: zustand.UseBoundStore<zustand.StoreApi<ScrollStore>>;
interface UIOverrideStore {
    randomColor: number[][];
    slider: number;
    toggle: boolean;
    setRandomColor: (color: number[][]) => void;
    setSlider: (slider: number) => void;
    setToggle: (toggle: boolean) => void;
}
declare const useUIOverrideStore: zustand.UseBoundStore<zustand.StoreApi<UIOverrideStore>>;
interface FigmaPluginStore {
    currentTab: number;
    scrollingTo: number | null;
    share: string;
    easyView: boolean;
    setCurrentTab: (tab: number) => void;
    setScrollingTo: (to: number | null) => void;
    setShare: (share: string) => void;
    setEasyView: (easyView: boolean) => void;
}
declare const useFigmaPluginStore: zustand.UseBoundStore<zustand.StoreApi<FigmaPluginStore>>;
interface SupabaseStore {
    supabase: SupabaseClient$1 | null;
    initSupabase: (url: string, key: string) => void;
}
declare const useSupabaseStore: zustand.UseBoundStore<zustand.StoreApi<SupabaseStore>>;

declare const useQueryState: (propName: any, defaultValue?: any) => any[];
declare const useURLQueryState: () => (search: any) => void;

declare const updateGradientState: (querystate: object | string) => void;

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
            defaultValue: string;
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
        fov: {
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
            defaultValue: boolean;
            hidden: (props: any) => boolean;
        };
        toggleAxis: {
            type: any;
            title: string;
            enabledTitle: string;
            disabledTitle: string;
            defaultValue: boolean;
            hidden: (props: any) => boolean;
        };
        enableTransition: {
            type: any;
            title: string;
            enabledTitle: string;
            disabledTitle: string;
            defaultValue: boolean;
            hidden: (props: any) => boolean;
        };
        enableCameraUpdate: {
            type: any;
            title: string;
            enabledTitle: string;
            disabledTitle: string;
            defaultValue: boolean;
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
        rootMargin: {
            type: any;
            placeholder: string;
            defaultValue: string;
            title: string;
            description: string;
            hidden: (props: any) => boolean;
        };
    };
}

declare function ShaderGradientStatelessCanvas(props: any): react_jsx_runtime.JSX.Element;

declare function TextAnimation({ fontSize, color, content, delay, width, yBefore, fontFamily, }: {
    fontSize: any;
    color: any;
    content: any;
    delay?: number;
    width?: any;
    yBefore?: number;
    fontFamily?: string;
}): react_jsx_runtime.JSX.Element;
declare namespace TextAnimation {
    var propertyControls: {
        width: {
            type: ControlType;
            defaultValue: number;
        };
        content: {
            type: ControlType;
            defaultValue: string;
        };
        color: {
            type: ControlType;
            defaultValue: string;
        };
        fontSize: {
            type: ControlType;
            defaultValue: number;
        };
        fontFamily: {
            type: ControlType;
            defaultValue: string;
        };
    };
}

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
interface Props$1 {
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
declare const SimpleSlider: React.ComponentType<Props$1>;

interface ScrollableTextBoxProps {
    enableFadeIn?: boolean;
    fadeInDelay?: number;
    enableFadeOut?: boolean;
    fadeOutThreshold?: number;
}
declare function ScrollableTextBox({ enableFadeIn, fadeInDelay, enableFadeOut, fadeOutThreshold, }?: ScrollableTextBoxProps): react_jsx_runtime.JSX.Element;
declare namespace ScrollableTextBox {
    var propertyControls: {
        enableFadeIn: {
            type: ControlType;
            title: string;
            defaultValue: boolean;
            description: string;
        };
        fadeInDelay: {
            type: ControlType;
            title: string;
            defaultValue: number;
            min: number;
            max: number;
            step: number;
            unit: string;
            description: string;
            hidden: (props: any) => boolean;
        };
        enableFadeOut: {
            type: ControlType;
            title: string;
            defaultValue: boolean;
            description: string;
        };
        fadeOutThreshold: {
            type: ControlType;
            title: string;
            defaultValue: number;
            min: number;
            max: number;
            step: number;
            description: string;
            hidden: (props: any) => boolean;
        };
    };
}

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

type CustomizeNumberInputPropsT = {
    label?: string;
    setValue?: any;
    arrow?: boolean;
    value?: number;
    step?: number;
} & React__default.DetailedHTMLProps<React__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const CustomizeNumberInput: React__default.ForwardRefExoticComponent<Omit<CustomizeNumberInputPropsT, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

type RadioPropsT = {
    value: string;
    label?: string;
    check?: boolean;
    setValue?: any;
} & React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const CustomizeRadio: React$1.ForwardRefExoticComponent<Omit<RadioPropsT, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

type SliderPropsT$2 = {
    defaultValue: number;
    setValue: any;
    step: number;
    min: number;
    max: number;
} & React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const CustomizeSlider: React$1.ForwardRefExoticComponent<Omit<SliderPropsT$2, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

type ColorInputPropsT$1 = {
    label?: string;
    setValue: any;
    defaultValue: number;
} & React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const CustomizeColorInput: React$1.ForwardRefExoticComponent<Omit<ColorInputPropsT$1, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

type SliderPropsT$1 = {
    setValue: any;
    step: number;
    min: number;
    max: number;
} & React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const CustomizeRangeSlider: React$1.FC<SliderPropsT$1>;

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

interface Props {
    databaseURL: string;
    anonKey: string;
}
declare function SupabaseClient(props: Props): react_jsx_runtime.JSX.Element;
declare namespace SupabaseClient {
    var propertyControls: {
        databaseURL: {
            title: string;
            type: ControlType;
            defaultValue: string;
        };
        anonKey: {
            title: string;
            type: ControlType;
            defaultValue: string;
        };
    };
}

declare function updateTheme(Component: any): ComponentType;
declare function AddToCanvas(Component: any): ComponentType;

declare function HideBanner(Component: any): ComponentType;
declare function CurrentPreset(Component: any): ComponentType;
declare function togglePreset(Component: any): ComponentType;
declare function toggleUrl(Component: any): ComponentType;
declare function UrlInput(Component: any): ComponentType;
declare function TailwindWrapper(Component: any): ComponentType;

declare function SectionText(Component: any): ComponentType;
declare function SectionObserver(Component: any): ComponentType;
declare function MainGradient(Component: any): ComponentType;
declare function Gap(Component: any): ComponentType;
declare function CenterCrop1(Component: any): ComponentType;
declare function CenterCrop2(Component: any): ComponentType;
declare function WordGradient(Component: ComponentType<any>): ComponentType;
declare function WordGradientText(Component: ComponentType<any>): ComponentType;
declare function WordHighlight2(Component: any): ComponentType;
declare function WordHighlight(Component: any): ComponentType;
declare function wordHighlightText(Component: any): ComponentType;
declare function fpsCount(Component: any): ComponentType;

declare function TogglePrice(Component: any): ComponentType;
declare function Price(Component: any): ComponentType;

declare function ArrowLeft(Component: any): ComponentType;
declare function ArrowRight(Component: any): ComponentType;
declare function InitCustomize(Component: any): ComponentType;
declare function PresetIndex(Component: any): ComponentType;
declare function PresetTitle(Component: any): ComponentType;
declare function withClickOutsideClosed(Component: any): ComponentType;
declare function randomGradient(Component: any): ComponentType;
declare function randomText(Component: any): ComponentType;
declare function randomBtn(Component: any): ComponentType;
declare function time(Component: any): ComponentType;
declare function slider(Component: any): ComponentType;
declare function sliderSmartComp(Component: any): ComponentType;
declare function toggleSmartComp(Component: any): ComponentType;
declare function textClipper(Component: any): ComponentType;
declare function WebStatelessOverride(Component: any): ComponentType;
declare function WebEasyViewControl(Component: any): ComponentType;
declare function WebEasyViewInfo(Component: any): ComponentType;

declare function insertCanvasAsImage(Component: any): ComponentType;
declare function OpenGIFPage(Component: any): ComponentType;
declare function goBack(Component: any): ComponentType;
declare function extractGIF(Component: any): ComponentType;
declare function Timeline(Component: any): ComponentType;
declare function EstimatedSize(Component: any): ComponentType;
declare function TimelineWrapper(Component: any): ComponentType;
declare function Duration(Component: any): ComponentType;
declare function UndoButton(Component: any): ComponentType;
declare function Error(Component: any): ComponentType;
declare function ToggleShare(Component: any): ComponentType;
declare function ShowCopyContent(Component: any): ComponentType;
declare function CopyBtn(Component: any): ComponentType;
declare function TabSwitcher(Component: any): ComponentType;
declare function ShapeTab(Component: any): ComponentType;
declare function ColorsTab(Component: any): ComponentType;
declare function MotionTab(Component: any): ComponentType;
declare function ViewTab(Component: any): ComponentType;
declare function HighlightButton(Component: any): ComponentType;
declare function EasyViewInfo(Component: any): ComponentType;
declare function StatelessOverride(Component: any): ComponentType;
declare function LoadViewAfterStyleSheet(Component: any): ComponentType;
declare function WidthFillOnLoad(Component: any): ComponentType;
declare function createRectangle(Component: any): ComponentType;

declare function userInfo(Component: any): ComponentType;
declare function subscribeLink(Component: any): ComponentType;
declare function isUpgraded(Component: any): ComponentType;
declare function upgradingText(Component: any): ComponentType;
declare function userEmail(Component: any): ComponentType;
declare function TogglePriceFigma(Component: any): ComponentType;
declare function PriceFigma(Component: any): ComponentType;
declare function PriceText(Component: any): ComponentType;
declare function StartTrial(Component: any): ComponentType;

export { AddToCanvas, ArrowLeft, ArrowRight, Button, CenterCrop1, CenterCrop2, ChangeButton3, ChangeColorButton, ColorInput, ColorsTab, CopyBtn, CurrentPreset, CustomizeColorInput, CustomizeNumberInput, CustomizeRadio, CustomizeRangeSlider, CustomizeSlider, DoubleNumberInput, Duration, EasyViewInfo, Error, EstimatedSize, Gap, HideBanner, HighlightButton, Icons, InitCustomize, InputTitle, LoadViewAfterStyleSheet, MainGradient, MotionTab, OpenGIFPage, PRESETS, PresetIndex, PresetTitle, Price, PriceFigma, PriceText, type Props$1 as Props, RangeSlider, ScrollableTextBox, SectionObserver, SectionText, ShaderGradientStateless, ShaderGradientStatelessCanvas, ShapeTab, ShowCopyContent, SimpleSlider, Slider, StartTrial, StatelessOverride, SupabaseClient, TabSwitcher, TailwindWrapper, TextAnimation, TextHover, Timeline, TimelineWrapper, TogglePrice, TogglePriceFigma, ToggleShare, TriggerSection, TripleNumberInput, UndoButton, UrlInput, ViewTab, WebEasyViewControl, WebEasyViewInfo, WebStatelessOverride, WidthFillOnLoad, WordGradient, WordGradientText, WordHighlight, WordHighlight2, createRectangle, extractGIF, fpsCount, goBack, insertCanvasAsImage, isUpgraded, randomBtn, randomGradient, randomText, slider, sliderSmartComp, subscribeLink, textClipper, time, togglePreset, toggleSmartComp, toggleUrl, updateGradientState, updateTheme, upgradingText, useBillingInterval, useBillingIntervalStore, useFigma, useFigmaPluginStore, useFigmaStore, useQueryState, useScrollStore, useScrollableBoxStore, useSupabaseStore, useUIOverrideStore, useUIStore, useURLQueryState, userEmail, userInfo, withClickOutsideClosed, wordHighlightText };
