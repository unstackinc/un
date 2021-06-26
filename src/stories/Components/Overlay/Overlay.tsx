/** @jsxImportSource @emotion/react */
// Overlay.tsx

import * as React from 'react';
import { css } from '@emotion/react';
import { animated, useTransition } from 'react-spring';

import { UnOverlay } from './Overlay.styles';

interface OverlayProps {
  showOverlay?: boolean;
  setShowOverlay?: any;
  background?: string;
  children: React.ReactNode;
  onClick?: any;
}

export const Overlay = ({
  showOverlay,
  setShowOverlay,
  background,
  children,
  ...props
}: OverlayProps) => {
  const AnimatedUnOverlay = animated(UnOverlay);

  const transitions = useTransition(showOverlay, {
    from: { opacity: 0 },
    enter: { opacity: 0.8 },
    leave: { opacity: 0 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <AnimatedUnOverlay
          style={styles}
          css={css`
            background: ${background} !important;
          `}
          {...props}
        >
          {children}
        </AnimatedUnOverlay>
      ),
  );
};

Overlay.defaultProps = {
  showOverlay: false,
  background: 'null',
};

export default Overlay;
