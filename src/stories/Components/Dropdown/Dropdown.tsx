// Dropdown.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';

import {
  Styles,
  ButtonStyles,
  DropdownStyles,
  OptionStyles,
  BeforeStyles,
} from './Dropdown.styles';

interface Props {
  button: ReactNode;
  children: any;
  value: string;
}

export const Dropdown = ({ button, children, value, ...props }: Props) => {
  return (
    <Menu css={Styles} {...props}>
      <MenuButton as="div" css={ButtonStyles}>
        {button}
      </MenuButton>
      <MenuList css={DropdownStyles}>{children}</MenuList>
    </Menu>
  );
};

interface ItemProps {
  before?: ReactNode;
  children: ReactNode;
}

export const DropdownItem = ({ before, children, ...props }: ItemProps) => {
  return (
    <MenuItem css={OptionStyles} {...props}>
      {before && <div css={BeforeStyles}>{before}</div>}
      {children}
    </MenuItem>
  );
};

export default Dropdown;
