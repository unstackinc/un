import { ReactNode } from 'react';

import { Label } from '../Typography';
import {
  Styles,
  OptionStyles,
  FullStyles,
  WarningStyles,
  DisabledStyles,
} from './Select.styles';

type OptionProps = {
  name: ReactNode;
  value: string | number;
};

export type SelectProps = {
  disabled?: boolean;
  full?: boolean;
  helpText?: string;
  id?: string;
  label?: string;
  name?: string;
  onChange?: any;
  onClick?: any;
  options: OptionProps[];
  placeholder?: string;
  value: string | number;
  warning?: boolean;
  warningText?: string;
};

export const Select = ({
  disabled,
  full,
  helpText,
  id,
  label,
  name,
  onChange,
  onClick,
  options,
  placeholder,
  value,
  warning,
  warningText,
  ...props
}: SelectProps) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      helpText={helpText}
      warningText={warningText}
    >
      <select
        id={id}
        name={name}
        css={[
          Styles,
          full && FullStyles,
          warning && WarningStyles,
          disabled && DisabledStyles,
        ]}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        {...props}
      >
        {options.map((option, index) => {
          const { name, value } = option;
          return (
            <option
              css={OptionStyles}
              key={`${option.toString()}-${index}`}
              value={value}
            >
              {name}
            </option>
          );
        })}
      </select>
    </Label>
  );
};

Select.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};
