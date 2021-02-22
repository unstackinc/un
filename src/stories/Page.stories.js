import React from 'react';

import { Page } from './Page';

export default {
  title: 'Patterns/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const PageLeft = Template.bind({});
PageLeft.args = {
  align: 'left',
};

export const PageRight = Template.bind({});
PageRight.args = {
  align: 'right',
};

