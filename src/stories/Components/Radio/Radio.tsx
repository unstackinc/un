// Radio.tsx

import * as React from 'react';

import { Label } from '../../';
import { Styles } from './Radio.styles';

interface Props {
  label?: string;
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  full?: boolean;
  disabled?: boolean;
  onClick?: any;
}

export const Radio = ({
  label,
  id,
  name,
  value,
  checked,
  full,
  disabled,
  ...props
}: Props) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      inline
      after
      control={<span className="control"></span>}
      css={Styles}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        {...props}
      />
    </Label>
  );
};

Radio.defaultProps = {
  disabled: false,
  onClick: undefined,
};

export default Radio;
