// Overlay.styles.ts

import styled from '@emotion/styled';

import theme from '../../../theme';

const { colors } = theme;

export const UnOverlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: colors.overlay,
});
