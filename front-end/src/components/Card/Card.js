import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledCard, StyledCardContent, StyledWrapper } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';
import { likePost } from '../../redux/nodes/entities/posts/actions';

export const Card = ({ post, ...rest }) => {
  const dispatch = useDispatch();
  const { _id, title, content, likes, comments } = post;

  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <Text variant='h5' gutterBottom>
          {title}
        </Text>
        <Text variant='body2'>{content}</Text>
        <StyledWrapper onClick={() => dispatch(likePost(_id))}>
          <i className='fas fa-thumbs-up' />
          {`${likes.length} likes`}
        </StyledWrapper>
        <StyledWrapper>{`${comments.length} comments`}</StyledWrapper>
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
