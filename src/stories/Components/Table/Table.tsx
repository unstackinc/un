// Table.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Styles } from './Table.styles';

const Types = {
  children: PropTypes.node,
  props: PropTypes.any,
};

type Props = InferProps<typeof Types>;

export const Table = ({ children, ...props }: Props) => {
  return (
    <table css={Styles} {...props}>
      {children}
    </table>
  );
};

Table.propTypes = Types;

export const TableHead = ({ children, ...props }: Props) => {
  return <thead {...props}>{children}</thead>;
};

TableHead.propTypes = Types;

export const TableHeading = ({ children, ...props }: Props) => {
  return <th {...props}>{children}</th>;
};

TableHeading.propTypes = Types;

export const TableBody = ({ children, ...props }: Props) => {
  return <tbody {...props}>{children}</tbody>;
};

TableBody.propTypes = Types;

export const TableRow = ({ children, ...props }: Props) => {
  return <tr {...props}>{children}</tr>;
};

TableRow.propTypes = Types;

export const TableData = ({ children, ...props }: Props) => {
  return <td {...props}>{children}</td>;
};

TableData.propTypes = Types;

export default Table;
