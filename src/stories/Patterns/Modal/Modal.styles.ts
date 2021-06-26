// Modal.styles.ts

import styled from '@emotion/styled';
import { Dialog } from '@reach/dialog';

import theme from '../../../theme';

const { margin, padding, colors, radii } = theme;

export const UnModal = styled(Dialog)({
  maxWidth: '37.5rem',
  boxShadow: '0 5px 16px rgba(0, 0, 0, 0.2)',
  background: colors.modal,
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
  justifyContent: 'flex-start',
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
