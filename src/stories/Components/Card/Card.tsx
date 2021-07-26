// Card.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import { H3, P2 } from '../../';
import { Styles, HeaderStyles, BodyStyles } from './Card.styles';

import theme from '../../../theme';

const { colors } = theme;

interface Props {
  title?: string;
  subtitle?: string;
  actions?: ReactNode[];
  children: ReactNode;
}

export const Card = ({
  title,
  subtitle,
  actions,
  children,
  ...props
}: Props) => {
  return (
    <div css={Styles} {...props}>
      {(title!! || subtitle!! || actions!!) && (
        <div css={HeaderStyles}>
          <div>
            {title && <H3 display>{title}</H3>}
            {subtitle && (
              <P2 color={colors.text.secondary} display>
                {subtitle}
              </P2>
            )}
          </div>
          <span>{actions}</span>
        </div>
      )}
      <div css={BodyStyles}>{children}</div>
    </div>
  );
};

export default Card;
