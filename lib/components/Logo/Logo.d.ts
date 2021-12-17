import { ReactNode } from 'react';
export declare type LogoProps = {
    children: ReactNode;
    size?: 'small' | 'medium' | 'large' | 'extralarge';
};
export declare const Logo: {
    ({ children, size, ...props }: LogoProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        size: string;
    };
};
