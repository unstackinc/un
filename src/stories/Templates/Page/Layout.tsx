// Layout.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Styles, SidebarStyles } from './Layout.styles';

const Types = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  heading: PropTypes.node,
  sidebar: PropTypes.bool,
};

type Props = InferProps<typeof Types>;

export const Layout = ({ children, sidebar, ...props }: Props) => {
  return (
    <div css={[Styles, sidebar && SidebarStyles]} {...props}>
      {children}
    </div>
  );
};

Layout.propTypes = Types;

export default Layout;
