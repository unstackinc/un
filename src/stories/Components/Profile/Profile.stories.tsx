// Profile.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Profile } from './Profile';

import ProfilePicture from '../../assets/profile.jpg';

export default {
  title: 'Components/Profile',
  component: Profile,
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

const Template = (args) => <Profile {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  disabled: false,
  children: <img src={ProfilePicture} />,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  disabled: false,
  children: <img src={ProfilePicture} />,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
  disabled: false,
  children: <img src={ProfilePicture} />,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  variant: 'extralarge',
  disabled: false,
  children: <img src={ProfilePicture} />,
};
