/** @jsxImportSource @emotion/react */
// Textarea.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { Label } from '../../';
import { UnTextarea } from './Textarea.styles';
import { fontSizes } from '../../../theme';

interface TextareaProps {
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
}: TextareaProps) => {
  return (
    <Label id={id} label={label} disabled={disabled} full={full}>
      <UnTextarea
        id={id}
        name={name}
        className={[full && 'full', warning && 'warning'].join(' ')}
        placeholder={placeholder}
        disabled={disabled}
        css={css`
          ${fontSizes[2]};
        `}
        {...props}
      ></UnTextarea>
      {warningText && (
        <div
          className="warning-text"
          css={css`
            ${fontSizes[1]};
          `}
        >
          {warningText}
        </div>
      )}
      {helpText && (
        <div
          className="help-text"
          css={css`
            ${fontSizes[1]};
          `}
        >
          {helpText}
        </div>
      )}
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
