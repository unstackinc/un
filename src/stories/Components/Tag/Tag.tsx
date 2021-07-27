// Tag.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Styles, OutlineVariant, SmallStyles } from './Tag.styles';

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
  return (
    <span
      sx={{ variant: `tags.${variant}` }}
      css={[
        Styles,
        variant === 'outline' && OutlineVariant,
        variant === 'outlineBlue' && OutlineVariant,
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
