import React from 'react';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const CreatePost = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Text variant='h3' gutterBottom>
          Create post
        </Text>
        <Input name='Title' fullWidth />
        <Input name='Content' rows={10} multiline fullWidth />
        <Button size='large'>Submit</Button>
      </Container>
    </>
  );
};
