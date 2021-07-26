// Main.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Styles } from './Main.styles';

const Types = {
  children: PropTypes.node.isRequired,
};

type Props = InferProps<typeof Types>;

export const Main = ({ children, ...props }: Props) => {
  return (
    <main css={Styles} {...props}>
      {children}
    </main>
  );
};

Main.propTypes = Types;

export default Main;
