import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadPostFeed,
  loadMorePosts,
} from '../redux/nodes/features/postFeed/actions';
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
  const {
    isLoading,
    postIds,
    pagination: { isPaginationLoading, hasMoreRecords },
  } = useSelector(getPostFeed);
  const { posts } = useSelector(getPosts);

  useEffect(() => {
    dispatch(loadPostFeed());
  }, []);

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

        {!isPaginationLoading && hasMoreRecords && (
          <Button
            variant='outlined'
            size='large'
            onClick={() => dispatch(loadMorePosts())}
            fullWidth
          >
            Load more
          </Button>
        )}
      </Container>
    </>
  );
};
