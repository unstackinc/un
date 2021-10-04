import { css } from '@emotion/react';

import theme from '../../../theme';

const { margin, padding, colors, radii, shadows } = theme;

export const Styles = css`
  width: 25rem;
  max-width: calc(100% - ${margin.xs} * 2);
  height: calc(100vh - ${margin.xs} * 2);
  box-shadow: ${shadows.lg};
  background-color: ${colors.card};
  position: fixed;
  top: 0;
  right: 0;
  border-radius: ${radii.sm};
  margin: ${margin.xs};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const HeadingStyles = css`
  background-color: ${colors.backgroundSecondary};
  width: 100%;
  padding: ${padding.xxs};
  padding-left: ${padding.sm};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid;
  border-color: ${colors.border};
`;

export const BodyStyles = css`
  height: 100%;
  padding: ${padding.sm};
  padding-bottom: ${padding.xxl};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${margin.md};
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const FooterStyles = css`
  width: 100%;
  padding: ${padding.xs};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${margin.xs};
  position: relative;
  border-top: 1px solid;
  border-color: ${colors.border};
`;
