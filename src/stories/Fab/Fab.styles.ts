// Fab.styles.ts

import styled from '@emotion/styled';

import theme from '../../theme';
import { fontSizes } from '../../theme';

const { colors, opacity, fonts, fontWeights } = theme;

const FabStyles = styled.button`
  ${fontSizes[2]};
  -webkit-appearance: none;
  &.medium,
  &.large {
    ${fontSizes[3]};
  }
`;

export const UnFab = styled(FabStyles)({
  appearance: 'none',
  fontFamily: fonts.body,
  fontWeight: fontWeights[1],
  border: `2px solid ${colors.button.background.tertiary}`,
  borderRadius: '0.5em',
  padding: '0.25em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: colors.text.secondary,
  backgroundColor: colors.button.background.tertiary,
  transition:
    'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  svg: {
    width: '1.25em',
    height: '1.25em',
  },
  '&.large': {
    borderRadius: '0.7em',
    padding: '0.5em',
  },
  ':hover': {
    color: colors.text.bold,
  },
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${colors.button.background.primary}`,
  },
  ':active': {
    transform: 'scale(0.95)',
    backgroundColor: colors.button.background.tertiaryHover,
  },
  ':disabled': {
    userSelect: 'none',
    cursor: 'not-allowed',
    opacity: opacity[25],
  },
});
