import { Meta, Story } from '@storybook/react';

import { Label } from '../../';
import { Radio, RadioProps } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <Radio name="option" id="option-1" value="option-1" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: 'option',
  disabled: false,
};

const GroupTemplate: Story<RadioProps> = (args) => (
  <Label id="group">
    <Radio
      label="Option 1"
      name="option"
      id="option-1"
      value="option-1"
      {...args}
    />
    <Radio
      label="Option 2"
      name="option"
      id="option-2"
      value="option-2"
      {...args}
    />
    <Radio
      label="Option 3"
      name="option"
      id="option-3"
      value="option-3"
      {...args}
    />
    <Radio
      label="Option 4"
      name="option"
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
