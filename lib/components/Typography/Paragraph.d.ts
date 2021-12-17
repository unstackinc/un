import { ReactNode } from 'react';
export declare type ParagraphProps = {
    children: ReactNode;
    color?: string;
    display?: boolean;
    link?: boolean;
    weight?: 'normal' | 'medium' | 'bold';
};
export declare const P3: {
    ({ children, color, display, link, weight, ...props }: ParagraphProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
        link: boolean;
        weight: string;
    };
};
export declare const P2: {
    ({ weight, color, link, display, children, ...props }: ParagraphProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
        link: boolean;
        weight: string;
    };
};
export declare const P1: {
    ({ weight, color, link, display, children, ...props }: ParagraphProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
        link: boolean;
        weight: string;
    };
};
export declare const P0: {
    ({ weight, color, link, display, children, ...props }: ParagraphProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
        link: boolean;
        weight: string;
    };
};
