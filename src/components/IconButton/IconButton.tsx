import { ReactNode } from 'react';
import { css } from '@emotion/react';

import { Styles, MediumStyles, LargeStyles } from './IconButton.styles';

export type IconButtonProps = {
  children: ReactNode;
  color?: string;
  disabled?: boolean;
  onChange?: any;
  onClick?: any;
  size?: 'small' | 'medium' | 'large';
};

export const IconButton = ({
  children,
  color,
  disabled,
  onChange,
  onClick,
  size,
  ...props
}: IconButtonProps) => {
  return (
    <button
      disabled={disabled}
      css={[
        Styles,
        size === 'medium' && MediumStyles,
        size === 'large' && LargeStyles,
        css`
          svg {
            stroke: ${color};
          }
        `,
      ]}
      onChange={onChange}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  size: 'small',
};
