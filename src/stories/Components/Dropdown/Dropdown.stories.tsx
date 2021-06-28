// Dropdown.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Dropdown, DropdownOption } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
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
  <Dropdown
    options={[
      <DropdownOption value="option1">Option 1</DropdownOption>,
      <DropdownOption value="option2">Option 2</DropdownOption>,
      <DropdownOption value="option3">Option 3</DropdownOption>,
      <DropdownOption value="option4">Option 4</DropdownOption>,
      <DropdownOption value="option5">Option 5</DropdownOption>,
      <DropdownOption value="option6">Option 6</DropdownOption>,
      <DropdownOption value="option7">Option 7</DropdownOption>,
      <DropdownOption value="option8">Option 8</DropdownOption>,
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
