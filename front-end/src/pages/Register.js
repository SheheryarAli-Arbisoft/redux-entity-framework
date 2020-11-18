import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthData } from '../redux/nodes/authentication/selectors';
import { Navbar } from '../components/Navbar';
import { CenteredContainer } from '../components/Container';
import { Text } from '../components/Text';
import { RegisterForm } from '../components/Forms';

export const Register = () => {
  const { isLoading, isAuthenticated } = useSelector(getAuthData);

  if (!isLoading && isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Navbar />
      <CenteredContainer>
        <Text variant='h2' gutterBottom>
          Register
        </Text>
        <Text marginBottom>Please enter the following information</Text>
        <RegisterForm />
      </CenteredContainer>
    </>
  );
};
