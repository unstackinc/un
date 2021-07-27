// Layout.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

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
  Main,
  Card,
  Search,
  H2,
  P2,
  Logo,
} from '../..';
import { Layout } from './Layout';
import theme from '../../../theme';

const { padding } = theme;

import AvatarBlue from '../../assets/avatar-blue.svg';
import AvatarRed from '../../assets/avatar-red.svg';
import AvatarYellow from '../../assets/avatar-yellow.svg';
import ProfilePicture from '../../assets/profile.jpg';
import LogoPicture from '../../assets/logo-light.svg';

export default {
  title: 'Templates/Layout',
  component: Layout,
} as Meta;

const Template = (args) => {
  return (
    <Layout sidebar {...args}>
      <Sidebar
        start={
          <Logo>
            <img src={LogoPicture} />
          </Logo>
        }
        end={
          <>
            <Dropdown
              button={
                <IconButton>
                  <IoPerson />
                </IconButton>
              }
              options={[
                {
                  before: (
                    <Profile>
                      <img src={ProfilePicture} />
                    </Profile>
                  ),
                  name: 'email@example.com',
                },
                { before: <IoSettingsSharp />, name: 'Account settings' },
                { space: true },
                { before: <IoExit />, name: 'Logout' },
              ]}
            />
            <Dropdown
              button={
                <IconButton>
                  <IoHelpCircle />
                </IconButton>
              }
              options={[
                { before: <IoOpen />, name: 'Slack commnunity' },
                { before: <IoOpen />, name: 'Help docs' },
              ]}
            />
          </>
        }
      ></Sidebar>
      <Sidemenu>
        <Header padding={padding.md}></Header>
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
          padding="5vw"
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
