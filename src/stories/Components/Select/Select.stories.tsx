// Select.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Select, SelectOption } from './Select';

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
      <SelectOption value="option1">Option 1</SelectOption>,
      <SelectOption value="option2">Option 2</SelectOption>,
      <SelectOption value="option3">Option 3</SelectOption>,
      <SelectOption value="option4">Option 4</SelectOption>,
      <SelectOption value="option5">Option 5</SelectOption>,
      <SelectOption value="option6">Option 6</SelectOption>,
      <SelectOption value="option7">Option 7</SelectOption>,
      <SelectOption value="option8">Option 8</SelectOption>,
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
