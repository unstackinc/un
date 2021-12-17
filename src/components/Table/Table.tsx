import { ReactNode } from 'react';

import { Styles } from './Table.styles';

export type TableProps = {
  children?: ReactNode;
  props?: any;
};

export const Table = ({ children, ...props }: TableProps) => {
  return (
    <table css={Styles} {...props}>
      {children}
    </table>
  );
};

export const TableHead = ({ children, ...props }: TableProps) => {
  return <thead {...props}>{children}</thead>;
};

export const TableHeading = ({ children, ...props }: TableProps) => {
  return <th {...props}>{children}</th>;
};

export const TableBody = ({ children, ...props }: TableProps) => {
  return <tbody {...props}>{children}</tbody>;
};

export const TableRow = ({ children, ...props }: TableProps) => {
  return <tr {...props}>{children}</tr>;
};

export const TableData = ({ children, ...props }: TableProps) => {
  return <td {...props}>{children}</td>;
};
