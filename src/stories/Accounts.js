/*import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import { color, opacity, space, d1 } from "../utils";

const UnSearch = styled.label`
  position: relative;
  border-radius: ${space.em.xs};
  background-color: ${color.transparent};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${space.rem.xs};
  padding: ${space.rem.sm};
  color: ${color.grey3};
  &:disabled,
  &.disabled {
    user-select: none;
    cursor: not-allowed;
    opacity: ${opacity[25]};
    > * {
      cursor: not-allowed;
    }
  }
  &.default {
    width: 16rem;
    max-width: 16rem;
  }
  &.large {
    width: 32rem;
    max-width: 32rem;
  }
  &.full {
    width: 100%;
    max-width: 100%;
  }
  input {
    ${d1}
    background: none;
    border: none;
    flex: 1;
    max-width: 100%;
    &:focus {
      outline: none;
    }
  }
  svg {
    user-select: none;
    min-width: 1.5rem;
    min-height: 1.5rem;
  }
`;

/**
 * Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation.
 */

export const Accounts = ({ size, expand, disabled, label, ...props }) => {
  return (
    <UnSearch className={[size, expand, disabled ? `disabled` : []].join(" ")}>
      <IoSearch />
      <input type="search" placeholder={label} disabled={disabled} {...props} />
    </UnSearch>
  );
};

Accounts.propTypes = {
  size: PropTypes.oneOf(["default", "large"]),
  expand: PropTypes.oneOf(["block", "full"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Accounts.defaultProps = {
  size: "default",
  expand: "block",
  disabled: false,
  onClick: undefined,
};

export default Accounts;
