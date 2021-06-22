// Button.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { UnButton } from './Button.styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'warning';
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

/* FIX: Color and background not setting properly */

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
        background-color: ${background};
        color: ${color};
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
