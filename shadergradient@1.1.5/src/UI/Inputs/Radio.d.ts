import * as React from 'react';
type RadioPropsT = {
    value: string;
    label?: string;
    check?: boolean;
    setValue?: any;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const Radio: React.ForwardRefExoticComponent<Pick<RadioPropsT, "label" | "key" | "setValue" | "check" | keyof React.InputHTMLAttributes<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Radio.d.ts.map