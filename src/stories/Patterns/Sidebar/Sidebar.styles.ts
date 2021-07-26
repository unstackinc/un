// Sidebar.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const {
  margin,
  padding,
  fonts,
  fontWeights,
  colors,
  radii,
  transitions,
  breakpoints,
} = theme;

export const Styles = css`
  max-width: 100%;
  height: 100vh;
  border-right: 1px solid;
  border-color: ${colors.border};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: ${margin.xxs};
  padding: ${padding.sm};
  box-sizing: border-box;
  background-color: ${colors.sidebar};
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
