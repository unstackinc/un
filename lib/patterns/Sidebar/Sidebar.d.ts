import { ReactNode } from 'react';
export declare type SidebarProps = {
    children?: ReactNode;
    end?: ReactNode;
    start?: ReactNode;
};
export declare const Sidebar: ({ children, end, start, ...props }: SidebarProps) => import("theme-ui/jsx-runtime").JSX.Element;
