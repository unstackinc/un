// Button.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import {
  Styles,
  TertiaryVariant,
  OutlineVariant,
  SmallStyles,
  LargeStyles,
  FullStyles,
} from './Button.styles';

const Types = {
  after: PropTypes.node,
  background: PropTypes.string,
  before: PropTypes.node,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'outline']),
  warning: PropTypes.bool,
};

type Props = InferProps<typeof Types>;

export const Button = ({
  after,
  background,
  before,
  children,
  color,
  disabled,
  full,
  onChange,
  onClick,
  size,
  variant,
  warning,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={`${warning && 'warning'}`}
      sx={{ variant: `buttons.${variant}` }}
      css={[
        Styles,
        size === 'small' && SmallStyles,
        size === 'large' && LargeStyles,
        full && FullStyles,
        variant === 'tertiary' && TertiaryVariant,
        variant === 'outline' && OutlineVariant,
        css`
          background-color: ${background};
          color: ${color};
        `,
      ]}
      onChange={onChange}
      onClick={onClick}
      {...props}
    >
      {before}
      {children}
      {after}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  size: 'medium',
  variant: 'primary',
};

Button.propTypes = Types;

export default Button;
