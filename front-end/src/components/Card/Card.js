import React, { useState } from 'react';
import { StyledCard, StyledCardContent, StyledWrapper } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Card = ({ post, ...rest }) => {
  const { title, content, likes } = post;
  const [liked, setLiked] = useState(false);

  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <Text variant='h5' gutterBottom>
          {title}
        </Text>
        <Text variant='body2'>{content}</Text>
        <StyledWrapper onClick={() => setLiked(value => !value)}>
          <i className={`fa${liked ? 's' : 'r'} fa-thumbs-up`} />
          {`${likes.length} likes`}
        </StyledWrapper>
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
