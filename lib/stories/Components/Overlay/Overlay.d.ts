/// <reference types="react" />
export declare type OverlayProps = {
    background?: string;
    onChange?: any;
    onClick?: any;
    setShowOverlay?: any;
    showOverlay?: boolean;
};
export declare const Overlay: {
    ({ background, onChange, onClick, setShowOverlay, showOverlay, ...props }: OverlayProps): JSX.Element;
    defaultProps: {
        onChange: undefined;
        onClick: undefined;
        showOverlay: boolean;
    };
};
export default Overlay;
