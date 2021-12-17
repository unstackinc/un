import { ReactNode } from 'react';
export declare type DrawerProps = {
    actions: ReactNode[];
    aria: string;
    children: ReactNode;
    setShowDrawer?: any;
    showDrawer?: boolean;
    title: string;
};
export declare const Drawer: {
    ({ actions, aria, children, setShowDrawer, showDrawer, title, ...props }: DrawerProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        showDrawer: boolean;
        title: string;
    };
};
