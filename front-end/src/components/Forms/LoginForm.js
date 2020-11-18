import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/nodes/authentication/actions';
import { Input } from '../Input';
import { Button } from '../Button';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(loginUser(values));
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Email'
        name='email'
        value={values.email}
        onChange={handleChange}
        fullWidth
        error={errors.email && touched.email}
        helperText={touched.email && errors.email}
      />
      <Input
        label='Password'
        name='password'
        value={values.password}
        onChange={handleChange}
        type='password'
        fullWidth
        error={errors.password && touched.password}
        helperText={touched.password && errors.password}
      />
      <Button size='large' type='submit' fullWidth>
        Login
      </Button>
    </form>
  );
};
