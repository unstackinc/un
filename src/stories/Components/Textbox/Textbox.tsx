/** @jsxImportSource @emotion/react */
// Textbox.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { Label } from '../../';
import { UnTextbox } from './Textbox.styles';
import { fontSizes } from '../../../theme';

interface TextboxProps {
  label?: string;
  warningText?: string;
  helpText?: string;
  placeholder: string;
  full?: boolean;
  warning?: boolean;
  disabled?: boolean;
  onClick?: any;
}

export const Textbox = ({
  label,
  warningText,
  helpText,
  placeholder,
  full,
  warning,
  disabled,
  ...props
}: TextboxProps) => {
  return (
    <Label full={full}>
      {label && (
        <div
          className="label-text"
          css={css`
            ${disabled &&
            css`
              cursor: auto !important;
            `}
          `}
        >
          {label}
        </div>
      )}
      <UnTextbox
        className={[full ? 'full' : '', warning ? 'warning' : ''].join(' ')}
        placeholder={placeholder}
        disabled={disabled}
        css={css`
          ${fontSizes[2]};
        `}
        {...props}
      ></UnTextbox>
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

Textbox.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

export default Textbox;
