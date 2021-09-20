// Button.tsx

// import React from 'react';
import { css } from '@emotion/react';

import {
  Styles,
  TertiaryVariant,
  OutlineVariant,
  SmallStyles,
  LargeStyles,
  FullStyles,
} from './Button.styles';

interface IProps {
  after?: Node;
  background?: string;
  before?: Node;
  children: Node;
  color?: string;
  disabled?: boolean | undefined;
  full?: boolean;
  onChange?: () => void;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  warning?: boolean;
}

export default ({
  after,
  background,
  before,
  children,
  color,
  disabled = false,
  full,
  onChange = () => {},
  onClick = () => {},
  size = 'medium',
  variant = 'primary',
  warning,
  ...props
}: IProps) => (
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
