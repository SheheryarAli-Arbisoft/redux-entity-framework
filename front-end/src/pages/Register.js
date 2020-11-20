import React from 'react';
import { Navbar } from '../components/Navbar';
import { Container, CenteredWrapper } from '../components/Container';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const Register = () => {
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
          <Input label='Name' required fullWidth />
          <Input fullWidth />
          <Input fullWidth />
          <Input fullWidth />
          <Button size='large' fullWidth>
            Register
          </Button>
        </CenteredWrapper>
      </Container>
    </>
  );
};
