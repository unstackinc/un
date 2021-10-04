import { css } from '@emotion/react';
import { animated, useTransition } from 'react-spring';

import { Styles } from './Overlay.styles';

export type OverlayProps = {
  background?: string;
  onChange?: any;
  onClick?: any;
  setShowOverlay?: any;
  showOverlay?: boolean;
};

export const Overlay = ({
  background,
  onChange,
  onClick,
  setShowOverlay,
  showOverlay,
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
          onChange={onChange}
          onClick={onClick}
          {...props}
        />
      ),
  );
};

Overlay.defaultProps = {
  onChange: undefined,
  onClick: undefined,
  showOverlay: false,
};

export default Overlay;
