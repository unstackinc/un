// Overlay.tsx

import * as React from 'react';
import { css } from '@emotion/react';
import { animated, useTransition } from 'react-spring';

import { Styles } from './Overlay.styles';

interface OverlayProps {
  showOverlay?: boolean;
  setShowOverlay?: any;
  background?: string;
  onClick?: any;
}

export const Overlay = ({
  showOverlay,
  setShowOverlay,
  background,
  ...props
}: OverlayProps) => {
  const transitions = useTransition(showOverlay, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
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
        />
      ),
  );
};

Overlay.defaultProps = {
  showOverlay: false,
};

export default Overlay;
