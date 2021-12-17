import { ReactNode } from 'react';
export declare type TabsProps = {
    children: ReactNode;
};
export declare const Tabs: ({ children, ...props }: TabsProps) => import("theme-ui/jsx-runtime").JSX.Element;
declare type TabListProps = {
    tabs: string[];
};
export declare const TabList: ({ tabs, ...props }: TabListProps) => import("theme-ui/jsx-runtime").JSX.Element;
declare type TabPanelsProps = {
    children: ReactNode;
};
export declare const TabPanels: ({ children, ...props }: TabPanelsProps) => import("theme-ui/jsx-runtime").JSX.Element;
declare type TabPanelProps = {
    children: ReactNode;
};
export declare const TabPanel: ({ children, ...props }: TabPanelProps) => import("theme-ui/jsx-runtime").JSX.Element;
export {};
