import { ReactNode } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Styles } from './Tooltip.styles';

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
};

export const Tooltip = ({ children, content, ...props }: TooltipProps) => {
  return (
    <Tippy content={content} css={Styles} {...props}>
      <span tabIndex={0}>{children}</span>
    </Tippy>
  );
};

export default Tooltip;
