/** @jsxImportSource @emotion/react */
// Button.tsx

import * as React from 'react';
import { forwardRef } from 'react';
import { css } from '@emotion/react';

import { UnButton, Styles, LargeStyles, FullStyles } from './Button.styles';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'warning';
  color?: string;
  background?: string;
  large?: boolean;
  full?: boolean;
  disabled?: boolean;
  before?: React.ReactNode;
  children: React.ReactNode;
  after?: React.ReactNode;
  onClick?: Function;
}

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, Props>((props, ref) => {
  return (
    <UnButton
      ref={ref}
      variant={props.variant}
      disabled={props.disabled}
      css={[
        Styles,
        props.large && LargeStyles,
        props.full && FullStyles,
        css`
          background: ${props.background} !important;
          color: ${props.color} !important;
        `,
      ]}
      {...props}
    >
      {props.before}
      {props.children}
      {props.after}
    </UnButton>
  );
});

Button.defaultProps = {
  variant: 'primary',
  color: 'null',
  background: 'null',
  large: false,
  full: false,
  disabled: false,
  onClick: undefined,
};

export default Button;
