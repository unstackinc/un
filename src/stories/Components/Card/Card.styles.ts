// Card.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { margin, padding, colors, radii } = theme;

export const Styles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.card};
  box-sizing: border-box;
  border-radius: ${radii.sm};
`;

export const HeaderStyles = css`
  width: 100%;
  padding: ${padding.xs} 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid;
  border-color: ${colors.border};
  div,
  span {
    display: flex;
  }

  div {
    align-items: flex-start;
    flex-direction: column;
    gap: ${margin.xxs};
  }
  span {
    align-items: center;
    flex-direction: row;
    gap: ${margin.sm};
  }
`;

export const BodyStyles = css`
  height: 100%;
  width: 100%;
  padding: ${padding.md} 0;
`;
