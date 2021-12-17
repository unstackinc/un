import { ReactNode } from 'react';
import { css } from '@emotion/react';

import { Styles, SmallStyles } from './Tag.styles';

export type TagProps = {
  background?: string;
  children: ReactNode;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'info' | 'danger' | 'warning' | 'success';
};

export const Tag = ({
  background,
  children,
  color,
  size,
  variant,
  ...props
}: TagProps) => {
  return (
    <span
      sx={{ variant: `tags.${variant}` }}
      css={[
        Styles,
        size === 'small' && SmallStyles,
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
  size: 'medium',
  variant: 'primary',
};
