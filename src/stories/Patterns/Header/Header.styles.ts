// Header.styles.ts

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
  sizes,
} = theme;

export const Styles = css`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  border-bottom: 1px solid;
  border-color: ${colors.border};
  z-index: 1;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const ContainerStyles = css`
  max-width: ${sizes.wide};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: ${margin.sm};
  }
`;
