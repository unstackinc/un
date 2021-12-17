export declare type ToggleProps = {
    disabled?: boolean;
    full?: boolean;
    id: string;
    label?: string;
    name: string;
    onChange?: any;
    onClick?: any;
    value: string;
};
export declare const Toggle: {
    ({ disabled, full, id, label, name, onChange, onClick, value, ...props }: ToggleProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
    };
};
