// Toggle.tsx

import * as React from 'react';

import { Label } from '../..';
import { Styles } from './Toggle.styles';

interface ToggleProps {
  label?: string;
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  full?: boolean;
  disabled?: boolean;
  onClick?: any;
}

export const Toggle = ({
  label,
  id,
  name,
  value,
  checked,
  full,
  disabled,
  ...props
}: ToggleProps) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      inline
      before
      control={
        <span className="control" role="presentation" aria-hidden="true"></span>
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

Toggle.defaultProps = {
  disabled: false,
  onClick: undefined,
};

export default Toggle;
