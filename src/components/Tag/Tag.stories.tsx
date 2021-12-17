import { Meta, Story } from '@storybook/react';

import { Tag, TagProps } from './Tag';

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

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Example = Template.bind({});
Example.args = {
  variant: 'info',
  size: 'medium',
  children: 'Tag',
};
