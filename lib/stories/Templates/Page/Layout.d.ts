import { ReactNode } from 'react';
export declare type LayoutProps = {
    children: ReactNode;
    footer?: ReactNode;
    heading?: ReactNode;
    sidebar?: boolean;
};
export declare const Layout: ({ children, sidebar, ...props }: LayoutProps) => import("theme-ui/jsx-runtime").JSX.Element;
export default Layout;
