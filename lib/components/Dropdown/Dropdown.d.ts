import { ReactNode } from 'react';
declare type ItemProps = {
    before?: ReactNode;
    name?: string;
    space?: boolean;
};
export declare type DropdownProps = {
    button: ReactNode;
    full?: boolean;
    options: ItemProps[];
};
export declare const Dropdown: ({ button, full, options, value, ...props }: DropdownProps & {
    value: string | number;
}) => import("theme-ui/jsx-runtime").JSX.Element;
export {};
