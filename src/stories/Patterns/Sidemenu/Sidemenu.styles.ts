// Sidebar.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { margin, padding, colors, breakpoints } = theme;

export const Styles = css`
  width: 16rem;
  max-width: 100%;
  height: 100vh;
  border-right: 1px solid;
  border-color: ${colors.border};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${colors.sidemenu};
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }

  @media only screen and (min-width: ${breakpoints[3]}) {
    border-right: 1px solid ${colors.border};
  }
`;

export const HeadingStyles = css`
  width: 100%;
  padding: ${padding.xxs};
  padding-left: ${padding.sm};
  box-sizing: border-box;
  /* display: flex; */
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid;
  border-color: ${colors.border};
`;

export const BodyStyles = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const FooterStyles = css`
  width: 100%;
  padding: ${padding.xs};
  box-sizing: border-box;
  /* display: flex; */
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${margin.xs};
  position: relative;
  border-top: 1px solid;
  border-color: ${colors.border};
`;
