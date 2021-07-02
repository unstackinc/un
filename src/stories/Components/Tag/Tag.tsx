/** @jsxImportSource @emotion/react */
// Tag.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { UnTag, TagStyles, SmallStyles } from './Tag.styles';

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
  return (
    <UnTag
      variant={variant}
      css={[
        TagStyles,
        small && SmallStyles,
        css`
          background: ${background} !important;
          color: ${color} !important;
        `,
      ]}
      {...props}
    >
      {children}
    </UnTag>
  );
};

Tag.defaultProps = {
  variant: 'primary',
  color: 'null',
  background: 'null',
};

export default Tag;
