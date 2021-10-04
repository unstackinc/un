import { ReactNode } from 'react';

import { Styles } from './Main.styles';

export type MainProps = {
  children: ReactNode;
};

export const Main = ({ children, ...props }: MainProps) => {
  return (
    <main css={Styles} {...props}>
      {children}
    </main>
  );
};

export default Main;
