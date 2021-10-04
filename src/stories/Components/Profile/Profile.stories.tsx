import { Meta, Story } from '@storybook/react';

import { Profile, ProfileProps } from './Profile';

import ProfilePicture from '../../assets/profile.jpg';

export default {
  title: 'Components/Profile',
  component: Profile,
  argTypes: {
    variant: {
      options: ['small', 'medium', 'large', 'extralarge'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  children: <img src={ProfilePicture} />,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  children: <img src={ProfilePicture} />,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
  children: <img src={ProfilePicture} />,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  variant: 'extralarge',
  children: <img src={ProfilePicture} />,
};
