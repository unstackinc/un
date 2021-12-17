import { ReactNode } from 'react';
declare type OptionProps = {
    name: ReactNode;
    value: string | number;
};
export declare type SelectProps = {
    disabled?: boolean;
    full?: boolean;
    helpText?: string;
    id?: string;
    label?: string;
    name?: string;
    onChange?: any;
    onClick?: any;
    options: OptionProps[];
    placeholder?: string;
    value: string | number;
    warning?: boolean;
    warningText?: string;
};
export declare const Select: {
    ({ disabled, full, helpText, id, label, name, onChange, onClick, options, placeholder, value, warning, warningText, ...props }: SelectProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
        placeholder: string;
        warning: boolean;
    };
};
export {};
