import { css } from '@emotion/react';

import { theme } from '../../theme';

const { margin, colors, sizes } = theme;

export const Styles = css`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

export const TabsStyles = css`
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
