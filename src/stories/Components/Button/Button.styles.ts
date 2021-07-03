// Button.styles.ts

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { variant } from 'styled-system';

import theme, { fontSizes } from '../../../theme';
import { shadows } from '../../../utils';

const { colors, opacity, margin, padding, fonts, fontWeights } = theme;

export const UnButton = styled.button(
  variant({
    variants: {
      primary: {
        color: colors.text.reversed,
        bg: colors.button.background.primary,
        ':focus': {
          boxShadow: shadows.focus.primary,
        },
      },
      secondary: {
        color: colors.text.reversed,
        bg: colors.button.background.secondary,
        ':focus': {
          boxShadow: shadows.focus.secondary,
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
          boxShadow: shadows.focus.tertiary,
        },
      },
      outline: {
        color: colors.button.background.primary,
        border: '2px solid',
        borderColor: 'currentColor',
        bg: colors.button.background.outline,
        ':focus': {
          boxShadow: shadows.focus.color,
        },
      },
      warning: {
        color: colors.text.reversed,
        bg: colors.warning,
        ':focus': {
          boxShadow: shadows.focus.warning,
        },
      },
    },
  }),
);

export const Styles = css`
  appearance: none;
  -webkit-appearance: none;
  ${fontSizes[1]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
  box-sizing: border-box;
  padding: ${padding.xxs} ${padding.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${margin.xxs};
  cursor: pointer;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  &.large {
    ${fontSizes[2]};
  }
  :hover {
    opacity: ${opacity[75]};
  }
  :focus {
    outline: none;
    box-shadow: ${shadows.focus.color};
  }
  :active {
    transform: scale(0.95);
  }
  :disabled {
    user-select: none;
    cursor: not-allowed;
    color: ${colors.text.secondary};
    background: ${colors.disabled};
    border-color: transparent;
  }
  :disabled:active {
    transform: none;
  }
`;

export const LargeStyles = css`
  ${fontSizes[2]};
  padding: ${padding.xs} ${padding.md};
  gap: ${margin.xs};
`;

export const FullStyles = css`
  width: 100%;
`;
