import React from 'react';
type NumberInputPropsT = {
    label?: string;
    setValue?: any;
    arrow?: boolean;
    value?: number;
    step?: number;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const NumberInput: React.ForwardRefExoticComponent<Pick<NumberInputPropsT, "label" | "key" | "setValue" | keyof React.InputHTMLAttributes<HTMLInputElement> | "arrow"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=NumberInput.d.ts.map