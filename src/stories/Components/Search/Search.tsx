/** @jsxImportSource @emotion/react */
// Search.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { FiSearch } from 'react-icons/fi';

import { Label } from '../..';
import { UnSearchWrapper, UnSearch } from './Search.styles';
import { fontSizes } from '../../../theme';

interface SearchProps {
  label?: string;
  id: string;
  name: string;
  warningText?: string;
  helpText?: string;
  placeholder: string;
  full?: boolean;
  warning?: boolean;
  disabled?: boolean;
  onClick?: any;
}

export const Search = ({
  label,
  id,
  name,
  warningText,
  helpText,
  placeholder,
  full,
  warning,
  disabled,
  ...props
}: SearchProps) => {
  return (
    <UnSearchWrapper id={id}>
      <FiSearch />
      <UnSearch
        type="text"
        id={id}
        name={name}
        className={[full ? 'full' : '', warning ? 'warning' : ''].join(' ')}
        placeholder={placeholder}
        disabled={disabled}
        css={css`
          ${fontSizes[2]};
        `}
        {...props}
      />
    </UnSearchWrapper>
  );
};

Search.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

export default Search;
