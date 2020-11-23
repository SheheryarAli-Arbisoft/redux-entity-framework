import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/nodes/authentication/selectors';
import { likePost, unlikePost } from '../../redux/nodes/entities/posts/actions';
import { createComment } from '../../redux/nodes/entities/comments/actions';
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
  const { _id, title, content, likes, comments } = post;
  const dispatch = useDispatch();
  const { userId } = useSelector(getData);
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
      dispatch(createComment(_id, values));
      handleReset();
    },
  });

  useEffect(() => {
    setLiked(likes.indexOf(userId) !== -1);
  }, [likes]);

  return (
    <StyledCard {...rest}>
      <StyledCardContent>
        <Text variant='h5' gutterBottom>
          {title}
        </Text>
        <Text variant='body2'>{content}</Text>
        <StyledButton
          onClick={() => dispatch(liked ? unlikePost(_id) : likePost(_id))}
        >
          <i className={`fa${liked ? 's' : 'r'} fa-thumbs-up`} />
          {`${likes.length} likes`}
        </StyledButton>
        <div style={{ fontSize: '16px' }}>{`${comments.length} comments`}</div>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            name='comment'
            value={comment}
            onChange={handleChange}
            placeholder='Enter comment here'
          />
          <Button type='submit'>Submit</Button>
        </StyledForm>
      </StyledCardContent>
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
