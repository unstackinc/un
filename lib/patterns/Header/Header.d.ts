import { ReactNode } from 'react';
export declare type HeaderProps = {
    children?: ReactNode;
    end?: ReactNode;
    padding?: string;
    start?: ReactNode;
    tabs?: ReactNode;
};
export declare const Header: ({ children, end, padding, start, tabs, ...props }: HeaderProps) => import("theme-ui/jsx-runtime").JSX.Element;
