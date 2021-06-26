// Overlay.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Overlay } from './Overlay';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {
    showOverlay: {
      control: { type: 'boolean' },
    },
    background: {
      control: { type: 'color' },
    },
  },
} as Meta;

const Template = (args) => <Overlay {...args} />;

export const Default = Template.bind({});

Default.args = {
  showOverlay: true,
  children: '',
};

Default.parameters = {
  layout: 'fullscreen',
};
