import { IoSearch } from 'react-icons/io5';

import {
  Styles,
  InputStyles,
  FullStyles,
  WarningStyles,
} from './Search.styles';

export type SearchProps = {
  disabled?: boolean;
  full?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  name: string;
  onChange?: any;
  onClick?: any;
  placeholder: string;
  value?: string;
  warning?: boolean;
  warningText?: string;
};

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
}: SearchProps) => {
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
