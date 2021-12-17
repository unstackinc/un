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
} from './Modal.styles';
import { IconButton, Overlay, H3 } from '../../components';

export type ModalProps = {
  actions: ReactNode[];
  aria: string;
  children: ReactNode;
  setShowModal?: any;
  showModal?: boolean;
  title: string;
};

export const Modal = ({
  aria,
  actions,
  children,
  setShowModal,
  showModal,
  title,
  ...props
}: ModalProps) => {
  const close = () => setShowModal(false);
  const AnimatedModal = animated(Dialog);
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
              />
              <AnimatedModal
                onDismiss={close}
                css={Styles}
                style={styles}
                aria-label={aria}
                {...props}
              >
                <div css={HeadingStyles}>
                  <H3 display>{title}</H3>
                  <IconButton
                    aria-label="Close modal"
                    onClick={() => setShowModal(false)}
                  >
                    <VisuallyHidden>Close</VisuallyHidden>
                    <IoClose aria-hidden />
                  </IconButton>
                </div>
                <div css={BodyStyles}>{children}</div>
                <div css={FooterStyles}>
                  {actions.map((action, index) => {
                    return (
                      <Fragment key={`modal-action-${index}`}>
                        {action}
                      </Fragment>
                    );
                  })}
                </div>
              </AnimatedModal>
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
