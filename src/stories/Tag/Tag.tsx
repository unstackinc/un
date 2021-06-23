/** @jsxImportSource @emotion/react */
// Tag.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { UnTag } from './Tag.styles';

interface TagProps {
  variant?: 'primary' | 'yellow' | 'green' | 'outline' | 'outlineBlue';
  color?: string;
  background?: string;
  children: React.ReactNode;
}

export const Tag: React.FunctionComponent<TagProps> = ({
  variant,
  color,
  background,
  children,
  ...props
}) => {
  return (
    <UnTag
      variant={variant}
      css={css`
        background: ${background} !important;
        color: ${color} !important;
      `}
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
