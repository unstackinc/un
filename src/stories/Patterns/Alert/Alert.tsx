// Alert.tsx

import * as React from 'react';
import { Fragment } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { animated, useTransition } from 'react-spring';

import { AlertDialog, AlertDialogLabel } from '@reach/alert-dialog';
import VisuallyHidden from '@reach/visually-hidden';

import { Styles, BodyStyles, FooterStyles } from './Alert.styles';
import { Overlay } from '../..';

const Types = {
  actions: PropTypes.arrayOf(PropTypes.node),
  aria: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  leastDestructiveRef: PropTypes.any.isRequired,
  setShowAlert: PropTypes.any,
  showAlert: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

type Props = InferProps<typeof Types>;

export const Alert = ({
  actions,
  aria,
  children,
  leastDestructiveRef,
  setShowAlert,
  showAlert,
  title,
  ...props
}: Props) => {
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
                  {actions.map((action, index) => {
                    return (
                      <Fragment key={`${action.toString()}-${index}`}>
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

Alert.propTypes = Types;

export default Alert;
