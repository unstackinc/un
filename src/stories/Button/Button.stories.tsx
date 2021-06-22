// Button.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'warning'],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
    background: {
      control: { type: 'color' },
    },
    large: {
      control: { type: 'boolean' },
    },
    full: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: 'primary',
  children: 'Button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: 'secondary',
  children: 'Button',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  variant: 'outline',
  children: 'Button',
};

export const WarningButton = Template.bind({});
WarningButton.args = {
  variant: 'warning',
  children: 'Button',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  large: true,
  children: 'Button',
};

export const FullButton = Template.bind({});
FullButton.args = {
  large: true,
  full: true,
  children: 'Button',
};
