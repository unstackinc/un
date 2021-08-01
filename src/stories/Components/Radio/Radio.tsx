// Radio.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Label } from '../../';
import { Styles } from './Radio.styles';

const Types = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
};

type Props = InferProps<typeof Types>;

export const Radio = ({
  disabled,
  full,
  id,
  label,
  name,
  onChange,
  onClick,
  value,
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
        onChange={onChange}
        onClick={onClick}
        {...props}
      />
    </Label>
  );
};

Radio.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
};

Radio.propTypes = Types;

export default Radio;
