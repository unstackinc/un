// Layout.styles.ts

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
  width: 100%;
  display: grid;
  grid-template-columns: 16rem 1fr;
  background-color: ${colors.background};
`;

export const SidebarStyles = css`
  grid-template-columns: 4rem 16rem 1fr;
`;
