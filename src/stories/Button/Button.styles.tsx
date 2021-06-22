// Button.styles.tsx

import styled from '@emotion/styled';
import { variant } from 'styled-system';

import theme from '../../theme';
import { fontSizes } from '../../theme';

const { colors, opacity, margin, padding, fonts, fontWeights } = theme;

const ButtonStyles = styled.button`
  ${fontSizes[0]};
  -webkit-appearance: none;
  &.large {
    ${fontSizes[1]};
  }
`;

export const UnButton = styled(ButtonStyles)(
  {
    appearance: 'none',
    fontFamily: fonts.body,
    fontWeight: fontWeights[1],
    border: '2px solid rgba( 0, 0, 0, 0.1 )',
    borderRadius: '.25em',
    boxSizing: 'border-box',
    padding: `${padding.xxs} ${padding.xs}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: margin.xxs,
    cursor: 'pointer',
    transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    ':hover': {
      opacity: opacity[75],
    },
    ':focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${colors.background}, 0 0 0 4px currentColor`,
    },
    ':active': {
      transform: 'scale(0.95)',
    },
    ':disabled': {
      userSelect: 'none',
      cursor: 'not-allowed',
      opacity: opacity[25],
    },
    '&.large': {
      padding: `${padding.xs} ${padding.sm}`,
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
      outline: {
        color: colors.button.background.primary,
        border: '2px solid',
        borderColor: colors.button.background.primary,
        bg: colors.background,
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
