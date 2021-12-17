export declare type TextareaProps = {
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
export declare const Textarea: {
    ({ disabled, full, helpText, id, label, name, onChange, onClick, placeholder, warning, warningText, ...props }: TextareaProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
        placeholder: string;
        warning: boolean;
    };
};
export default Textarea;
