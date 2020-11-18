import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../../redux/nodes/features/postFeed/actions';
import { Input } from '../Input';
import { Button } from '../Button';

export const CreatePostForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: { content: '' },
    onSubmit: values => {
      dispatch(createNewPost(values));
      handleReset();
    },
    validationSchema: Yup.object().shape({
      content: Yup.string().required('Required'),
    }),
  });

  useEffect(() => {
    const handleClickOutside = e => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        handleReset();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [formRef]);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input
        placeholder='Write your post here...'
        name='content'
        value={values.content}
        onChange={handleChange}
        rowsMax={5}
        fullWidth
        multiline
        error={errors.content && touched.content}
        helperText={touched.content && errors.content}
      />
      <Button size='large' type='submit' fullWidth>
        Create post
      </Button>
    </form>
  );
};
