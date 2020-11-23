import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCard, StyledCardContent, StyledWrapper } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';
import { getData } from '../../redux/nodes/authentication/selectors';
import { likePost } from '../../redux/nodes/entities/posts/actions';

export const Card = ({ post, ...rest }) => {
  const { _id, title, content, likes, comments } = post;
  const dispatch = useDispatch();
  const { userId } = useSelector(getData);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(likes.map(like => like.user).indexOf(userId) !== -1);
  }, [likes]);

  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <Text variant='h5' gutterBottom>
          {title}
        </Text>
        <Text variant='body2'>{content}</Text>
        <StyledWrapper onClick={() => dispatch(likePost(_id))}>
          <i className={`fa${liked ? 's' : 'r'} fa-thumbs-up`} />
          {`${likes.length} likes`}
        </StyledWrapper>
        <StyledWrapper>{`${comments.length} comments`}</StyledWrapper>
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
