// Button.stories.tsx

// import * as React from 'react';
// import { Meta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'outline'],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
    background: {
      control: { type: 'color' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    full: {
      control: { type: 'boolean' },
    },
    warning: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  full: false,
  warning: false,
  disabled: false,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  full: false,
  warning: false,
  disabled: false,
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'medium',
  full: false,
  warning: false,
  disabled: false,
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'medium',
  full: false,
  warning: false,
  disabled: false,
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  full: false,
  warning: false,
  disabled: false,
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  full: false,
  warning: false,
  disabled: false,
  children: 'Button',
};

export const Full = Template.bind({});
Full.args = {
  size: 'medium',
  full: true,
  warning: false,
  disabled: false,
  children: 'Button',
};
