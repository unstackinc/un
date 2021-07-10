// Alert.tsx

import * as React from 'react';
import { animated, useTransition } from 'react-spring';

import { AlertDialog, AlertDialogLabel } from '@reach/alert-dialog';
import VisuallyHidden from '@reach/visually-hidden';

import { Styles, BodyStyles, FooterStyles } from './Alert.styles';
import { Overlay } from '../..';
import { escape } from '../../../utils';

interface AlertProps {
  showAlert?: boolean;
  setShowAlert?: any;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode[];
  leastDestructiveRef: any;
  aria: string;
}

/* FIX: Escape key not working */

export const Alert = ({
  showAlert,
  setShowAlert,
  title,
  children,
  actions,
  leastDestructiveRef,
  aria,
  ...props
}: AlertProps) => {
  escape(showAlert, setShowAlert);
  const AnimatedAlert = animated(AlertDialog);
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
              <Overlay showOverlay={showAlert} setShowOverlay={setShowAlert} />
              <AnimatedAlert
                leastDestructiveRef={leastDestructiveRef}
                style={styles}
                css={Styles}
                aria-label={aria}
                {...props}
              >
                <VisuallyHidden>
                  <AlertDialogLabel>{title}</AlertDialogLabel>
                </VisuallyHidden>
                <div css={BodyStyles}>{children}</div>
                <div css={FooterStyles}>
                  {actions.map((action, index) => {
                    return (
                      <React.Fragment key={`${action.toString()}-${index}`}>
                        {action}
                      </React.Fragment>
                    );
                  })}
                </div>
              </AnimatedAlert>
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
