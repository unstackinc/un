import { ReactNode } from 'react';
export declare type ModalProps = {
    actions?: ReactNode[];
    aria: string;
    children: ReactNode;
    setShowModal?: any;
    showModal?: boolean;
    title: string;
};
export declare const Modal: {
    ({ aria, actions, children, setShowModal, showModal, title, ...props }: ModalProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        showModal: boolean;
        title: string;
    };
};
export default Modal;
