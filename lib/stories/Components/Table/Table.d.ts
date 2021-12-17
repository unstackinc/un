import { ReactNode } from 'react';
export declare type TableProps = {
    children?: ReactNode;
    props?: any;
};
export declare const Table: ({ children, ...props }: TableProps) => import("theme-ui/jsx-runtime").JSX.Element;
export declare const TableHead: ({ children, ...props }: TableProps) => import("theme-ui/jsx-runtime").JSX.Element;
export declare const TableHeading: ({ children, ...props }: TableProps) => import("theme-ui/jsx-runtime").JSX.Element;
export declare const TableBody: ({ children, ...props }: TableProps) => import("theme-ui/jsx-runtime").JSX.Element;
export declare const TableRow: ({ children, ...props }: TableProps) => import("theme-ui/jsx-runtime").JSX.Element;
export declare const TableData: ({ children, ...props }: TableProps) => import("theme-ui/jsx-runtime").JSX.Element;
export default Table;
