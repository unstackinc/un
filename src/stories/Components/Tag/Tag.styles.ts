// Tag.styles.ts

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { variant } from 'styled-system';

import theme, { fontSizes } from '../../../theme';

const { colors, margin, padding, fonts, fontWeights } = theme;

export const UnTag = styled.span(
  {
    fontFamily: fonts.body,
    fontWeight: fontWeights[1],
    borderRadius: margin.xxl,
    padding: `${padding.xxs} ${padding.xs}`,
    display: 'inline-block',
  },
  variant({
    variants: {
      primary: {
        color: colors.text.reversed,
        bg: colors.tag.default.purple,
      },
      yellow: {
        color: colors.text.reversed,
        bg: colors.tag.default.yellow,
      },
      green: {
        color: colors.text.reversed,
        bg: colors.tag.default.green,
      },
      outline: {
        color: colors.tag.outline.default,
        outline: '2px solid currentColor',
        outlineOffset: '-2px',
        bg: colors.tag.outline.background,
      },
      outlineBlue: {
        color: colors.tag.outline.blue,
        outline: '2px solid currentColor',
        outlineOffset: '-2px',
        bg: colors.tag.outline.background,
      },
    },
  }),
);

export const TagStyles = css`
  ${fontSizes[0]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  border-radius: ${margin.xxl};
  padding: ${padding.xxs} ${padding.xs};
  display: inline-block;
`;

export const SmallStyles = css`
  padding: ${padding.xxxs} ${padding.xxs} !important;
`;
