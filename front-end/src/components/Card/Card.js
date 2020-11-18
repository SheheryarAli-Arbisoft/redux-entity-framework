import React from 'react';
import { StyledCard, StyledCardContent } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Card = ({ post, ...rest }) => {
  const { title, content } = post;

  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <Text variant='h5' gutterBottom>
          {title}
        </Text>
        <Text variant='body2'>{content}</Text>
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
