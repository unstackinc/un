// Search.styles.ts

import styled from '@emotion/styled';

import theme from '../../../theme';

const { colors, fonts, fontWeights, padding, radii, shadows } = theme;

export const UnSearchWrapper = styled.label({
  borderRadius: radii.lg,
  color: colors.text.secondary,
  transition: 'color 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '16rem',
  ':hover': {
    color: colors.text.default,
  },
  svg: {
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '1.25em',
    height: '1.25em',
    transform: `translateX(calc( 100% - ${padding.xxs} )) translateY(-50%)`,
  },
});

export const UnSearch = styled.input({
  background: colors.input.background.default,
  fontFamily: fonts.body,
  fontWeight: fontWeights[0],
  border: `1px solid ${colors.border}`,
  borderRadius: radii.lg,
  padding: padding.xs,
  paddingLeft: padding.xl,
  color: colors.text.secondary,
  width: '100%',
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
  '&::before': {
    content: 'url(../../../assets.search.svg)',
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
