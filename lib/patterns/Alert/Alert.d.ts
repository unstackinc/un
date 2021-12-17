import { ReactNode } from 'react';
export declare type AlertProps = {
    actions: ReactNode[];
    aria: string;
    children: ReactNode;
    leastDestructiveRef: any;
    setShowAlert?: any;
    showAlert?: boolean;
    title: string;
};
export declare const Alert: {
    ({ actions, aria, children, leastDestructiveRef, setShowAlert, showAlert, title, ...props }: AlertProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        showAlert: boolean;
        title: string;
    };
};
