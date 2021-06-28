// Textarea.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
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

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  warningText: '',
  helpText: '',
  full: false,
  warning: false,
  disabled: false,
};
