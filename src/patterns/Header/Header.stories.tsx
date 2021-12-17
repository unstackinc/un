import { Meta, Story } from '@storybook/react';

import {
  IoPerson,
  IoSettingsSharp,
  IoExit,
  IoHelpCircle,
  IoOpen,
} from 'react-icons/io5';

import { IconButton, Profile, Dropdown, H0 } from '../../components';

import ProfilePicture from '../../assets/profile.jpg';

import { Header, HeaderProps } from './Header';

export default {
  title: 'Patterns/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => {
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
        options={[
          { before: <IoOpen />, name: 'Slack commnunity' },
          { before: <IoOpen />, name: 'Help docs' },
        ]}
      />
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
    </>
  ),
};

Example.parameters = {
  layout: 'fullscreen',
};
