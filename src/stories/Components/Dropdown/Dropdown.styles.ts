// Dropdown.styles.ts

import styled from '@emotion/styled';

import theme from '../../../theme';

const { colors, fonts, fontWeights, padding, radii } = theme;

export const UnDropdown = styled.select({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '16rem',
  boxShadow: 'none',
  background: colors.input.background.default,
  fontFamily: fonts.body,
  fontWeight: fontWeights[0],
  border: `1px solid ${colors.border}`,
  borderRadius: radii.xs,
  padding: padding.xs,
  justifyContent: 'space-between',
  color: colors.text.secondary,
  userSelect: 'none',
  transition: `color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,

  '&.full': {
    maxWidth: '100%',
    width: '100%',
    svg: {
      transform: `translateX(-100%)`,
    },
  },
  svg: {
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none',
    right: 0,
    width: '1.25em',
    height: '1.25em',
    transform: `translateX(100%)`,
  },
  ':hover': {
    color: colors.text.bold,
  },
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${colors.input.border.focus}`,
    background: colors.input.background.focus,
  },
  ':active': {
    color: colors.text.default,
  },
});

export const UnDropdownOption = styled.option({
  appearance: 'none',
  background: colors.input.background.light,
  fontFamily: fonts.body,
  fontWeight: fontWeights[0],
  padding: padding.xs,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: colors.text.secondary,
  cursor: 'pointer',
  transition:
    'color 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  ':not(:last-child)': {
    borderBottom: `1px solid ${colors.border}`,
  },
});
