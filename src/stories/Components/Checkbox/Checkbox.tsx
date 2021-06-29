/** @jsxImportSource @emotion/react */
// Checkbox.tsx

import * as React from 'react';

import { FiCheck } from 'react-icons/fi';

import { UnCheckbox } from './Checkbox.styles';

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
    <UnCheckbox
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
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        {...props}
      />
    </UnCheckbox>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  onClick: undefined,
};

export default Checkbox;
