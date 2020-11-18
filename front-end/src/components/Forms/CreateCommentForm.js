import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createComment } from '../../redux/nodes/entities/comments/actions';
import { Input } from '../Input';
import { Button } from '../Button';

export const CreateCommentForm = ({ postId }) => {
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
    initialValues: {
      content: '',
    },
    onSubmit: values => {
      dispatch(createComment(postId, values));
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
        placeholder='Write comment here...'
        name='content'
        value={values.content}
        onChange={handleChange}
        size='small'
        fullWidth
        error={errors.content && touched.content}
        helperText={touched.content && errors.content}
      />
      <Button type='submit' displayNone />
    </form>
  );
};

CreateCommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};
