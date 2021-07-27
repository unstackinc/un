// Header.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Styles, ContainerStyles } from './Header.styles';

const Types = {
  children: PropTypes.node,
  end: PropTypes.node,
  padding: PropTypes.number,
  start: PropTypes.node,
};

type Props = InferProps<typeof Types>;

export const Header = ({ children, end, padding, start, ...props }: Props) => {
  return (
    <header css={Styles} {...props}>
      <div
        css={[
          ContainerStyles,
          css`
            padding: 0 ${padding};
          `,
        ]}
      >
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
    </header>
  );
};

Header.propTypes = Types;

export default Header;
