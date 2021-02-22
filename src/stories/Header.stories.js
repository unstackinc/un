import React from 'react';

import { Header } from './Header';

export default {
  title: 'Patterns/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderLeft = Template.bind({});
HeaderLeft.args = {
  align: 'left',
};

export const HeaderRight = Template.bind({});
HeaderRight.args = {
  align: 'right',
};

