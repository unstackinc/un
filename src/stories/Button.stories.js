import React from 'react';

import { Button } from './Button';

import { color } from '../utils';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    background: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: 'primary',
  label: 'Button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: 'secondary',
  label: 'Button',
  background: color.white,
};

export const WarningButton = Template.bind({});
WarningButton.args = {
  type: 'warning',
  label: 'Button',
  background: color.red,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
  label: 'Button',
};