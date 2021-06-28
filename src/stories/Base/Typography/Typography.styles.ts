// Typography.styles.ts

import styled from '@emotion/styled';

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

export const UnLabel = styled.label({
  fontFamily: fonts.body,
  fontWeight: fontWeights[1],
  color: colors.text.secondary,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '16rem',
  '&.full': {
    width: '100%',
  },
  '.label-text': {
    cursor: 'pointer',
  },
  '.label-text,.warning-text,.help-text': {
    marginBottom: margin.xs,
  },
  '.warning-text,.help-text': {
    marginTop: margin.xs,
    fontWeight: fontWeights[0],
  },
  '.warning-text': {
    color: colors.warning,
  },
});
