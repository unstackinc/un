// Tag.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      options: ['primary', 'yellow', 'green', 'outline', 'outlineBlue'],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
    background: {
      control: { type: 'color' },
    },
    small: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  small: false,
  children: 'Tag',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  small: false,
  children: 'Tag',
};
