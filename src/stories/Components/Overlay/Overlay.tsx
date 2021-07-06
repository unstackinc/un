// Overlay.tsx

import * as React from 'react';
import { css } from '@emotion/react';
import { animated, useTransition } from 'react-spring';

import { Styles } from './Overlay.styles';

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
  const transitions = useTransition(showOverlay, {
    from: { opacity: 0 },
    enter: { opacity: 0.8 },
    leave: { opacity: 0 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          css={[
            Styles,
            css`
              background-color: ${background};
            `,
          ]}
          {...props}
        >
          {children}
        </animated.div>
      ),
  );
};

Overlay.defaultProps = {
  showOverlay: false,
  background: 'null',
};

export default Overlay;
