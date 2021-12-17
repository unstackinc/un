import { ReactNode } from 'react';
export declare type TagProps = {
    background?: string;
    children: ReactNode;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'info' | 'danger' | 'warning' | 'success';
};
export declare const Tag: {
    ({ background, children, color, size, variant, ...props }: TagProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        size: string;
        variant: string;
    };
};
