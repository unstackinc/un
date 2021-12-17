export declare type FileUploadProps = {
    accept?: string;
    full?: boolean;
    maxFiles?: number;
    onDrop?: any;
    validator?: any;
};
export declare const FileUpload: {
    ({ accept, full, maxFiles, onDrop, validator, ...props }: FileUploadProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        accept: string;
        maxFiles: number;
        onDrop: undefined;
        validator: undefined;
    };
};
