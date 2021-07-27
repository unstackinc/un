// Sidebar.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Header } from '../..';

import { Styles } from './Sidebar.styles';

const Types = {
  children: PropTypes.node,
  end: PropTypes.node,
  start: PropTypes.node,
};

type Props = InferProps<typeof Types>;

export const Sidebar = ({ children, end, start, ...props }: Props) => {
  return (
    <aside css={Styles} {...props}>
      <Header
        css={css`
          border-color: rgba(255, 255, 255, 0.25);
        `}
      >
        {start}
      </Header>
      <div>{children}</div>
      <div>{end}</div>
    </aside>
  );
};

Sidebar.propTypes = Types;

export default Sidebar;
