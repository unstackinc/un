/** @jsxImportSource @emotion/react */
// Button.tsx

import * as React from 'react';
import { css } from '@emotion/react';
import { animated, useSpring, config } from 'react-spring';

import { UnButton } from './Button.styles';
import { fontSizes } from '../../theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'warning';
  color?: string;
  background?: string;
  large?: boolean;
  full?: boolean;
  disabled?: boolean;
  before?: React.ReactNode;
  children: React.ReactNode;
  after?: React.ReactNode;
  onClick?: any;
}

const getAnimation = (active) => {
  return {
    opacity: active ? 1 : 0,
    transform: active ? `translateY(0)` : `translateY(-200%)`,
  };
};

export const Button = ({
  variant,
  color,
  background,
  large,
  full,
  disabled,
  before,
  children,
  after,
  ...props
}: ButtonProps) => {
  const AnimatedUnButton = animated(UnButton);
  const [{ transform }, setTransform] = useSpring(() => ({
    transform: 'scale(1)',
    config: config.wobbly,
  }));
  return (
    <AnimatedUnButton
      variant={variant}
      className={[large ? 'large' : '', full ? 'full' : ''].join(' ')}
      disabled={disabled}
      css={css`
        background: ${background} !important;
        color: ${color} !important;
        ${fontSizes[1]};
        -webkit-appearance: none;
        &.large {
          ${fontSizes[2]};
        }
      `}
      style={{ transform }}
      onMouseDown={() => setTransform({ transform: 'scale(0.9)' })}
      onMouseUp={() => setTransform({ transform: 'scale(1)' })}
      {...props}
    >
      {before}
      {children}
      {after}
    </AnimatedUnButton>
  );
};

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
