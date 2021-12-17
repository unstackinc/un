import { ReactNode } from 'react';
export declare type SidemenuProps = {
    children: ReactNode;
    footer?: ReactNode;
    heading?: ReactNode;
};
export declare const Sidemenu: {
    ({ children, ...props }: SidemenuProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        title: string;
    };
};
