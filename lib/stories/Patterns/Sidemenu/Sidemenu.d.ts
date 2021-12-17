import { ReactNode } from 'react';
export declare type Sidemenu = {
    children: ReactNode;
    footer?: ReactNode;
    heading?: ReactNode;
};
export declare const Sidemenu: {
    ({ children, ...props }: Sidemenu): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        title: string;
    };
};
export default Sidemenu;
