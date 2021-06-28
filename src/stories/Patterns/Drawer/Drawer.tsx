// Drawer.tsx

import * as React from 'react';
import { animated, useTransition, config } from 'react-spring';

import VisuallyHidden from '@reach/visually-hidden';
import { FiX } from 'react-icons/fi';

import {
  UnDrawer,
  UnDrawerHeading,
  UnDrawerBody,
  UnDrawerFooter,
} from './Drawer.styles';
import { Fab, Overlay, H3 } from '../..';
import { escape } from '../../../utils';

interface DrawerProps {
  showDrawer?: boolean;
  setShowDrawer?: any;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode[];
  aria: string;
}

export const Drawer = ({
  showDrawer,
  setShowDrawer,
  title,
  children,
  actions,
  aria,
  ...props
}: DrawerProps) => {
  escape(showDrawer, setShowDrawer);
  const AnimatedUnDrawer = animated(UnDrawer);
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
        (styles, item) =>
          item && (
            <>
              <Overlay
                showOverlay={showDrawer}
                setShowOverlay={setShowDrawer}
                onClick={() => setShowDrawer(false)}
              >
                <AnimatedUnDrawer style={styles} aria-label={aria} {...props}>
                  <UnDrawerHeading>
                    <H3 display>{title}</H3>
                    <Fab
                      aria-label="Close modal"
                      onClick={() => setShowDrawer(false)}
                    >
                      <VisuallyHidden>Close</VisuallyHidden>
                      <FiX aria-hidden />
                    </Fab>
                  </UnDrawerHeading>
                  <UnDrawerBody>{children}</UnDrawerBody>
                  <UnDrawerFooter>
                    {actions.map((action, index) => {
                      return (
                        <React.Fragment key={`${action.toString()}-${index}`}>
                          {action}
                        </React.Fragment>
                      );
                    })}
                  </UnDrawerFooter>
                </AnimatedUnDrawer>
              </Overlay>
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
