import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostFeed } from '../redux/nodes/features/postFeed/actions';
import { getPostFeed } from '../redux/nodes/features/postFeed/selectors';
import { getPosts } from '../redux/nodes/entities/posts/selectors';
import { Navbar } from '../components/Navbar';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingIndicator } from '../components/LoadingIndicator';

export const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [page] = useState(1);
  const [limit] = useState(10);
  const { isLoading, postIds } = useSelector(getPostFeed);
  const { posts } = useSelector(getPosts);

  useEffect(() => {
    dispatch(loadPostFeed(page, limit));
  }, [page]);

  return (
    <>
      <Navbar />
      <Container>
        <Button
          style={{ marginBottom: '20px' }}
          onClick={() => history.push('/create-post')}
        >
          Create post
        </Button>

        {postIds.map(postId => (
          <Card key={postId} post={posts[postId]} />
        ))}

        {isLoading && <LoadingIndicator />}
        {/* {isLoading ? (
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
        )} */}
      </Container>
    </>
  );
};
