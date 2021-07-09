// Button.tsx

import * as React from 'react';

import { css } from '@emotion/react';

import {
  PrimaryVariant,
  SecondaryVariant,
  TertiaryVariant,
  OutlineVariant,
} from './Button.variants';
import {
  Styles,
  LargeStyles,
  FullStyles,
  WarningStyles,
  WarningTertiaryStyles,
  WarningOutlineStyles,
} from './Button.styles';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  color?: string;
  background?: string;
  large?: boolean;
  full?: boolean;
  warning?: boolean;
  disabled?: boolean;
  before?: React.ReactNode;
  children: React.ReactNode;
  after?: React.ReactNode;
  onClick?: any;
}

export const Button = ({
  variant,
  color,
  background,
  large,
  full,
  warning,
  disabled,
  before,
  children,
  after,
  onClick,
  ...props
}: Props) => {
  let Variant;
  let Warning;

  switch (variant) {
    case 'primary':
      Variant = PrimaryVariant;
      Warning = WarningStyles;
      break;
    case 'secondary':
      Variant = SecondaryVariant;
      Warning = WarningStyles;
      break;
    case 'tertiary':
      Variant = TertiaryVariant;
      Warning = WarningTertiaryStyles;
      break;
    case 'outline':
      Variant = OutlineVariant;
      Warning = WarningOutlineStyles;
      break;
    default:
      Variant = PrimaryVariant;
      Warning = WarningStyles;
  }

  return (
    <button
      // variant={variant}
      disabled={disabled}
      css={[
        Styles,
        Variant,
        large && LargeStyles,
        full && FullStyles,
        warning && Warning,
        css`
          background-color: ${background};
          color: ${color};
        `,
      ]}
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
  variant: 'primary',
  disabled: false,
  onClick: undefined,
};

export default Button;
