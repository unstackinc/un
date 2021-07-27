// Button.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import {
  Styles,
  TertiaryVariant,
  OutlineVariant,
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
  large: PropTypes.bool,
  onClick: PropTypes.any,
  ref: PropTypes.any,
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
  large,
  onClick,
  ref,
  variant,
  warning,
  ...props
}: Props) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`${warning && 'warning'}`}
      sx={{ variant: `buttons.${variant}` }}
      css={[
        Styles,
        large && LargeStyles,
        full && FullStyles,
        variant === 'tertiary' && TertiaryVariant,
        variant === 'outline' && OutlineVariant,
        css`
          background-color: ${background};
          color: ${color};
        `,
      ]}
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
  onClick: undefined,
  variant: 'primary',
};

Button.propTypes = Types;

export default Button;
