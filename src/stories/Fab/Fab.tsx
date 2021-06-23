/** @jsxImportSource @emotion/react */
// Fab.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { UnFab } from './Fab.styles';
import { fontSizes } from '../../theme';

interface FabProps {
  variant?: 'small' | 'medium' | 'large';
  color?: string;
  disabled?: boolean;
  onClick?: any;
  children: React.ReactNode;
}

export const Fab: React.FunctionComponent<FabProps> = ({
  variant,
  color,
  disabled,
  children,
  ...props
}) => {
  return (
    <UnFab
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
      {...props}
    >
      {children}
    </UnFab>
  );
};

Fab.defaultProps = {
  variant: 'small',
  color: 'null',
  disabled: false,
  onClick: undefined,
};

export default Fab;
