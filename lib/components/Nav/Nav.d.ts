import { ReactNode } from 'react';
export declare type NavProps = {
    after?: ReactNode;
    before?: ReactNode;
    children: ReactNode;
};
export declare const Nav: ({ after, before, children, ...props }: NavProps) => import("theme-ui/jsx-runtime").JSX.Element;
declare type LinksTypes = {
    name: string;
    tag?: string;
    to: string;
};
declare type SectionProps = {
    children?: ReactNode;
    icon: ReactNode;
    label: string;
    links?: LinksTypes[];
    push?: boolean;
    tag?: ReactNode;
    to?: string;
};
export declare const NavSection: ({ children, icon, label, links, push, tag, to, ...props }: SectionProps) => import("theme-ui/jsx-runtime").JSX.Element;
export {};
