// Textbox.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Textbox } from './Textbox';

export default {
  title: 'Components/Textbox',
  component: Textbox,
  argTypes: {
    full: {
      control: { type: 'boolean' },
    },
    warning: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template = (args) => <Textbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  warningText: '',
  helpText: '',
  full: false,
  warning: false,
  disabled: false,
};
