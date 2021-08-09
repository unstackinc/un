// Pagination.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import ReactPaginate from 'react-paginate';

import { IoCaretBack, IoCaretForward } from 'react-icons/io5';

import { IconButton } from '../..';
import { Styles } from './Pagination.styles';

/*
 * Pagination
 */

const Types = {
  breakLabel: PropTypes.node,
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number.isRequired,
};

type Props = InferProps<typeof Types>;

export const Pagination = ({
  breakLabel,
  onPageChange,
  pageCount,
  ...props
}: Props) => {
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
        onPageChange={(page) => onPageChange(page.selected)}
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

Pagination.propTypes = Types;

export default Pagination;
