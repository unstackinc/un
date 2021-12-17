import { Fragment, ReactNode } from 'react';
import { animated, useTransition } from 'react-spring';

import { AlertDialog, AlertDialogLabel } from '@reach/alert-dialog';
import VisuallyHidden from '@reach/visually-hidden';

import { Styles, BodyStyles, FooterStyles } from './Alert.styles';
import { Overlay } from '../../components';

export type AlertProps = {
  actions: ReactNode[];
  aria: string;
  children: ReactNode;
  leastDestructiveRef: any;
  setShowAlert?: any;
  showAlert?: boolean;
  title: string;
};

export const Alert = ({
  actions,
  aria,
  children,
  leastDestructiveRef,
  setShowAlert,
  showAlert,
  title,
  ...props
}: AlertProps) => {
  const close = () => setShowAlert(false);
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
                onDismiss={close}
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
                  {actions.map((action: ReactNode, index) => {
                    return (
                      <Fragment key={`alert-action-${index}`}>
                        {action}
                      </Fragment>
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
