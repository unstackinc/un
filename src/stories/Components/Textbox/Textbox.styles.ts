// Textbox.styles.ts

import styled from '@emotion/styled';

import theme from '../../../theme';

const { colors, fonts, fontWeights, padding, radii, shadows } = theme;

export const UnTextbox = styled.input({
  background: colors.input.background.default,
  fontFamily: fonts.body,
  fontWeight: fontWeights[0],
  border: `1px solid ${colors.border}`,
  borderRadius: radii.xs,
  padding: padding.xs,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.text.secondary,
  transition:
    'color 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  '&.full': {
    flexGrow: 1,
  },
  '&.warning': {
    boxShadow: shadows.focus.input.warning,
  },
  '&.warning:focus': {
    boxShadow: shadows.focus.input.warning,
  },
  ':hover': {
    color: colors.text.bold,
  },
  ':focus': {
    color: colors.text.default,
    outline: 'none',
    boxShadow: shadows.focus.input.default,
    background: colors.input.background.focus,
  },
  ':active': {
    color: colors.text.default,
  },
  ':disabled': {
    background: colors.disabled,
    borderColor: colors.disabled,
    userSelect: 'none',
    cursor: 'not-allowed',
  },
  ':disabled:hover': {
    color: 'inherit',
  },
});
