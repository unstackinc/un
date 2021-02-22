import { createGlobalStyle } from "styled-components";

import {
  color, opacity,
  space,
  border, radius,
  h1, h2, h3, d1, code, webkit
} from "../utils";

export const GlobalStyle = createGlobalStyle`  
  html {
    background-color: ${color.white};
    font-size: 1rem;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${color.white};
    ${d1};
    ${webkit};
  }
  h1 {
    ${h1};
  }
  h2 {
    ${h2};
  }
  h3 {
    ${h3};
  }
  p {
    ${d1};
  }
  dfn,
  em,
  i {
    font-style: italic;
  }
  strong,
  b {
    font-weight: bolder;
  }
  a {
    color: ${color.primary};
    text-decoration: underline;
    &:visited {
      color: ${color.purple};
    }
    &:hover,
    &:focus,
    &:active {
      color: ${color.primary};
    }
    &:focus {
      outline: inherit;
    }
    &:hover,
    &:active {
      outline: none;
    }
  }
  pre {
    overflow-x: auto;
    code {
      border-radius: ${radius.sm};
      padding: ${space.em.md};
      display: block;
    }
  }
  pre,
  code,
  var,
  samp,
  kbd {
    ${code};
  }
  img {
    height: auto;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  input {
    &[type="text"],
    &[type="email"],
    &[type="url"],
    &[type="password"],
    &[type="search"],
    &[type="number"],
    &[type="tel"],
    &[type="range"],
    &[type="date"],
    &[type="month"],
    &[type="week"],
    &[type="time"],
    &[type="datetime"],
    &[type="datetime-local"],
    &[type="color"] {
      display: flex;
      width: 100% !important;
      color: ${color.black};
      padding: ${space.em.xs} ${space.em.sm};
      box-sizing: border-box;
      margin-bottom: ${space.rem.xs};
      border: ${border.md} solid ${color.grey2};
      border-radius: ${radius.sm};
      ${d1};
      &:hover {
        border-color: ${color.grey3};
      }
      &:focus {
        outline: none;
        border-color: ${color.primary};
      }
      &:disabled {
        user-select: none;
        opacity: ${opacity[5]};
      }
      /*&:invalid {
        border-color: $color--red;
      //}*/
    }
  }
`;
