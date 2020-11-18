import React, { useState, useEffect } from 'react';
import moment from 'moment';
import _ from 'lodash';
import styled from 'styled-components';
import { WatchLater, ThumbUpAlt, ThumbUpAltOutlined } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData } from '../../redux/nodes/authentication/selectors';
import { likePost, unlikePost } from '../../redux/nodes/entities/posts/actions';
import { getComments } from '../../redux/nodes/entities/comments/selectors';
import { getUsers } from '../../redux/nodes/entities/users/selectors';
import { Comment } from './Comment';
import { GridContainer, GridItem } from '../Grid';
import { Text } from '../Text';
import { Button } from '../Button';
import { CreateCommentForm } from '../Forms';
import { StyledCard, StyledCardContent } from './styled';
import { propTypes, defaultProps } from './props';

const StyledWatchLaterIcon = styled(WatchLater)`
  font-size: inherit;
`;

export const Card = ({ post, ...rest }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(getAuthData);
  const { comments } = useSelector(getComments);
  const { users } = useSelector(getUsers);
  const [postLiked, setPostLiked] = useState(false);

  useEffect(() => {
    setPostLiked(post.likes.indexOf(userId) !== -1);
  }, [post.likes]);

  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <GridContainer>
          <GridItem xs={12}>
            <Text variant='h5' bold gutterBottom>
              {users[post.user].name}
            </Text>
          </GridItem>

          <GridItem xs={12}>
            <Text
              variant='body2'
              color='textSecondary'
              gutterBottom
              alignCenter
            >
              <StyledWatchLaterIcon />
              {`${moment(post.timestamp).fromNow()}`}
            </Text>
          </GridItem>

          <GridItem xs={12}>
            <Text variant='body1' gutterBottom>
              {post.content}
            </Text>
          </GridItem>

          <GridItem xs={12}>
            <Button
              variant='outlined'
              startIcon={postLiked ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
              marginBottom
              onClick={() =>
                dispatch(postLiked ? unlikePost(post._id) : likePost(post._id))
              }
            >
              {`${post.likes.length} likes`}
            </Button>
          </GridItem>

          <GridItem xs={12}>
            <Text variant='h6' gutterBottom>
              Comments
            </Text>
          </GridItem>

          <GridItem xs={12}>
            <CreateCommentForm postId={post._id} />
          </GridItem>

          {_.map(post.comments, commentId => (
            <Comment
              key={commentId}
              commentId={commentId}
              comments={comments}
              users={users}
            />
          ))}
        </GridContainer>
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
