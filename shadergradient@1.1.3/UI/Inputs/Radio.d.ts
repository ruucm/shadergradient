import * as React from 'react';
type RadioPropsT = {
    value: string;
    label?: string;
    check?: boolean;
    setValue?: any;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const Radio: React.ForwardRefExoticComponent<Pick<RadioPropsT, "label" | "key" | "setValue" | keyof React.InputHTMLAttributes<HTMLInputElement> | "check"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Radio.d.ts.map