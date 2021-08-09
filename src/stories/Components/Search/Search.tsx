// Search.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { IoSearch } from 'react-icons/io5';

import {
  Styles,
  InputStyles,
  FullStyles,
  WarningStyles,
} from './Search.styles';

const Types = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  warning: PropTypes.bool,
  warningText: PropTypes.string,
};

type Props = InferProps<typeof Types>;

export const Search = ({
  disabled,
  full,
  helpText,
  id,
  label,
  name,
  onChange,
  onClick,
  placeholder,
  value,
  warning,
  warningText,
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
        value={value}
        onChange={onChange}
        onClick={onClick}
        {...props}
      />
    </label>
  );
};

Search.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

Search.propTypes = Types;

export default Search;
