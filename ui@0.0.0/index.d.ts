import * as React from 'react';

type ButtonPropsT = {
    kind?: 'primary' | 'secondary';
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare const Button: React.FC<ButtonPropsT>;

export { Button };
