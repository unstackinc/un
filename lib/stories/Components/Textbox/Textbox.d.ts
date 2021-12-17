export declare type TextboxProps = {
    disabled?: boolean;
    full?: boolean;
    helpText?: string;
    id: string;
    label?: string;
    name: string;
    onChange?: any;
    onClick?: any;
    placeholder: string;
    warning?: boolean;
    warningText?: string;
};
export declare const Textbox: {
    ({ disabled, full, helpText, id, name, label, onChange, onClick, placeholder, warning, warningText, ...props }: TextboxProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
        placeholder: string;
        warning: boolean;
    };
};
export default Textbox;
