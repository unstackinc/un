// Sidemenu.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
  Styles,
  HeadingStyles,
  BodyStyles,
  FooterStyles,
} from './Sidemenu.styles';

const Types = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  heading: PropTypes.node,
};

type Props = InferProps<typeof Types>;

export const Sidemenu = ({ children, ...props }: Props) => {
  return (
    <aside css={Styles} {...props}>
      <div css={HeadingStyles}></div>
      <div css={BodyStyles}>{children}</div>
      <div css={FooterStyles}></div>
    </aside>
  );
};

Sidemenu.defaultProps = {
  title: 'Title',
};

Sidemenu.propTypes = Types;

export default Sidemenu;
