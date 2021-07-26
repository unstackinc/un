// Textbox.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Label } from '../../';
import { Styles, FullStyles, WarningStyles } from './Textbox.styles';

const Types = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.any,
  placeholder: PropTypes.string.isRequired,
  warning: PropTypes.bool,
  warningText: PropTypes.string,
};

type Props = InferProps<typeof Types>;

export const Textbox = ({
  disabled,
  full,
  helpText,
  id,
  name,
  label,
  onClick,
  placeholder,
  warning,
  warningText,
  ...props
}: Props) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      warningText={warningText}
      helpText={helpText}
    >
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        css={[Styles, full && FullStyles, warning && WarningStyles]}
        {...props}
      ></input>
    </Label>
  );
};

Textbox.defaultProps = {
  disabled: false,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

Textbox.propTypes = Types;

export default Textbox;
