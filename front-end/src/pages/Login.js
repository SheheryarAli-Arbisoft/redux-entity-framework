import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Navbar } from '../components/Navbar';
import {
  Container,
  CenteredWrapper,
  FormWrapper,
} from '../components/Container';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { loginUser } from '../redux/nodes/authentication/actions';

export const Login = () => {
  const dispatch = useDispatch();
  const {
    values: { email, password },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });

  return (
    <>
      <Navbar />
      <Container>
        <CenteredWrapper>
          <Text variant='h2' gutterBottom>
            Login
          </Text>
          <Text style={{ marginBottom: '20px' }}>
            Fields marked with (*) are required
          </Text>
          <FormWrapper>
            <form onSubmit={handleSubmit}>
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
              <Button size='large' type='submit' fullWidth>
                Login
              </Button>
            </form>
          </FormWrapper>
        </CenteredWrapper>
      </Container>
    </>
  );
};
