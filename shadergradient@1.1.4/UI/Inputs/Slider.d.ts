import * as React from 'react';
type SliderPropsT = {
    defaultValue: number;
    setValue: any;
    step: number;
    min: number;
    max: number;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const Slider: React.ForwardRefExoticComponent<Pick<SliderPropsT, "key" | "setValue" | keyof React.InputHTMLAttributes<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Slider.d.ts.map