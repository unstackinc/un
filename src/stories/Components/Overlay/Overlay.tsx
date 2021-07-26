// Overlay.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';
import { animated, useTransition } from 'react-spring';

import { Styles } from './Overlay.styles';

const Types = {
  background: PropTypes.string,
  onClick: PropTypes.any,
  setShowOverlay: PropTypes.any,
  showOverlay: PropTypes.bool,
};

type Props = InferProps<typeof Types>;

export const Overlay = ({
  background,
  onClick,
  setShowOverlay,
  showOverlay,
  ...props
}: Props) => {
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

Overlay.propTypes = Types;

export default Overlay;
