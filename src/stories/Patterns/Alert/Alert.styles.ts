// Alert.styles.ts

import styled from '@emotion/styled';
import { Dialog } from '@reach/dialog';

import theme from '../../../theme';

const { margin, padding, colors, radii } = theme;

export const UnAlert = styled(Dialog)({
  maxWidth: '37.5rem',
  boxShadow: '0 5px 16px rgba(0, 0, 0, 0.2)',
  background: colors.card,
  position: 'relative',
  borderRadius: radii.md,
  margin: '10vh auto',
});

export const UnAlertBody = styled.div({
  padding: padding.sm,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '*': {
    textAlign: 'center',
  },
});

export const UnAlertFooter = styled.div({
  width: '100%',
  padding: padding.sm,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: margin.sm,
  position: 'relative',
});
