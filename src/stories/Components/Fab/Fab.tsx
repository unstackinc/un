/** @jsxImportSource @emotion/react */
// Fab.tsx

import * as React from 'react';
import { forwardRef } from 'react';
import { css } from '@emotion/react';

import { UnFab } from './Fab.styles';
import { fontSizes } from '../../../theme';

interface Props {
  variant?: 'small' | 'medium' | 'large';
  color?: string;
  disabled?: boolean;
  onClick?: any;
  children: React.ReactNode;
}

type Ref = HTMLButtonElement;

export const Fab = forwardRef<Ref, Props>((props, ref) => {
  return (
    <UnFab
      ref={ref}
      className={props.variant}
      disabled={props.disabled}
      css={css`
        ${fontSizes[2]};
        -webkit-appearance: none;
        &.medium,
        &.large {
          ${fontSizes[3]};
        }
        svg {
          stroke: ${props.color};
        }
      `}
      {...props}
    >
      {props.children}
    </UnFab>
  );
});

Fab.defaultProps = {
  variant: 'small',
  color: 'null',
  disabled: false,
  onClick: undefined,
};

export default Fab;
