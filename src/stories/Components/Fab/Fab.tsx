/** @jsxImportSource @emotion/react */
// Fab.tsx

import * as React from 'react';
import { css } from '@emotion/react';
import { animated, useSpring, config } from 'react-spring';

import { UnFab } from './Fab.styles';
import { fontSizes } from '../../../theme';

interface FabProps {
  variant?: 'small' | 'medium' | 'large';
  color?: string;
  disabled?: boolean;
  onClick?: any;
  children: React.ReactNode;
}

export const Fab = ({
  variant,
  color,
  disabled,
  children,
  ...props
}: FabProps) => {
  const AnimatedUnFab = animated(UnFab);
  const [{ transform }, setTransform] = useSpring(() => ({
    transform: 'scale(1)',
    config: config.wobbly,
  }));
  return (
    <AnimatedUnFab
      className={variant}
      disabled={disabled}
      css={css`
        ${fontSizes[2]};
        -webkit-appearance: none;
        &.medium,
        &.large {
          ${fontSizes[3]};
        }
        svg {
          stroke: ${color};
        }
      `}
      style={{ transform }}
      onMouseDown={() => setTransform({ transform: 'scale(0.9)' })}
      onMouseUp={() => setTransform({ transform: 'scale(1)' })}
      {...props}
    >
      {children}
    </AnimatedUnFab>
  );
};

Fab.defaultProps = {
  variant: 'small',
  color: 'null',
  disabled: false,
  onClick: undefined,
};

export default Fab;
