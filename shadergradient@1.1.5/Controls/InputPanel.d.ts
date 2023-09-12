import * as React from 'react';
type InputPanelPropsT = {
    title?: string;
    children: React.ReactNode;
    gap?: string;
    info?: boolean;
    hoverContent?: string;
    isHovered?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare const InputPanel: React.FC<InputPanelPropsT>;
export {};
//# sourceMappingURL=InputPanel.d.ts.map