// Tag.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import {
  PrimaryVariant,
  YellowVariant,
  GreenVariant,
  OutlineVariant,
  OutlineBlueVariant,
} from './Tag.variants';
import { Styles, SmallStyles } from './Tag.styles';

interface TagProps {
  variant?: 'primary' | 'yellow' | 'green' | 'outline' | 'outlineBlue';
  color?: string;
  background?: string;
  small?: boolean;
  children: React.ReactNode;
}

export const Tag = ({
  variant,
  color,
  background,
  small,
  children,
  ...props
}: TagProps) => {
  let Variant;
  switch (variant) {
    case 'primary':
      Variant = PrimaryVariant;
      break;
    case 'yellow':
      Variant = YellowVariant;
      break;
    case 'green':
      Variant = GreenVariant;
      break;
    case 'outline':
      Variant = OutlineVariant;
      break;
    case 'outlineBlue':
      Variant = OutlineBlueVariant;
      break;
    default:
      Variant = PrimaryVariant;
  }

  return (
    <span
      // variant={variant}
      css={[
        Styles,
        Variant,
        small && SmallStyles,
        css`
          background-color: ${background};
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  variant: 'primary',
  color: 'null',
  background: 'null',
};

export default Tag;
