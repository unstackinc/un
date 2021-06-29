// Nav.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  IoHome,
  IoPieChart,
  IoPeople,
  IoExtensionPuzzle,
  IoSettingsSharp,
} from 'react-icons/io5';

import { Nav, NavSection, NavLink } from './Nav';

export default {
  title: 'Patterns/Nav',
  component: Nav,
} as Meta;

const Template = (args) => {
  return (
    <Nav {...args}>
      <NavSection label="Home" icon={<IoHome />}>
        <NavLink to="quickstart">Quickstart</NavLink>
        <NavLink to="pages">Pages</NavLink>
        <NavLink to="blog">Blog posts</NavLink>
        <NavLink to="data">Data tables</NavLink>
        <NavLink to="media">Media</NavLink>
        <NavLink to="components">Components</NavLink>
      </NavSection>
      <NavSection label="Insights" icon={<IoPieChart />}>
        <NavLink to="reports">Reports</NavLink>
        <NavLink to="research">Research</NavLink>
      </NavSection>
      <NavSection label="CRM" icon={<IoPeople />}>
        <NavLink to="people">People</NavLink>
        <NavLink to="companies">Companies</NavLink>
        <NavLink to="forms">Forms</NavLink>
        <NavLink to="payments">Payments</NavLink>
        <NavLink to="campaigns">Campaigns</NavLink>
      </NavSection>
      <NavSection label="Design" icon={<IoExtensionPuzzle />}>
        <NavLink to="Branding">Branding</NavLink>
        <NavLink to="style-guide">Style Guide</NavLink>
        <NavLink to="sections">Sections</NavLink>
        <NavLink to="layouts">Layouts</NavLink>
        <NavLink to="templates">Templates</NavLink>
      </NavSection>
      <NavSection label="Settings" icon={<IoSettingsSharp />}>
        <NavLink to="General">General</NavLink>
        <NavLink to="Users">Users</NavLink>
        <NavLink to="integrations">Integrations</NavLink>
        <NavLink to="Billing">Billing</NavLink>
      </NavSection>
    </Nav>
  );
};

export const Example = Template.bind({});

Example.args = {};

Example.parameters = {
  layout: 'fullscreen',
};
