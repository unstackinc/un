/** @jsxImportSource @emotion/react */
// Dropdown.tsx

import * as React from 'react';

import { Label } from '../../';
import {
  UnDropdown,
  UnDropdownOption,
  DropdownStyles,
  WarningStyles,
  DisabledStyles,
  OptionStyles,
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
      <UnDropdown
        id={id}
        name={name}
        className={full && 'full'}
        css={[
          DropdownStyles,
          warning && WarningStyles,
          disabled && DisabledStyles,
        ]}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      >
        {options.map((option, index) => {
          return (
            <React.Fragment key={`${option.toString()}-${index}`}>
              {option}
            </React.Fragment>
          );
        })}
      </UnDropdown>
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
  children: React.ReactNode;
}

export const DropdownOption = ({ value, children, ...props }: OptionProps) => {
  return (
    <UnDropdownOption value={value} css={OptionStyles} {...props}>
      {children}
    </UnDropdownOption>
  );
};

DropdownOption.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

export default Dropdown;
