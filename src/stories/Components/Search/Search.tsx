// Search.tsx

import * as React from 'react';

import { IoSearch } from 'react-icons/io5';

import {
  Styles,
  InputStyles,
  FullStyles,
  WarningStyles,
} from './Search.styles';

interface Props {
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
}: Props) => {
  return (
    <label id={id} css={[Styles, full && FullStyles]}>
      <IoSearch />
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
