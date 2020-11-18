import React from 'react';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container';
import { Card } from '../components/Card';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
};
