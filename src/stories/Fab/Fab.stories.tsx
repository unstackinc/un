// Fab.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { FiPlus } from 'react-icons/fi';
import { Fab } from './Fab';

export default {
  title: 'Components/Fab',
  component: Fab,
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

const Template = (args) => <Fab {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  children: <FiPlus />,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  children: <FiPlus />,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
  children: <FiPlus />,
};
