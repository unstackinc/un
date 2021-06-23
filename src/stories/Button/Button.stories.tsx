// Button.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'outline', 'warning'],
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

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  children: 'Button',
};

export const Full = Template.bind({});
Full.args = {
  large: true,
  full: true,
  children: 'Button',
};
