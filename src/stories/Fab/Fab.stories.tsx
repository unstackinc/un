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

export const SmallFab = Template.bind({});
SmallFab.args = {
  variant: 'small',
  children: <FiPlus />,
};

export const MediumFab = Template.bind({});
MediumFab.args = {
  variant: 'medium',
  children: <FiPlus />,
};

export const LargeFab = Template.bind({});
LargeFab.args = {
  variant: 'large',
  children: <FiPlus />,
};
