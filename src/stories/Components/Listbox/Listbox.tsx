// Listbox.tsx

import * as React from 'react';
import { Fragment, ReactNode } from 'react';

import { Label } from '../..';
import {
  ListboxStyles,
  OptionStyles,
  FullStyles,
  WarningStyles,
  DisabledStyles,
} from './Listbox.styles';

interface ListboxProps {
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

export const Listbox = ({
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
}: ListboxProps) => {
  return (
    <Label id={id} label={label} disabled={disabled} full={full}>
      <select
        id={id}
        name={name}
        css={[
          ListboxStyles,
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

Listbox.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

interface OptionProps {
  value: string;
  children: ReactNode;
}

export const ListboxOption = ({ value, children, ...props }: OptionProps) => {
  return (
    <option value={value} css={OptionStyles} {...props}>
      {children}
    </option>
  );
};

ListboxOption.defaultProps = {
  value: 'Placeholder',
};

export default Listbox;
