/** @jsxImportSource @emotion/react */
// Button.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { UnButton } from './Button.styles';
import { fontSizes } from '../../theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'warning';
  color?: string;
  background?: string;
  large?: boolean;
  full?: boolean;
  disabled?: boolean;
  onClick?: any;
  before: React.ReactNode;
  children: React.ReactNode;
  after: React.ReactNode;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  variant,
  color,
  background,
  large,
  full,
  disabled,
  before,
  children,
  after,
  ...props
}) => {
  return (
    <UnButton
      variant={variant}
      className={[large ? 'large' : '', full ? 'full' : ''].join(' ')}
      disabled={disabled}
      css={css`
        background: ${background} !important;
        color: ${color} !important;
        ${fontSizes[1]};
        -webkit-appearance: none;
        &.large {
          ${fontSizes[2]};
        }
      `}
      {...props}
    >
      {before}
      {children}
      {after}
    </UnButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  color: 'null',
  background: 'null',
  large: false,
  full: false,
  disabled: false,
  onClick: undefined,
};

export default Button;
