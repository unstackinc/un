import { css } from '@emotion/react';

import theme from '../../../theme';

const { colors, fonts } = theme;

export const Styles = css`
  font-family: ${fonts.body};
  width: 100%;

  thead {
    border-bottom: 1px solid ${colors.button.background.secondary};
  }

  th {
    text-align: left;
  }

  tr {
    border-bottom: 1px solid ${colors.border};

    :last-child td {
      border-bottom: none;
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;

    :last-child {
      border-right: 0;
    }
  }

  td {
    input {
      font-size: 1rem;
      padding: 0;
      margin: 0;
      border: 0;
    }
  }

  table {
    display: flex;
    flex-flow: column nowrap;
    font-size: 0.8rem;
    margin: 0.5rem;
    line-height: 1.5;
    border-bottom: 1px solid;
    border-color: ${colors.border};
    flex: 1 1 auto;
  }

  th > td {
    white-space: normal;
    justify-content: center;
  }

  tr {
    background-color: #ffffff;
    width: 100%;
  }

  td {
    flex-grow: 1;
    flex-basis: 0;
    padding: 0.5em;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0px;
    white-space: nowrap;
    border-bottom: 1px solid ${colors.border};
  }
`;
