import React from 'react';

import { Nav, Tab, Link } from './Nav';

export default {
  title: 'Patterns/Nav',
  component: Nav,
};

const TemplateNav = (args) => <Nav {...args} />;
const TemplateTab = (args) => <Tab {...args} />;
const TemplateLink = (args) => <Link {...args} />;

export const NavContainer = TemplateNav.bind({});
NavContainer.parameters = {
  layout: 'fullscreen',
}

export const NavTab = TemplateTab.bind({});
NavTab.args = {
  active: false,
  label: 'Tab',
};

export const NavLink = TemplateLink.bind({});
NavLink.args = {
  link: 'link',
  label: 'Link',
  active: false,
};