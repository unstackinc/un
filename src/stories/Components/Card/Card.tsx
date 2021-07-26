// Card.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { H3, P2 } from '../../';
import { Styles, HeaderStyles, BodyStyles } from './Card.styles';

import theme from '../../../theme';

const { colors } = theme;

const Types = {
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

type Props = InferProps<typeof Types>;

export const Card = ({
  actions,
  children,
  subtitle,
  title,
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

Card.propTypes = Types;

export default Card;
