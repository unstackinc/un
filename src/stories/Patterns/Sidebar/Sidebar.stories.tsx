// Sidebar.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  IoPerson,
  IoSettingsSharp,
  IoExit,
  IoHelpCircle,
  IoOpen,
} from 'react-icons/io5';

import { IconButton, Profile, Dropdown, DropdownItem } from '../../';
import { Sidebar } from './Sidebar';

import ProfilePicture from '../../assets/profile.jpg';

export default {
  title: 'Patterns/Sidebar',
  component: Sidebar,
} as Meta;

const Template = (args) => {
  return (
    <Sidebar {...args}>
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
  );
};

export const Example = Template.bind({});

Example.args = {};

Example.parameters = {
  layout: 'fullscreen',
};
