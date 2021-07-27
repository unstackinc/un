// Drawer.stories.tsx

import * as React from 'react';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

import { Drawer } from './Drawer';
import { Button, Textarea, Textbox, Select } from '../..';

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
      <div
        css={css`
          margin: 10vh auto;
          display: flex;
          justify-content: center;
        `}
      >
        <Button onClick={open}>Open drawer</Button>
      </div>
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
          id="name"
          name="name"
          helpText="This will be used in your Unstack portal only."
          full
        />
        <Textbox
          label="Title"
          id="title"
          name="title"
          helpText="This will be used in the browser tab and should be 65 characters or less."
          full
        />
        <Textbox
          label="URL"
          id="url"
          name="url"
          helpText="The home page URL cannot be changed."
          full
          disabled
        />
        <Textbox
          label="Canonical URL"
          id="canonical_url"
          name="canonical_url"
          helpText="Leave blank if you want it to be prefilled with page's URL."
          full
        />
        <Textbox label="Meta Keywords" id="keywords" name="keywords" full />
        <Textarea
          label="Meta Description"
          id="description"
          name="description"
          full
        />
        <Select
          label="Designate this as premium content?"
          id="premium"
          name="premium"
          value="premium"
          options={[
            { name: 'No', value: 'no' },
            { name: 'Yes', value: 'yes' },
          ]}
          full
        />
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
