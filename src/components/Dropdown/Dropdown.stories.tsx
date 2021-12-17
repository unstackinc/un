import { Meta, Story } from '@storybook/react';

import { IoPerson, IoSettingsSharp, IoExit } from 'react-icons/io5';

import { IconButton } from '../IconButton/IconButton';
import { Profile } from '../Profile/Profile';
import { Dropdown, DropdownProps } from './Dropdown';

import ProfilePicture from '../../assets/profile.jpg';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => (
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
