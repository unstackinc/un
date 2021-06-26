// Button.styles.ts

import styled from '@emotion/styled';
import { variant } from 'styled-system';

import theme from '../../../theme';

const { colors, opacity, margin, padding, fonts, fontWeights } = theme;

export const UnButton = styled.button(
  {
    appearance: 'none',
    fontFamily: fonts.body,
    fontWeight: fontWeights[1],
    border: '2px solid rgba( 0, 0, 0, 0.1 )',
    borderRadius: '0.25em',
    boxSizing: 'border-box',
    padding: `${padding.xxs} ${padding.xs}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: margin.xxs,
    cursor: 'pointer',
    transition:
      'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    ':hover': {
      opacity: opacity[75],
    },
    ':focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px currentColor`,
    },
    ':disabled': {
      userSelect: 'none',
      cursor: 'not-allowed',
      opacity: opacity[25],
    },
    '&.large': {
      padding: `${padding.xs} ${padding.md}`,
      gap: margin.xs,
    },
    '&.full': {
      width: '100%',
    },
  },
  variant({
    variants: {
      primary: {
        color: colors.text.reversed,
        bg: colors.button.background.primary,
        ':focus': {
          boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px ${colors.button.background.primary}`,
        },
      },
      secondary: {
        color: colors.text.reversed,
        bg: colors.button.background.secondary,
        ':focus': {
          boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px ${colors.button.background.secondary}`,
        },
      },
      tertiary: {
        color: colors.button.background.primary,
        bg: colors.button.background.tertiary,
        borderColor: colors.button.background.tertiary,
        ':hover': {
          opacity: 1,
          bg: colors.button.background.tertiaryHover,
        },
        ':focus': {
          boxShadow: `0 0 0 2px ${colors.button.background.primary}`,
        },
      },
      outline: {
        color: colors.button.background.primary,
        border: '2px solid',
        borderColor: 'currentColor',
        bg: colors.button.background.outline,
        ':focus': {
          boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px currentColor`,
        },
      },
      warning: {
        color: colors.text.reversed,
        bg: colors.button.background.warning,
        ':focus': {
          boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px ${colors.button.background.warning}`,
        },
      },
    },
  }),
);
