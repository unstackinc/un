// Textarea.tsx

import * as React from 'react';

import { Label } from '../../';
import { Styles, FullStyles, WarningStyles } from './Textarea.styles';

interface Props {
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

export const Textarea = ({
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
        {...props}
      ></textarea>
    </Label>
  );
};

Textarea.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

export default Textarea;
