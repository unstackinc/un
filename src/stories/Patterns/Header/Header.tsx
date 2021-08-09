// Header.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Styles, ContainerStyles, TabsStyles } from './Header.styles';

const Types = {
  children: PropTypes.node,
  end: PropTypes.node,
  padding: PropTypes.string,
  start: PropTypes.node,
  tabs: PropTypes.node,
};

type Props = InferProps<typeof Types>;

export const Header = ({
  children,
  end,
  padding,
  start,
  tabs,
  ...props
}: Props) => {
  return (
    <header
      css={[
        Styles,
        css`
          padding: 0 ${padding};
        `,
      ]}
      {...props}
    >
      <div css={ContainerStyles}>
        <span>{start}</span>
        <span
          css={css`
            flex-grow: 1;
          `}
        >
          {children}
        </span>
        <span>{end}</span>
      </div>
      <div css={TabsStyles}>{tabs}</div>
    </header>
  );
};

Header.propTypes = Types;

export default Header;
