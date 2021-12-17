import { ReactNode } from 'react';
import ReactPaginate from 'react-paginate';

import { IoCaretBack, IoCaretForward } from 'react-icons/io5';

import { IconButton } from '../IconButton/IconButton';
import { Styles } from './Pagination.styles';

export type PaginationProps = {
  breakLabel?: ReactNode;
  onPageChange: any;
  pageCount: number;
};

export const Pagination = ({
  breakLabel,
  onPageChange,
  pageCount,
  ...props
}: PaginationProps) => {
  return (
    <div css={Styles}>
      <ReactPaginate
        activeClassName="active"
        breakLabel={breakLabel}
        disabledClassName="disabled"
        marginPagesDisplayed={1}
        nextLabel={
          <IconButton>
            <IoCaretForward />
          </IconButton>
        }
        onPageChange={(page: any) => onPageChange(page.selected)}
        pageCount={pageCount}
        pageRangeDisplayed={4}
        previousLabel={
          <IconButton>
            <IoCaretBack />
          </IconButton>
        }
        {...props}
      />
    </div>
  );
};

Pagination.defaultProps = {
  breakLabel: '...',
  onPageChange: () => {},
  pageCount: 10,
};
