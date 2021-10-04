import { ReactNode } from 'react';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';

import {
  Styles,
  ButtonStyles,
  DropdownStyles,
  OptionStyles,
  BeforeStyles,
  FullStyles,
} from './Dropdown.styles';

type ItemProps = {
  before?: ReactNode;
  name?: string;
  space?: boolean;
};

export type DropdownProps = {
  button: ReactNode;
  full?: boolean;
  options: ItemProps[];
};

export const Dropdown = ({
  button,
  full,
  options,
  value,
  ...props
}: DropdownProps) => {
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

export default Dropdown;
