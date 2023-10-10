import * as React from 'react';
type ColorInputPropsT = {
    label?: string;
    setValue: any;
    defaultValue: number;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const ColorInput: React.ForwardRefExoticComponent<Pick<ColorInputPropsT, "label" | "key" | "setValue" | keyof React.InputHTMLAttributes<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=ColorInput.d.ts.map