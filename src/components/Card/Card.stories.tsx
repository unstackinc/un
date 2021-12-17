import { Meta, Story } from '@storybook/react';

import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => {
  return <Card {...args}></Card>;
};

export const Example = Template.bind({});
