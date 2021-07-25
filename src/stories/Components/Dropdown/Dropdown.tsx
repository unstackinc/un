// Dropdown.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import { Menu, Transition } from '@headlessui/react';

import {
  Styles,
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
  value: string;
}

export const Dropdown = ({ button, children, value, ...props }: Props) => {
  return (
    <Menu as="div" css={Styles} {...props}>
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
      {before && <div css={BeforeStyles}>{before}</div>}
      {children}
    </Menu.Item>
  );
};

export default Dropdown;
