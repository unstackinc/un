import { ReactNode } from 'react';
export declare type HeadingProps = {
    children: ReactNode;
    color?: string;
    display?: boolean;
};
export declare const H3: {
    ({ children, color, display, ...props }: HeadingProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
    };
};
export declare const H2: {
    ({ color, display, children, ...props }: HeadingProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
    };
};
export declare const H1: {
    ({ color, display, children, ...props }: HeadingProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
    };
};
export declare const H0: {
    ({ color, display, children, ...props }: HeadingProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        display: boolean;
    };
};
