import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../redux/nodes/entities/posts/actions';
import { getPosts } from '../redux/nodes/entities/posts/selectors';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { LoadingIndicator } from '../components/LoadingIndicator';

export const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(getPosts);

  useEffect(() => {
    dispatch(loadPosts(1, 10));
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {!isLoading && data.map(post => <Card key={post._id} post={post} />)}
        {isLoading && <LoadingIndicator />}
      </Container>
    </>
  );
};
