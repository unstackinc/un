import { ReactNode } from 'react';
export declare type ButtonProps = {
    after?: ReactNode;
    background?: string;
    before?: ReactNode;
    children: ReactNode;
    color?: string;
    disabled?: boolean;
    full?: boolean;
    onChange?: any;
    onClick?: any;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
    warning?: boolean;
};
export declare const Button: {
    ({ after, background, before, children, color, disabled, full, onChange, onClick, size, variant, warning, ...props }: ButtonProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
        size: string;
        variant: string;
    };
};
