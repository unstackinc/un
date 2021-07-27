// Dropdown.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { IoPerson, IoSettingsSharp, IoExit } from 'react-icons/io5';

import { IconButton, Profile } from '../../';
import { Dropdown } from './Dropdown';

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
    options={[
      {
        before: (
          <Profile>
            <img src={ProfilePicture} />
          </Profile>
        ),
        name: 'email@example.com',
      },
      {
        before: <IoSettingsSharp />,
        name: 'Account settings',
      },
      {
        space: true,
      },
      {
        before: <IoExit />,
        name: 'Logout',
      },
    ]}
    value="menu"
    {...args}
  />
);

export const Default = Template.bind({});

Default.parameters = {
  layout: 'centered',
};
