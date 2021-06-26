// Alert.tsx

import * as React from 'react';
import { animated, useTransition } from 'react-spring';

import { UnAlert, UnAlertBody, UnAlertFooter } from './Alert.styles';
import { Overlay } from '../..';
import { escape } from '../../../utils';

interface AlertProps {
  showAlert?: boolean;
  setShowAlert?: any;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode[];
  aria: string;
}

export const Alert = ({
  showAlert,
  setShowAlert,
  title,
  children,
  actions,
  aria,
  ...props
}: AlertProps) => {
  escape(showAlert, setShowAlert);
  const AnimatedUnAlert = animated(UnAlert);
  const transitions = useTransition(showAlert, {
    from: {
      opacity: 0,
      transform: 'scale(0.9)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0.9)',
    },
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <>
              <Overlay showOverlay={showAlert} setShowOverlay={setShowAlert}>
                <AnimatedUnAlert style={styles} aria-label={aria} {...props}>
                  <UnAlertBody>{children}</UnAlertBody>
                  <UnAlertFooter>
                    {actions.map((action, index) => {
                      return (
                        <React.Fragment key={`${action.toString()}-${index}`}>
                          {action}
                        </React.Fragment>
                      );
                    })}
                  </UnAlertFooter>
                </AnimatedUnAlert>
              </Overlay>
            </>
          ),
      )}
    </>
  );
};

Alert.defaultProps = {
  showAlert: false,
  title: 'Title',
};

export default Alert;
