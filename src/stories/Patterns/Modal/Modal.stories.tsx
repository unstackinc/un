// Modal.stories.tsx

import * as React from 'react';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

import { Modal } from './Modal';
import { Button, H0, P1 } from '../..';

export default {
  title: 'Patterns/Modal',
  component: Modal,
} as Meta;

const Template = (args) => {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <>
      <Button
        css={css`
          margin: 10vh auto;
        `}
        onClick={open}
      >
        Open modal
      </Button>
      <Modal
        actions={[
          <Button key={0} variant="outline" onClick={close}>
            Cancel
          </Button>,
          <Button key={1} onClick={close}>
            Okay
          </Button>,
        ]}
        showModal={showModal}
        setShowModal={setShowModal}
        aria="Modal"
        {...args}
      >
        <H0 display>Hello!</H0>
        <P1>This is an example Modal.</P1>
      </Modal>
    </>
  );
};

export const Example = Template.bind({});

Example.args = {
  title: 'Title',
};

Example.parameters = {
  layout: 'fullscreen',
};
