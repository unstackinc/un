// Sidebar.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Styles } from './Sidebar.styles';

const Types = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  heading: PropTypes.node,
};

type Props = InferProps<typeof Types>;

export const Sidebar = ({ children, ...props }: Props) => {
  return (
    <aside css={Styles} {...props}>
      {children}
    </aside>
  );
};

Sidebar.propTypes = Types;

export default Sidebar;
