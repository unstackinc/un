import React from 'react';

import { Nav, Tab, Link } from './Nav';

export default {
  title: 'Patterns/Nav',
  component: Nav,
};

const TemplateNav = (args) => <Nav {...args} />;
const TemplateTab = (args) => <Tab {...args} />;
const TemplateLink = (args) => <Link {...args} />;

export const PrimaryNavigation = TemplateNav.bind({});

export const PrimaryTab = TemplateTab.bind({});
PrimaryTab.args = {
  active: false,
  label: 'Tab',
};

export const PrimaryLink = TemplateLink.bind({});
PrimaryLink.args = {
  link: 'link',
  label: 'Link',
  active: false,
};