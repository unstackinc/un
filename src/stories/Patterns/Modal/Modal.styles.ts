// Modal.styles.ts

import styled from '@emotion/styled';
import { Dialog } from '@reach/dialog';

import theme from '../../../theme';

const { margin, padding, colors, radii, shadows } = theme;

export const UnModal = styled(Dialog)({
  maxWidth: '37.5rem',
  boxShadow: shadows.lg,
  background: colors.card,
  position: 'relative',
  borderRadius: radii.md,
  margin: '10vh auto',
});

export const UnModalHeading = styled.div({
  width: '100%',
  padding: padding.sm,
  paddingLeft: padding.md,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  borderBottom: '1px solid',
  borderColor: colors.border,
});

export const UnModalBody = styled.div({
  padding: padding.sm,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const UnModalFooter = styled.div({
  width: '100%',
  padding: padding.sm,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: margin.sm,
  position: 'relative',
});
