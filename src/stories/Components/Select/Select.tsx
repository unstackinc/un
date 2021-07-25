// Select.tsx

import * as React from 'react';
import { Fragment, ReactNode } from 'react';

import { Label } from '../..';
import {
  Styles,
  OptionStyles,
  FullStyles,
  WarningStyles,
  DisabledStyles,
} from './Select.styles';

interface SelectProps {
  options: any[];
  label?: string;
  id?: string;
  name?: string;
  warningText?: string;
  helpText?: string;
  placeholder?: string;
  value: string | number;
  full?: boolean;
  warning?: boolean;
  disabled?: boolean;
  onClick?: any;
  onChange?: any;
}

export const Select = ({
  options,
  label,
  id,
  name,
  value,
  warningText,
  helpText,
  placeholder,
  full,
  onChange,
  warning,
  onClick,
  disabled,
  ...props
}: SelectProps) => {
  return (
    <Label id={id} label={label} disabled={disabled} full={full}>
      <select
        id={id}
        name={name}
        css={[
          Styles,
          full && FullStyles,
          warning && WarningStyles,
          disabled && DisabledStyles,
        ]}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...props}
      >
        {options.map((option, index) => {
          return (
            <Fragment key={`${option.toString()}-${index}`}>{option}</Fragment>
          );
        })}
      </select>
      {warningText && <div className="warning-text">{warningText}</div>}
      {helpText && <div className="help-text">{helpText}</div>}
    </Label>
  );
};

Select.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

interface OptionProps {
  value: string | number;
  children: ReactNode;
}

export const SelectOption = ({ value, children, ...props }: OptionProps) => {
  return (
    <option value={value} css={OptionStyles} {...props}>
      {children}
    </option>
  );
};

SelectOption.defaultProps = {
  value: 'Placeholder',
};

export default Select;
