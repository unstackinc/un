// Fab.tsx

import * as React from 'react';
import { forwardRef } from 'react';
import { css } from '@emotion/react';

import { Styles, MediumStyles, LargeStyles } from './Fab.styles';

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
    <button
      ref={ref}
      disabled={props.disabled}
      css={[
        Styles,
        props.variant === 'medium' && MediumStyles,
        props.variant === 'large' && LargeStyles,
        css`
          svg {
            stroke: ${props.color};
          }
        `,
      ]}
      {...props}
    >
      {props.children}
    </button>
  );
});

Fab.defaultProps = {
  variant: 'small',
  color: 'null',
  disabled: false,
  onClick: undefined,
};

export default Fab;
