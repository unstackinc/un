// Tag.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Styles, SmallStyles } from './Tag.styles';

const Types = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['info', 'danger', 'warning', 'success']),
};

type Props = InferProps<typeof Types>;

export const Tag = ({
  background,
  children,
  color,
  size,
  variant,
  ...props
}: Props) => {
  return (
    <span
      sx={{ variant: `tags.${variant}` }}
      css={[
        Styles,
        size === 'small' && SmallStyles,
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
  size: 'medium',
  variant: 'primary',
};

Tag.propTypes = Types;

export default Tag;
