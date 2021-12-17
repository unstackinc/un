/// <reference types="react" />
export declare type CheckboxProps = {
    disabled?: boolean;
    full?: boolean;
    id?: string;
    indeterminate?: boolean;
    label?: string;
    name?: string;
    onChange?: any;
    onClick?: any;
    props?: any;
    value?: string;
};
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<unknown>>;
declare type IndeterminateProps = {
    indeterminate: boolean;
};
export declare const IndeterminateCheckbox: import("react").ForwardRefExoticComponent<IndeterminateProps & import("react").RefAttributes<unknown>>;
export {};
