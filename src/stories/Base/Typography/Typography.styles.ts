import { css } from '@emotion/react';

import theme from '../../../theme';

const { colors, fonts, fontSizes, fontWeights, margin } = theme;

export const DisplayStyles = css`
  margin: 0;
`;

export const NormalStyles = css`
  font-weight: ${fontWeights[0]};
`;

export const MediumStyles = css`
  font-weight: ${fontWeights[1]};
`;

export const BoldStyles = css`
  font-weight: ${fontWeights[2]};
`;

export const LinkStyles = css`
  color: ${colors.text.link};
  text-decoration: underline;
`;

const p = css`
  font-family: ${fonts.body};
  color: ${colors.text.default};
  display: inline;
`;

export const P0Styles = css`
  ${p}
  font-size: ${fontSizes[3]};
`;

export const P1Styles = css`
  ${p}
  font-size: ${fontSizes[2]};
`;

export const P2Styles = css`
  ${p}
  font-size: ${fontSizes[1]};
`;

export const P3Styles = css`
  ${p}
  font-size: ${fontSizes[0]};
`;

const h = css`
  font-family: ${fonts.body};
  color: ${colors.text.default};
`;

export const H0Styles = css`
  ${h}
  font-size: ${fontSizes[5]};
  font-weight: ${fontWeights[2]};
`;

export const H1Styles = css`
  ${h}
  font-size: ${fontSizes[4]};
  font-weight: ${fontWeights[1]};
`;

export const H2Styles = css`
  ${h}
  font-size: ${fontSizes[3]};
  font-weight: ${fontWeights[1]};
`;

export const H3Styles = css`
  ${h}
  font-size: ${fontSizes[2]};
  font-weight: ${fontWeights[1]};
`;

export const LabelContainerStyles = css`
  max-width: 16rem;
  width: 100%;
`;

export const LabelStyles = css`
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  color: ${colors.text.secondary};
  position: relative;
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  gap: ${margin.xs};
  cursor: pointer;
  width: 100%;
`;

export const FullStyles = css`
  max-width: 100%;
`;

export const InlineStyles = css`
  color: ${colors.text.default};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${margin.xs};
  margin-bottom: 0;
`;

export const DisabledStyles = css`
  cursor: auto;
`;

export const BeforeStyles = css`
  justify-content: space-between;
`;

export const TextStyles = css`
  ${fontSizes[1]};
  font-weight: ${fontWeights[0]};
`;

export const WarningTextStyles = css`
  color: ${colors.warning};
`;
