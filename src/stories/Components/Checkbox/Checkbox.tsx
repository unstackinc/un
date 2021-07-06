// Checkbox.tsx

import * as React from 'react';

import { FiCheck } from 'react-icons/fi';

import { Label } from '../..';
import { Styles } from './Checkbox.styles';

interface CheckboxProps {
  label?: string;
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  full?: boolean;
  disabled?: boolean;
  onClick?: any;
}

export const Checkbox = ({
  label,
  id,
  name,
  value,
  checked,
  full,
  disabled,
  ...props
}: CheckboxProps) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      inline
      after
      control={
        <span className="control">
          <FiCheck />
        </span>
      }
      css={Styles}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        {...props}
      />
    </Label>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  onClick: undefined,
};

export default Checkbox;
