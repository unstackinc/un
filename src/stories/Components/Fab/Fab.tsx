// Fab.tsx

import * as React from 'react';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import { Styles, MediumStyles, LargeStyles } from './Fab.styles';

interface Props {
  variant?: 'small' | 'medium' | 'large';
  color?: string;
  disabled?: boolean;
  onClick?: any;
  children: ReactNode;
}

export const Fab = ({
  variant,
  color,
  disabled,
  onClick,
  children,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      css={[
        Styles,
        variant === 'medium' && MediumStyles,
        variant === 'large' && LargeStyles,
        css`
          svg {
            stroke: ${color};
          }
        `,
      ]}
      {...props}
    >
      {children}
    </button>
  );
};

Fab.defaultProps = {
  variant: 'small',
  color: 'null',
  disabled: false,
  onClick: undefined,
};

export default Fab;
