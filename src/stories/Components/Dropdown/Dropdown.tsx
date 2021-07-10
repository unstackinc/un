// Dropdown.tsx

import * as React from 'react';
import { Fragment, ReactNode } from 'react';

import { Label } from '../../';
import {
  DropdownStyles,
  OptionStyles,
  FullStyles,
  WarningStyles,
  DisabledStyles,
} from './Dropdown.styles';

interface DropdownProps {
  options: any;
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

export const Dropdown = ({
  options,
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
}: DropdownProps) => {
  return (
    <Label id={id} label={label} disabled={disabled} full={full}>
      <select
        id={id}
        name={name}
        css={[
          DropdownStyles,
          full && FullStyles,
          warning && WarningStyles,
          disabled && DisabledStyles,
        ]}
        placeholder={placeholder}
        disabled={disabled}
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

Dropdown.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

interface OptionProps {
  value: string;
  children: ReactNode;
}

export const DropdownOption = ({ value, children, ...props }: OptionProps) => {
  return (
    <option value={value} css={OptionStyles} {...props}>
      {children}
    </option>
  );
};

DropdownOption.defaultProps = {
  value: 'Placeholder',
};

export default Dropdown;
