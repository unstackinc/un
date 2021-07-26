// Header.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  IoPerson,
  IoSettingsSharp,
  IoExit,
  IoHelpCircle,
  IoOpen,
} from 'react-icons/io5';

import { IconButton, Profile, Dropdown, DropdownItem, H0 } from '../../';

import ProfilePicture from '../../assets/profile.jpg';

import { Header } from './Header';

export default {
  title: 'Patterns/Header',
  component: Header,
} as Meta;

const Template = (args) => {
  return <Header {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  start: (
    <>
      <H0>Website</H0>
    </>
  ),
  end: (
    <>
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
    </>
  ),
};

Example.parameters = {
  layout: 'fullscreen',
};
