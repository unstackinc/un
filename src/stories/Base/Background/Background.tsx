import { ReactNode } from 'react';

import { Styles } from './Background.styles';

export type BackgroundProps = {
  children: ReactNode;
};

export const Background = ({ children, ...props }: BackgroundProps) => {
  return (
    <div css={Styles} {...props}>
      {children}
    </div>
  );
};

export default Background;
