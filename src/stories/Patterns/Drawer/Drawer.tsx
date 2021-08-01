// Drawer.tsx

import * as React from 'react';
import { Fragment } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { animated, useTransition, config } from 'react-spring';

import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { IoClose } from 'react-icons/io5';

import {
  Styles,
  HeadingStyles,
  BodyStyles,
  FooterStyles,
} from './Drawer.styles';
import { IconButton, Overlay, H3 } from '../..';

const Types = {
  actions: PropTypes.arrayOf(PropTypes.node),
  aria: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setShowDrawer: PropTypes.func,
  showDrawer: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

type Props = InferProps<typeof Types>;

export const Drawer = ({
  actions,
  aria,
  children,
  setShowDrawer,
  showDrawer,
  title,
  ...props
}: Props) => {
  const close = () => setShowDrawer(false);
  const AnimatedDialog = animated(Dialog);
  const transitions = useTransition(showDrawer, {
    from: {
      transform: 'translateX(110%)',
    },
    enter: {
      transform: 'translateX(0%)',
    },
    leave: {
      transform: 'translateX(110%)',
    },
    config: config.default,
  });

  return (
    <>
      {transitions(
        (animation, item) =>
          item && (
            <>
              <Overlay
                showOverlay={showDrawer}
                setShowOverlay={setShowDrawer}
                onClick={() => setShowDrawer(false)}
              />
              <AnimatedDialog
                onDismiss={close}
                css={Styles}
                style={animation}
                aria-label={aria}
                {...props}
              >
                <div css={HeadingStyles}>
                  <H3 display>{title}</H3>
                  <IconButton
                    aria-label="Close modal"
                    onClick={() => setShowDrawer(false)}
                  >
                    <VisuallyHidden>Close</VisuallyHidden>
                    <IoClose aria-hidden />
                  </IconButton>
                </div>
                <div css={BodyStyles}>{children}</div>
                <div css={FooterStyles}>
                  {actions.map((action, index) => {
                    return (
                      <Fragment key={`${action.toString()}-${index}`}>
                        {action}
                      </Fragment>
                    );
                  })}
                </div>
              </AnimatedDialog>
            </>
          ),
      )}
    </>
  );
};

Drawer.defaultProps = {
  showDrawer: false,
  title: 'Title',
};

Drawer.propTypes = Types;

export default Drawer;
