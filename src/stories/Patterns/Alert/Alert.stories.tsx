import { useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';

import { Alert, AlertProps } from './Alert';
import { Button, H0, P1 } from '../..';

export default {
  title: 'Patterns/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => {
  const [showAlert, setShowAlert] = useState(false);
  const open = () => setShowAlert(true);
  const close = () => setShowAlert(false);

  const cancelRef = useRef();

  return (
    <>
      <div
        css={css`
          margin: 10vh auto;
          display: flex;
          justify-content: center;
        `}
      >
        <Button onClick={open}>Open alert</Button>
      </div>
      <Alert
        title="Alert"
        actions={[
          <Button ref={cancelRef} onClick={close}>
            Nevermind, don't delete
          </Button>,
          <Button variant="outline" onClick={close} warning>
            Yes, delete
          </Button>,
        ]}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        leastDestructiveRef={cancelRef}
        aria="Alert"
        {...args}
      >
        <H0 display>Please Confirm!</H0>
        <P1>Are you sure you want to delete something?</P1>
      </Alert>
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
