declare type SearchProps = {
    disabled?: boolean;
    full?: boolean;
    helpText?: string;
    id: string;
    label?: string;
    name: string;
    onChange?: any;
    onClick?: any;
    placeholder: string;
    value?: string;
    warning?: boolean;
    warningText?: string;
};
export declare const Search: {
    ({ disabled, full, helpText, id, label, name, onChange, onClick, placeholder, value, warning, warningText, ...props }: SearchProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
        placeholder: string;
        warning: boolean;
    };
};
export default Search;
