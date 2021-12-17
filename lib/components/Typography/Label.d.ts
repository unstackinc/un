import { ReactNode } from 'react';
export declare type LabelProps = {
    after?: boolean;
    before?: boolean;
    control?: ReactNode;
    children?: ReactNode;
    css?: any;
    disabled?: boolean;
    full?: boolean;
    helpText?: string;
    id?: string;
    inline?: boolean;
    label?: string;
    warningText?: string;
};
export declare const Label: {
    ({ after, before, control, children, css, disabled, full, helpText, id, inline, label, warningText, ...props }: LabelProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        after: boolean;
        before: boolean;
        disabled: boolean;
        full: boolean;
        inline: boolean;
    };
};
