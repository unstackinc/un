// Tag.styles.ts

import styled from '@emotion/styled';
import { variant } from 'styled-system';

import theme from '../../theme';

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
