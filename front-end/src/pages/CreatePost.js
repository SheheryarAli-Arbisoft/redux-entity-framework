import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { createPost } from '../redux/nodes/entities/posts/actions';

export const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    onSubmit: values => {
      dispatch(createPost(values, history));
    },
  });

  const { title, content } = values;

  return (
    <>
      <Navbar />
      <Container>
        <form onSubmit={handleSubmit}>
          <Text variant='h3' gutterBottom>
            Create post
          </Text>
          <Input
            label='Title'
            name='title'
            value={title}
            onChange={handleChange}
            fullWidth
          />
          <Input
            label='Content'
            name='content'
            value={content}
            onChange={handleChange}
            rows={10}
            multiline
            fullWidth
          />
          <Button size='large' type='submit'>
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};
