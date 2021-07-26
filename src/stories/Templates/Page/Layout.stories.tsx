// Layout.stories.tsx

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
  IoPerson,
  IoExit,
  IoHelpCircle,
  IoOpen,
  IoAdd,
} from 'react-icons/io5';

import {
  Button,
  Sidemenu,
  Sidebar,
  Nav,
  NavSection,
  Header,
  IconButton,
  Profile,
  Dropdown,
  DropdownItem,
  Main,
  Card,
  Search,
  H2,
} from '../..';
import { Layout } from './Layout';

import ProfilePicture from '../../assets/profile.jpg';

export default {
  title: 'Templates/Layout',
  component: Layout,
} as Meta;

const Template = (args) => {
  return (
    <Layout sidebar {...args}>
      <Sidebar>
        <Dropdown
          button={
            <IconButton>
              <IoPerson />
            </IconButton>
          }
        >
          <DropdownItem
            before={
              <Profile>
                <img src={ProfilePicture} />
              </Profile>
            }
          >
            email@example.com
          </DropdownItem>
          <DropdownItem before={<IoSettingsSharp />}>
            Account settings
          </DropdownItem>
          <hr />
          <DropdownItem before={<IoExit />}>Logout</DropdownItem>
        </Dropdown>
        <Dropdown
          button={
            <IconButton>
              <IoHelpCircle />
            </IconButton>
          }
        >
          <DropdownItem before={<IoOpen />}>Slack commnunity</DropdownItem>
          <DropdownItem before={<IoOpen />}>Help docs</DropdownItem>
        </Dropdown>
      </Sidebar>
      <Sidemenu>
        <Header></Header>
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
      <div>
        <Header
          start={
            <>
              <H2>Website</H2>
            </>
          }
          end={
            <>
              <Search
                id="search"
                name="search"
                placeholder="Search pages by name"
              />
              <Button before={<IoAdd />}>New page</Button>
            </>
          }
        />
        <Main>
          <Card title="Pages" subtitle="Use your website to inform and excite.">
            Test
          </Card>
          <Card>Test</Card>
        </Main>
      </div>
    </Layout>
  );
};

export const Example = Template.bind({});

Example.parameters = {
  layout: 'fullscreen',
};
