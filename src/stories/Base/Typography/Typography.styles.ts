// Typography.styles.ts

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { colors, fonts, fontWeights, margin } = theme;

const p = `
  font-family: ${fonts.body};
  color: ${colors.text.default};
  &.normal {
    font-weight: ${fontWeights[0]};
  },
  &.medium {
    font-weight: ${fontWeights[1]};
  },
  &.bold {
    font-weight: ${fontWeights[2]};
  }
  &.display {
    margin: 0;
  }
  &.link {
    color: ${colors.text.link};
    text-decoration: underline;
  },
`;

export const UnP0 = styled.p`
  ${p}
  font-size: ${fontSizes[3]};
`;

export const UnP1 = styled.p`
  ${p}
  font-size: ${fontSizes[2]};
`;

export const UnP2 = styled.p`
  ${p}
  font-size: ${fontSizes[1]};
`;

export const UnP3 = styled.p`
  ${p}
  font-size: ${fontSizes[0]};
`;

const h = `
  font-family: ${fonts.body};
  color: ${colors.text.default};
  &.display {
    margin: 0;
  }
`;

export const UnH0 = styled.h1`
  ${h}
  font-size: ${fontSizes[5]};
  font-weight: ${fontWeights[2]};
`;

export const UnH1 = styled.h1`
  ${h}
  font-size: ${fontSizes[4]};
  font-weight: ${fontWeights[1]};
`;

export const UnH2 = styled.h2`
  ${h}
  font-size: ${fontSizes[3]};
  font-weight: ${fontWeights[1]};
`;

export const UnH3 = styled.h3`
  ${h}
  font-size: ${fontSizes[2]};
  font-weight: ${fontWeights[1]};
`;

export const LabelStyles = css`
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  color: ${colors.text.secondary};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${margin.xs};
  width: 16rem;
  .label-text {
    cursor: pointer;
    display: block;
    width: 100%;
  }
  .warning-text,
  .help-text {
    font-weight: ${fontWeights[0]};
  }
  .warning-text {
    color: ${colors.warning};
  }
`;

export const FullStyles = css`
  width: 100%;
`;

export const InlineStyles = css`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${margin.xs};
  .label-text {
    color: ${colors.text.default};
    display: flex !important;
    flex-direction: row !important;
    justify-content: flex-start !important;
    align-items: center !important;
    gap: ${margin.xs};
    margin-bottom: 0;
  }
`;

export const DisabledStyles = css`
  cursor: auto !important;
`;

export const BeforeStyles = css`
  .label-text {
    justify-content: space-between !important;
  }
`;
