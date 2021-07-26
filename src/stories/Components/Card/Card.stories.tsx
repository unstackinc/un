// Card.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const Example = Template.bind({});
