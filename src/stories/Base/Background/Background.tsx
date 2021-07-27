// Background.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Styles } from './Background.styles';

const Types = {
  children: PropTypes.node.isRequired,
};

type Props = InferProps<typeof Types>;

export const Background = ({ children, ...props }: Props) => {
  return (
    <div css={Styles} {...props}>
      {children}
    </div>
  );
};

Background.propTypes = Types;

export default Background;
