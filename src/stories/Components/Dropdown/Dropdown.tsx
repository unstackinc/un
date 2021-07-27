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
  FullStyles,
} from './Dropdown.styles';

const ItemTypes = {
  before: PropTypes.node,
  name: PropTypes.string,
  space: PropTypes.bool,
};

const Types = {
  button: PropTypes.node.isRequired,
  full: PropTypes.bool,
  options: PropTypes.arrayOf(ItemTypes).isRequired,
  value: PropTypes.string.isRequired,
};

type Props = InferProps<typeof Types>;

export const Dropdown = ({ button, full, options, value, ...props }: Props) => {
  return (
    <Menu css={[Styles, full && FullStyles]} {...props}>
      <MenuButton as="div" css={[ButtonStyles, full && FullStyles]}>
        {button}
      </MenuButton>
      <MenuList css={DropdownStyles}>
        {options.map((option) => {
          const { before, name, space } = option;
          const result = space!! ? (
            <hr />
          ) : (
            <MenuItem css={OptionStyles} {...props}>
              {before && <div css={BeforeStyles}>{before}</div>}
              {name}
            </MenuItem>
          );

          return result;
        })}
      </MenuList>
    </Menu>
  );
};

Dropdown.propTypes = Types;

export default Dropdown;
