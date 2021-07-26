// Button.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { css } from '@emotion/react';

import {
  PrimaryVariant,
  SecondaryVariant,
  TertiaryVariant,
  OutlineVariant,
} from './Button.variants';
import {
  Styles,
  LargeStyles,
  FullStyles,
  WarningStyles,
  WarningTertiaryStyles,
  WarningOutlineStyles,
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
  let Variant;
  let Warning;

  switch (variant) {
    case 'primary':
      Variant = PrimaryVariant;
      Warning = WarningStyles;
      break;
    case 'secondary':
      Variant = SecondaryVariant;
      Warning = WarningStyles;
      break;
    case 'tertiary':
      Variant = TertiaryVariant;
      Warning = WarningTertiaryStyles;
      break;
    case 'outline':
      Variant = OutlineVariant;
      Warning = WarningOutlineStyles;
      break;
    default:
      Variant = PrimaryVariant;
      Warning = WarningStyles;
  }

  return (
    <button
      ref={ref}
      // variant={variant}
      disabled={disabled}
      css={[
        Styles,
        Variant,
        large && LargeStyles,
        full && FullStyles,
        warning && Warning,
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
