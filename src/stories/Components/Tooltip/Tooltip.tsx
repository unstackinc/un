// Tooltip.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Styles } from './Tooltip.styles';

interface Props {
  content: ReactNode;
  children: ReactNode;
}

export const Tooltip = ({ content, children, ...props }: Props) => {
  return (
    <Tippy content={content} css={Styles} {...props}>
      <span tabIndex={0}>{children}</span>
    </Tippy>
  );
};

export default Tooltip;
