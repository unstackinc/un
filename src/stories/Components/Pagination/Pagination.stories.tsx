// Pagination.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template = (args) => <Pagination {...args}></Pagination>;

export const Example = Template.bind({});
