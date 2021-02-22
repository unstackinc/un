import React from 'react';

import { Dashboard } from './Dashboard';

export default {
  title: 'Templates/Dashboard',
  component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;

export const PrimaryDashboard = Template.bind({});