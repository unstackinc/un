// Drawer.styles.ts

import styled from '@emotion/styled';
import { Dialog } from '@reach/dialog';

import theme from '../../../theme';

const { margin, padding, colors, radii, shadows } = theme;

export const UnDrawer = styled(Dialog)({
  width: '25rem',
  maxWidth: `calc( 100% - ${margin.xs} * 2)`,
  height: `calc( 100vh - ${margin.xs} * 2)`,
  boxShadow: shadows.lg,
  background: colors.card,
  position: 'fixed',
  top: 0,
  right: 0,
  borderRadius: radii.sm,
  margin: `${margin.xs}`,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

export const UnDrawerHeading = styled.div({
  background: colors.background,
  width: '100%',
  padding: `${padding.xxs}`,
  paddingLeft: padding.sm,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  borderBottom: '1px solid',
  borderColor: colors.border,
});

export const UnDrawerBody = styled.div({
  height: '100%',
  padding: padding.sm,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: margin.md,
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0',
  },
});

export const UnDrawerFooter = styled.div({
  width: '100%',
  padding: padding.xs,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: margin.xs,
  position: 'relative',
  borderTop: '1px solid',
  borderColor: colors.border,
});
