// Dropdown.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';

import {
  Styles,
  ButtonStyles,
  DropdownStyles,
  OptionStyles,
  BeforeStyles,
} from './Dropdown.styles';

const Types = {
  button: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
  value: PropTypes.string.isRequired,
};

type Props = InferProps<typeof Types>;

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

Dropdown.propTypes = Types;

const ItemTypes = {
  before: PropTypes.node,
  children: PropTypes.node.isRequired,
};

type ItemProps = InferProps<typeof ItemTypes>;

export const DropdownItem = ({ before, children, ...props }: ItemProps) => {
  return (
    <MenuItem css={OptionStyles} {...props}>
      {before && <div css={BeforeStyles}>{before}</div>}
      {children}
    </MenuItem>
  );
};

DropdownItem.propTypes = ItemTypes;

export default Dropdown;
