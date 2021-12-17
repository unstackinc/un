import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    variant?: 'small' | 'medium' | 'large' | 'extralarge';
};
export declare const Profile: {
    ({ children, variant, ...props }: Props): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export {};
