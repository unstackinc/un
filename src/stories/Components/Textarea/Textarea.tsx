// Textarea.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Label } from '../../';
import { Styles, FullStyles, WarningStyles } from './Textarea.styles';

const Types = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  warning: PropTypes.bool,
  warningText: PropTypes.string,
};

type Props = InferProps<typeof Types>;

export const Textarea = ({
  disabled,
  full,
  helpText,
  id,
  label,
  name,
  onChange,
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
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        css={[Styles, full && FullStyles, warning && WarningStyles]}
        onChange={onChange}
        onClick={onClick}
        {...props}
      ></textarea>
    </Label>
  );
};

Textarea.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

Textarea.propTypes = Types;

export default Textarea;
