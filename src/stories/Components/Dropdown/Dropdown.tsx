// Dropdown.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import { Menu, Transition } from '@headlessui/react';

import {
  ButtonStyles,
  TransitionStyles,
  DropdownStyles,
  OptionStyles,
  BeforeStyles,
} from './Dropdown.styles';
import './Dropdown.transitions.css';

interface Props {
  button: ReactNode;
  children: any;
}

export const Dropdown = ({ button, children, ...props }: Props) => {
  return (
    <Menu as="div" {...props}>
      <Menu.Button css={ButtonStyles}>{button}</Menu.Button>
      <Transition
        enter="enter"
        enterFrom="enterFrom"
        enterTo="enterTo"
        leave="leave"
        leaveFrom="leaveFrom"
        leaveTo="leaveTo"
        css={TransitionStyles}
      >
        <Menu.Items css={DropdownStyles}>{children}</Menu.Items>
      </Transition>
    </Menu>
  );
};

interface ItemProps {
  before?: ReactNode;
  children: ReactNode;
}

export const DropdownItem = ({ before, children, ...props }: ItemProps) => {
  return (
    <Menu.Item as="div" css={OptionStyles} {...props}>
      <div css={BeforeStyles}>{before}</div>
      {children}
    </Menu.Item>
  );
};

export default Dropdown;
