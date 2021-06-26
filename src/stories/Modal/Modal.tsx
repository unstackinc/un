// Modal.tsx

import * as React from 'react';
import { animated, useTransition, config } from 'react-spring';

import VisuallyHidden from '@reach/visually-hidden';
import { FiX } from 'react-icons/fi';

import {
  UnModal,
  UnModalHeading,
  UnModalBody,
  UnModalFooter,
} from './Modal.styles';
import { Fab, Overlay, H3 } from '../';
import { escape } from '../../utils';

interface ModalProps {
  showModal?: boolean;
  setShowModal?: any;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode[];
  aria: string;
}

export const Modal = ({
  showModal,
  setShowModal,
  title,
  children,
  actions,
  aria,
  ...props
}: ModalProps) => {
  escape(showModal, setShowModal);
  const AnimatedUnModal = animated(UnModal);
  const transitions = useTransition(showModal, {
    from: {
      opacity: 0,
      transform: 'scale(1.1) perspective(1500px) rotateX(15deg)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1) perspective(1500px) rotateX(0deg)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(1.1) perspective(1500px) rotateX(15deg)',
    },
    config: config.gentle,
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <>
              <Overlay
                showOverlay={showModal}
                setShowOverlay={setShowModal}
                onClick={() => setShowModal(false)}
              >
                <AnimatedUnModal style={styles} aria-label={aria} {...props}>
                  <UnModalHeading>
                    <H3 display>{title}</H3>
                    <Fab
                      aria-label="Close modal"
                      onClick={() => setShowModal(false)}
                    >
                      <VisuallyHidden>Close</VisuallyHidden>
                      <FiX aria-hidden />
                    </Fab>
                  </UnModalHeading>
                  <UnModalBody>{children}</UnModalBody>
                  <UnModalFooter>
                    {actions.map((action, index) => {
                      return (
                        <React.Fragment key={`${action.toString()}-${index}`}>
                          {action}
                        </React.Fragment>
                      );
                    })}
                  </UnModalFooter>
                </AnimatedUnModal>
              </Overlay>
            </>
          ),
      )}
    </>
  );
};

Modal.defaultProps = {
  showModal: false,
  title: 'Title',
};

export default Modal;
