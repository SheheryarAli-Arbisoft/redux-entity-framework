import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../redux/nodes/entities/posts/actions';
import { getPosts } from '../redux/nodes/entities/posts/selectors';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingIndicator } from '../components/LoadingIndicator';

export const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { isLoading, data } = useSelector(getPosts);

  useEffect(() => {
    dispatch(loadPosts(page, limit));
  }, [page]);

  return (
    <>
      <Navbar />
      <Container>
        {data.map(post => (
          <Card key={post._id} post={post} />
        ))}
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <Button
            variant='outlined'
            size='large'
            onClick={() => setPage(value => value + 1)}
            fullWidth
          >
            Load more
          </Button>
        )}
      </Container>
    </>
  );
};
