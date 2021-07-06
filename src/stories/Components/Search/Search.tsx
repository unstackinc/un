// Search.tsx

import * as React from 'react';

import { FiSearch } from 'react-icons/fi';

import {
  LabelStyles,
  InputStyles,
  FullStyles,
  WarningStyles,
} from './Search.styles';

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
    <label id={id} css={[LabelStyles, full && FullStyles]}>
      <FiSearch />
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        css={[InputStyles, full && FullStyles, warning && WarningStyles]}
        {...props}
      />
    </label>
  );
};

Search.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

export default Search;
