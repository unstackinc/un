import React from 'react';

import { Search } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const PrimarySearch = Template.bind({});
PrimarySearch.args = {
  size: 'default',
  label: 'Search',
};

export const LargeSearch = Template.bind({});
LargeSearch.args = {
  size: 'large',
  label: 'Search',
};

export const FullSearch = Template.bind({});
FullSearch.args = {
  expand: 'full',
  label: 'Search',
};