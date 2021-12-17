import { css } from '@emotion/react';

import { Styles, FullStyles } from './ProgressBar.styles';

type ProgressBarProps = {
  full?: boolean;
  progress: number;
};

export const ProgressBar = ({ full, progress, ...props }: ProgressBarProps) => {
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
