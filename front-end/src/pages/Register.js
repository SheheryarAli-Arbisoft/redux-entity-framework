import React from 'react';
import { useFormik } from 'formik';
import { Navbar } from '../components/Navbar';
import {
  Container,
  CenteredWrapper,
  FormWrapper,
} from '../components/Container';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const Register = () => {
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
      console.log(values);
    },
  });

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
