import { ReactNode } from 'react';

import { H3, P2 } from '../../';
import { Styles, HeaderStyles, BodyStyles } from './Card.styles';

import theme from '../../../theme';

const { colors } = theme;

export type CardProps = {
  actions?: ReactNode[];
  children: ReactNode;
  subtitle?: string;
  title?: string;
};

export const Card = ({
  actions,
  children,
  subtitle,
  title,
  ...props
}: CardProps) => {
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
