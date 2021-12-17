import { Meta, Story } from '@storybook/react';

import { Label } from '../Typography';
import { Toggle, ToggleProps } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<ToggleProps> = () => (
  <Toggle name="option" id="option-1" value="option-1" />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: 'option',
  disabled: false,
};

const GroupTemplate: Story<ToggleProps> = () => (
  <Label id="group">
    <Toggle label="Option 1" name="option-1" id="option-1" value="option-1" />
    <Toggle label="Option 2" name="option-2" id="option-2" value="option-2" />
    <Toggle label="Option 3" name="option-3" id="option-3" value="option-3" />
    <Toggle label="Option 4" name="option-4" id="option-4" value="option-4" />
  </Label>
);

export const Group = GroupTemplate.bind({});
