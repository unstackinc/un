export declare type RadioProps = {
    disabled?: boolean;
    full?: boolean;
    id: string;
    label?: string;
    name: string;
    onChange?: any;
    onClick?: any;
    value: string;
};
export declare const Radio: {
    ({ disabled, full, id, label, name, onChange, onClick, value, ...props }: RadioProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
    };
};
export default Radio;
