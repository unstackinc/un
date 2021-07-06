// Alert.stories.tsx

import * as React from 'react';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

import { Alert } from './Alert';
import { Button, H0, P1, P2 } from '../..';
import theme from '../../../theme';

const { colors } = theme;

export default {
  title: 'Patterns/Alert',
  component: Alert,
} as Meta;

const Template = (args) => {
  const [showAlert, setShowAlert] = useState(false);
  const open = () => setShowAlert(true);
  const close = () => setShowAlert(false);

  return (
    <>
      <Button
        css={css`
          margin: 10vh auto;
        `}
        onClick={open}
      >
        Open alert
      </Button>
      <Alert
        actions={[
          <Button onClick={close}>Nevermind, don't delete</Button>,
          <Button variant="outline" onClick={close} warning>
            Yes, delete
          </Button>,
        ]}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        aria="Alert"
        {...args}
      >
        <H0 display>Please Confirm!</H0>
        <P1>Are you sure you want to delete something?</P1>
        <P2 color={colors.text.secondary} display>
          (and we're totally not just flipping a field called "deleted" to
          "true" in our database, we're actually deleting something.)
        </P2>
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
