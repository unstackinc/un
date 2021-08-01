// Toggle.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Label } from '../..';
import { Styles } from './Toggle.styles';

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

export const Toggle = ({
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
        onChange={onChange}
        onClick={onClick}
        {...props}
      />
    </Label>
  );
};

Toggle.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
};

Toggle.propTypes = Types;

export default Toggle;
