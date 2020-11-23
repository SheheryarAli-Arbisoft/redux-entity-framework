import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/nodes/authentication/selectors';
import { likePost, unlikePost } from '../../redux/nodes/entities/posts/actions';
import { createComment } from '../../redux/nodes/entities/comments/actions';
import { getComments } from '../../redux/nodes/entities/comments/selectors';
import {
  StyledCard,
  StyledCardContent,
  StyledButton,
  StyledForm,
  StyledInput,
} from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';
import { Button } from '../Button';

export const Card = ({ post, ...rest }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(getData);
  const { comments } = useSelector(getComments);
  const [liked, setLiked] = useState(false);
  const {
    values: { comment },
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: values => {
      dispatch(createComment(post._id, values));
      handleReset();
    },
  });

  useEffect(() => {
    setLiked(post.likes.indexOf(userId) !== -1);
  }, [post.likes]);

  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <Text variant='h5' gutterBottom>
          {post.title}
        </Text>
        <Text variant='body2'>{post.content}</Text>
        <StyledButton
          onClick={() =>
            dispatch(liked ? unlikePost(post._id) : likePost(post._id))
          }
        >
          <i className={`fa${liked ? 's' : 'r'} fa-thumbs-up`} />
          {`${post.likes.length} likes`}
        </StyledButton>
        <div style={{ fontSize: '16px' }}>
          {`${post.comments.length} comments`}
        </div>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            name='comment'
            value={comment}
            onChange={handleChange}
            placeholder='Enter comment here'
          />
          <Button type='submit'>Submit</Button>
        </StyledForm>
        {post.comments.map(commentId => (
          <div key={commentId}>{comments[commentId].content}</div>
        ))}
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
