// Sidemenu.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  IoStar,
  IoHome,
  IoPieChart,
  IoPeople,
  IoExtensionPuzzle,
  IoTerminal,
  IoSettingsSharp,
} from 'react-icons/io5';

import { Nav, NavSection } from '../..';
import { Sidemenu } from './Sidemenu';

export default {
  title: 'Patterns/Sidemenu',
  component: Sidemenu,
} as Meta;

const Template = (args) => {
  return (
  <Sidemenu {...args}>
    <Nav>
      <NavSection
        icon={<IoStar />}
        label="Quickstart"
        to="quickstart"
        tag="3"
      ></NavSection>
      <NavSection
        icon={<IoHome />}
        label="Home"
        links={[
          {
            name: 'Pages',
            to: 'pages',
          },
          {
            name: 'Blog posts',
            to: 'blog',
          },
          {
            name: 'Data tables',
            to: 'data',
          },
          {
            name: 'Media',
            to: 'media',
          },
        ]}
        push
      />
      <NavSection
        icon={<IoPieChart />}
        label="Insights"
        links={[
          {
            name: 'Reports',
            to: 'reports',
          },
          {
            name: 'Research',
            to: 'research',
          },
        ]}
      />
      <NavSection
        label="Contacts"
        icon={<IoPeople />}
        links={[
          {
            name: 'People',
            to: 'people',
            tag: '11,716',
          },
          {
            name: 'Forms',
            to: 'forms',
          },
          {
            name: 'Payments',
            to: 'payments',
          },
        ]}
      />
      <NavSection
        icon={<IoExtensionPuzzle />}
        label="Design"
        links={[
          {
            name: 'Branding',
            to: 'branding',
          },
          {
            name: 'Style Guide',
            to: 'style-guide',
          },
          {
            name: 'Sections',
            to: 'sections',
          },
        ]}
      />
      <NavSection
        icon={<IoTerminal />}
        label="Components"
        to="components"
        push
      />
      <NavSection
        icon={<IoSettingsSharp />}
        label="Settings"
        links={[
          {
            name: 'General',
            to: 'general',
          },
          {
            name: 'Users',
            to: 'users',
          },
          {
            name: 'Integrations',
            to: 'integrations',
          },
          {
            name: 'Billing',
            to: 'billing',
          },
        ]}
      />
    </Nav>
  </Sidemenu>
  );
};

export const Example = Template.bind({});

Example.parameters = {
  layout: 'fullscreen',
};
