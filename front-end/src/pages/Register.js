import React from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../components/Navbar';
import {
  Container,
  CenteredWrapper,
  FormWrapper,
} from '../components/Container';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { registerUser } from '../redux/nodes/authentication/actions';
import { getData } from '../redux/nodes/authentication/selectors';

export const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector(getData);
  const {
    values: { name, email, password, cpassword },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
    },
    onSubmit: values => {
      dispatch(registerUser(values));
    },
  });

  if (!isLoading && isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Navbar />
      <Container>
        <CenteredWrapper>
          <Text variant='h2' gutterBottom>
            Register
          </Text>
          <Text style={{ marginBottom: '20px' }}>
            Fields marked with (*) are required
          </Text>
          <FormWrapper>
            <form onSubmit={handleSubmit}>
              <Input
                label='Name'
                name='name'
                value={name}
                onChange={handleChange}
                required
                fullWidth
              />
              <Input
                label='Email'
                name='email'
                value={email}
                onChange={handleChange}
                type='email'
                required
                fullWidth
              />
              <Input
                label='Password'
                name='password'
                value={password}
                onChange={handleChange}
                type='password'
                required
                fullWidth
              />
              <Input
                label='Confirm password'
                name='cpassword'
                value={cpassword}
                onChange={handleChange}
                type='password'
                required
                fullWidth
              />
              <Button size='large' type='submit' fullWidth>
                Register
              </Button>
            </form>
          </FormWrapper>
        </CenteredWrapper>
      </Container>
    </>
  );
};
