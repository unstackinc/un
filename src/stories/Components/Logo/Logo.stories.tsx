// Logo.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Logo } from './Logo';

import LogoPicture from '../../assets/logo-dark.svg';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'extralarge'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template = (args) => <Logo {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: <img src={LogoPicture} />,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: <img src={LogoPicture} />,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: <img src={LogoPicture} />,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'extralarge',
  children: <img src={LogoPicture} />,
};
