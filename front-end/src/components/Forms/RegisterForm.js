import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/nodes/authentication/actions';
import { Input } from '../Input';
import { Button } from '../Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
    },
    onSubmit: values => {
      dispatch(registerUser(values));
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      cpassword: Yup.string()
        .equals([Yup.ref('password')], 'Passwords do not match')
        .required('Required'),
    }),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Name'
        name='name'
        value={values.name}
        onChange={handleChange}
        fullWidth
        error={errors.name && touched.name}
        helperText={touched.name && errors.name}
      />
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
      <Input
        label='Confirm password'
        name='cpassword'
        value={values.cpassword}
        onChange={handleChange}
        type='password'
        fullWidth
        error={errors.cpassword && touched.cpassword}
        helperText={touched.cpassword && errors.cpassword}
      />
      <Button size='large' type='submit' fullWidth>
        Register
      </Button>
    </form>
  );
};
