/** @jsxImportSource @emotion/react */
// Radio.tsx

import * as React from 'react';

import { UnRadio } from './Radio.styles';

interface RadioProps {
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
}: RadioProps) => {
  return (
    <UnRadio
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      inline
      after
      control={<span className="control"></span>}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        {...props}
      />
    </UnRadio>
  );
};

Radio.defaultProps = {
  disabled: false,
  onClick: undefined,
};

export default Radio;
