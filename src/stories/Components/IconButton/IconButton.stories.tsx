// IconButton.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { IoAdd } from 'react-icons/io5';
import { IconButton } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template = (args) => <IconButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  disabled: false,
  children: <IoAdd />,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  disabled: false,
  children: <IoAdd />,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
  disabled: false,
  children: <IoAdd />,
};
