// Select.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
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

const Template = (args) => (
  <Select
    options={[
      { name: 'Option 1', value: 'option1' },
      { name: 'Option 2', value: 'option2' },
      { name: 'Option 3', value: 'option3' },
      { name: 'Option 4', value: 'option4' },
      { name: 'Option 5', value: 'option5' },
      { name: 'Option 6', value: 'option6' },
      { name: 'Option 7', value: 'option7' },
      { name: 'Option 8', value: 'option8' },
    ]}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  warningText: '',
  helpText: '',
  full: false,
  warning: false,
  disabled: false,
};
