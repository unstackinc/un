import { ReactNode } from 'react';
export declare type IconButtonProps = {
    children: ReactNode;
    color?: string;
    disabled?: boolean;
    onChange?: any;
    onClick?: any;
    size?: 'small' | 'medium' | 'large';
};
export declare const IconButton: {
    ({ children, color, disabled, onChange, onClick, size, ...props }: IconButtonProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        disabled: boolean;
        onChange: undefined;
        onClick: undefined;
        size: string;
    };
};
