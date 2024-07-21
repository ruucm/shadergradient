import * as React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonPropsT = {
    kind?: 'primary' | 'secondary';
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare const Button: React.FC<ButtonPropsT>;

declare function TextAnimation({ fontSize, color, content, delay, width, yBefore, isFramerCanvas, }: {
    fontSize: any;
    color: any;
    content: any;
    delay: any;
    width?: any;
    yBefore?: number;
    isFramerCanvas?: boolean;
}): react_jsx_runtime.JSX.Element;

export { Button, TextAnimation };
