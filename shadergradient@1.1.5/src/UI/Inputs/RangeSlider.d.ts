import * as React from 'react';
type SliderPropsT = {
    setValue: any;
    step: number;
    min: number;
    max: number;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const RangeSlider: React.FC<SliderPropsT>;
export {};
//# sourceMappingURL=RangeSlider.d.ts.map