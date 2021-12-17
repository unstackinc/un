import { ReactNode } from 'react';
export declare type PaginationProps = {
    breakLabel?: ReactNode;
    onPageChange: any;
    pageCount: number;
};
export declare const Pagination: {
    ({ breakLabel, onPageChange, pageCount, ...props }: PaginationProps): import("theme-ui/jsx-runtime").JSX.Element;
    defaultProps: {
        breakLabel: string;
        onPageChange: () => void;
        pageCount: number;
    };
};
export default Pagination;
