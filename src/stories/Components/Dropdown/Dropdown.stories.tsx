// Dropdown.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { IoPerson, IoSettingsSharp, IoExit } from 'react-icons/io5';

import { IconButton, Profile } from '../../';
import { Dropdown, DropdownItem } from './Dropdown';

import ProfilePicture from '../../assets/profile.jpg';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template = (args) => (
  <Dropdown
    button={
      <IconButton>
        <IoPerson />
      </IconButton>
    }
    {...args}
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
    <DropdownItem before={<IoSettingsSharp />}>Account settings</DropdownItem>
    <hr />
    <DropdownItem before={<IoExit />}>Logout</DropdownItem>
  </Dropdown>
);

export const Default = Template.bind({});

Default.parameters = {
  layout: 'centered',
};
