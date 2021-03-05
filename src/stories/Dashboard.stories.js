import React from 'react';

import { Dashboard, DashboardExample } from './Dashboard';

export default {
  title: 'Templates/Dashboard',
  component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;
const TemplateExample = (args) => <DashboardExample {...args} />;

export const TemplateDashboard = Template.bind({});
TemplateDashboard.parameters = {
  layout: 'fullscreen',
}

export const ExampleDashboard = TemplateExample.bind({});
ExampleDashboard.parameters = {
  layout: 'fullscreen',
}