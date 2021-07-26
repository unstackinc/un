// Tooltip.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Styles } from './Tooltip.styles';

const Types = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

type Props = InferProps<typeof Types>;

export const Tooltip = ({ children, content, ...props }: Props) => {
  return (
    <Tippy content={content} css={Styles} {...props}>
      <span tabIndex={0}>{children}</span>
    </Tippy>
  );
};

Tooltip.propTypes = Types;

export default Tooltip;
