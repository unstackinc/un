import { ReactNode } from 'react';
import { css } from '@emotion/react';

import {
  Styles,
  TertiaryVariant,
  OutlineVariant,
  SmallStyles,
  LargeStyles,
  FullStyles,
} from './Button.styles';

export type ButtonProps = {
  after?: ReactNode;
  background?: string;
  before?: ReactNode;
  children: ReactNode;
  color?: string;
  disabled?: boolean;
  full?: boolean;
  onChange?: any;
  onClick?: any;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  warning?: boolean;
};

export const Button = ({
  after,
  background,
  before,
  children,
  color,
  disabled,
  full,
  onChange,
  onClick,
  size,
  variant,
  warning,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${warning && 'warning'}`}
      sx={{ variant: `buttons.${variant}` }}
      css={[
        Styles,
        size === 'small' && SmallStyles,
        size === 'large' && LargeStyles,
        full && FullStyles,
        variant === 'tertiary' && TertiaryVariant,
        variant === 'outline' && OutlineVariant,
        css`
          background-color: ${background};
          color: ${color};
        `,
      ]}
      onChange={onChange}
      onClick={onClick}
      {...props}
    >
      {before}
      {children}
      {after}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  size: 'medium',
  variant: 'primary',
};
