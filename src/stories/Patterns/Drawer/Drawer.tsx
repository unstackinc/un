// Drawer.tsx

import * as React from 'react';
import { Fragment, ReactNode } from 'react';
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
import { escape } from '../../../utils';

interface Props {
  showDrawer?: boolean;
  setShowDrawer?: any;
  title: string;
  children: ReactNode;
  actions?: ReactNode[];
  aria: string;
}

/* FIX: Animations are janky after composition refactor */
/* FIX: Escape key not working */

export const Drawer = ({
  showDrawer,
  setShowDrawer,
  title,
  children,
  actions,
  aria,
  ...props
}: Props) => {
  escape(showDrawer, setShowDrawer);
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

export default Drawer;
