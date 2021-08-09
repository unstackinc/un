// Tag.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      options: ['info', 'danger', 'warning', 'success'],
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
  },
} as Meta;

const Template = (args) => <Tag {...args} />;

export const Example = Template.bind({});
Example.args = {
  variant: 'info',
  size: 'medium',
  children: 'Tag',
};
