// Tag.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import {
  PrimaryVariant,
  YellowVariant,
  GreenVariant,
  OutlineVariant,
  OutlineBlueVariant,
} from './Tag.variants';
import { Styles, SmallStyles } from './Tag.styles';

const Types = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  small: PropTypes.bool,
  variant: PropTypes.oneOf([
    'primary',
    'yellow',
    'green',
    'outline',
    'outlineBlue',
  ]),
};

type Props = InferProps<typeof Types>;

export const Tag = ({
  background,
  children,
  color,
  small,
  variant,
  ...props
}: Props) => {
  let Variant;
  switch (variant) {
    case 'primary':
      Variant = PrimaryVariant;
      break;
    case 'yellow':
      Variant = YellowVariant;
      break;
    case 'green':
      Variant = GreenVariant;
      break;
    case 'outline':
      Variant = OutlineVariant;
      break;
    case 'outlineBlue':
      Variant = OutlineBlueVariant;
      break;
    default:
      Variant = PrimaryVariant;
  }

  return (
    <span
      // variant={variant}
      css={[
        Styles,
        Variant,
        small && SmallStyles,
        css`
          background-color: ${background};
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  variant: 'primary',
};

Tag.propTypes = Types;

export default Tag;
