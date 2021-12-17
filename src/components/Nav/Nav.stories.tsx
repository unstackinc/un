import { Meta, Story } from '@storybook/react';

import { Icon } from '../..';
import { Nav, NavSection, NavProps } from './Nav';

export default {
  title: 'Components/Nav',
  component: Nav,
} as Meta;

const Template: Story<NavProps> = (args) => {
  return (
    <Nav {...args}>
      <NavSection
        icon={<Icon variant="star" />}
        label="Quickstart"
        to="quickstart"
        tag="3"
      />
      <NavSection
        icon={<Icon variant="chart" />}
        label="Insights"
        links={[
          {
            name: 'Traffic',
            to: 'traffic',
          },
          {
            name: 'A/B Tests',
            to: 'tests',
          },
          {
            name: 'Conversions',
            to: 'conversions',
          },
          {
            name: 'Sources',
            to: 'sources',
          },
          {
            name: 'SEO',
            to: 'seo',
          },
        ]}
      />
      <NavSection
        icon={<Icon variant="bag" />}
        label="Storefront"
        links={[
          {
            name: 'Products',
            to: 'products',
          },
          {
            name: 'Collections',
            to: 'collections',
          },
          {
            name: 'Variants',
            to: 'variants',
          },
          {
            name: 'Templates',
            to: 'templates',
          },
        ]}
        push
      />
      <NavSection
        icon={<Icon variant="page" />}
        label="Content"
        links={[
          {
            name: 'Website',
            to: 'website',
          },
          {
            name: 'Landing pages',
            to: 'landing',
          },
          {
            name: 'Dynamic pages',
            to: 'dynamic',
          },
          {
            name: 'Blog',
            to: 'blog',
          },
          {
            name: 'Forms',
            to: 'forms',
          },
          {
            name: 'Media',
            to: 'media',
          },
          {
            name: 'Database',
            to: 'database',
          },
        ]}
        push
      />
      <NavSection
        label="Contacts"
        icon={<Icon variant="people" />}
        to="contacts"
      />
      <NavSection
        icon={<Icon variant="puzzle" />}
        label="Design"
        links={[
          {
            name: 'Header & Footer',
            to: 'header-footer',
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
        icon={<Icon variant="console" />}
        label="Components"
        to="components"
        push
      />
      <NavSection
        icon={<Icon variant="settings" />}
        label="Settings"
        links={[
          {
            name: 'General',
            to: 'general',
          },
          {
            name: 'Payments',
            to: 'payments',
          },
          {
            name: 'Integrations',
            to: 'integrations',
          },
        ]}
      />
    </Nav>
  );
};

export const Example = Template.bind({});

Example.parameters = {
  layout: 'fullscreen',
};
