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

import { IconButton, Profile, Dropdown } from '../../';
import { Sidebar } from './Sidebar';

import ProfilePicture from '../../assets/profile.jpg';

export default {
  title: 'Patterns/Sidebar',
  component: Sidebar,
} as Meta;

const Template = (args) => {
  return (
    <Sidebar
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
      {...args}
    ></Sidebar>
  );
};

export const Example = Template.bind({});

Example.args = {};

Example.parameters = {
  layout: 'fullscreen',
};
