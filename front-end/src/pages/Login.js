import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginCurrentUser } from '../redux/nodes/authentication/actions';
import { getAuthData } from '../redux/nodes/authentication/selectors';
import { Navbar } from '../components/Navbar';
import { CenteredContainer } from '../components/Container';
import { Text } from '../components/Text';
import { LoginForm } from '../components/Forms';

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector(getAuthData);

  useEffect(() => {
    dispatch(loginCurrentUser());
  }, []);

  if (!isLoading && isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Navbar />
      <CenteredContainer>
        <Text variant='h2' gutterBottom>
          Login
        </Text>
        <Text marginBottom>Please enter your credentials</Text>
        <LoginForm />
      </CenteredContainer>
    </>
  );
};
