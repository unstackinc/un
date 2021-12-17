declare type ProgressBarProps = {
    full?: boolean;
    progress: number;
};
export declare const ProgressBar: {
    ({ full, progress, ...props }: ProgressBarProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        full: boolean;
        progress: number;
    };
};
export {};
