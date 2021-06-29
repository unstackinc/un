// Checkbox.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Label } from '../..';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template = (args) => (
  <Checkbox name="option" id="option-1" value="option-1" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: 'option',
  disabled: false,
};

const GroupTemplate = (args) => (
  <Label id="group">
    <Checkbox
      label="Option 1"
      name="option-1"
      id="option-1"
      value="option-1"
      {...args}
    />
    <Checkbox
      label="Option 2"
      name="option-2"
      id="option-2"
      value="option-2"
      {...args}
    />
    <Checkbox
      label="Option 3"
      name="option-3"
      id="option-3"
      value="option-3"
      {...args}
    />
    <Checkbox
      label="Option 4"
      name="option-4"
      id="option-4"
      value="option-4"
      {...args}
    />
  </Label>
);

export const Group = GroupTemplate.bind({});
Group.args = {
  disabled: false,
};
