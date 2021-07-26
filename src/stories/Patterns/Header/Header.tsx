// Header.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Styles, ContainerStyles } from './Header.styles';

const Types = {
  end: PropTypes.node,
  start: PropTypes.node,
};

type Props = InferProps<typeof Types>;

export const Header = ({ end, start, ...props }: Props) => {
  return (
    <header css={Styles} {...props}>
      <div css={ContainerStyles}>
        <span>{start}</span>
        <span>{end}</span>
      </div>
    </header>
  );
};

Header.propTypes = Types;

export default Header;
