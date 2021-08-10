// ProgressBar.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Styles, FullStyles } from './ProgressBar.styles';

const Types = {
  full: PropTypes.bool,
  progress: PropTypes.number.isRequired,
};

type Props = InferProps<typeof Types>;

export const ProgressBar = ({ full, progress, ...props }: Props) => {
  return (
    <div
      css={[
        Styles,
        full && FullStyles,
        css`
          &::before {
            width: ${progress}%;
          }
        `,
      ]}
      {...props}
    ></div>
  );
};

ProgressBar.defaultProps = {
  full: false,
  progress: 0,
};

ProgressBar.propTypes = Types;

export default ProgressBar;
