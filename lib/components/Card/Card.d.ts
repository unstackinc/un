import { ReactNode } from 'react';
export declare type CardProps = {
    actions?: ReactNode[];
    children: ReactNode;
    subtitle?: string;
    title?: string;
};
export declare const Card: ({ actions, children, subtitle, title, ...props }: CardProps) => import("theme-ui/jsx-runtime").JSX.Element;
