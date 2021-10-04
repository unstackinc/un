import { Meta, Story } from '@storybook/react';

import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => (
  <Pagination {...args}></Pagination>
);

export const Example = Template.bind({});
