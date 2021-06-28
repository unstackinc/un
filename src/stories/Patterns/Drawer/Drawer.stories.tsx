// Drawer.stories.tsx

import * as React from 'react';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

import { Drawer } from './Drawer';
import {
  Button,
  Textarea,
  Textbox,
  Dropdown,
  DropdownOption,
  H0,
  P1,
} from '../..';

export default {
  title: 'Patterns/Drawer',
  component: Drawer,
} as Meta;

const Template = (args) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const open = () => setShowDrawer(true);
  const close = () => setShowDrawer(false);

  return (
    <>
      <Button
        css={css`
          margin: 10vh auto;
        `}
        onClick={open}
      >
        Open drawer
      </Button>
      <Drawer
        actions={[
          <Button variant="tertiary" onClick={close}>
            Save only
          </Button>,
          <Button onClick={close}>Save &amp; Publish</Button>,
        ]}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        {...args}
      >
        <Textbox
          label="Unstack name"
          helpText="This will be used in your Unstack portal only."
          full
        />
        <Textbox
          label="Title"
          helpText="This will be used in the browser tab and should be 65 characters or less."
          full
        />
        <Textbox
          label="URL"
          helpText="The home page URL cannot be changed."
          full
          disabled
        />
        <Textbox
          label="Canonical URL"
          helpText="Leave blank if you want it to be prefilled with page's URL."
          full
        />
        <Textbox label="Meta Keywords" full />
        <Textarea label="Meta Description" full />
        <Dropdown
          label="Designate this as premium content?"
          options={[
            <DropdownOption value="no">No</DropdownOption>,
            <DropdownOption value="yes">Yes</DropdownOption>,
          ]}
          full
        />
        <Textbox label="Label" full />
      </Drawer>
    </>
  );
};

export const Example = Template.bind({});

Example.args = {
  title: 'Page settings',
  aria: 'Page settings',
};

Example.parameters = {
  layout: 'fullscreen',
};
