import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadInitialPosts,
  loadMorePosts,
} from '../redux/nodes/features/postFeed/actions';
import { getPostFeed } from '../redux/nodes/features/postFeed/selectors';
import { getPosts } from '../redux/nodes/entities/posts/selectors';
import { Navbar } from '../components/Navbar';
import { MainContainer } from '../components/Container';
import { CreatePostForm } from '../components/Forms';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingIndicator } from '../components/LoadingIndicator';

export const Home = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    postIds,
    pagination: { isPaginationLoading, hasMoreRecords },
  } = useSelector(getPostFeed);
  const { posts } = useSelector(getPosts);

  useEffect(() => {
    dispatch(loadInitialPosts());
  }, []);

  return (
    <>
      <Navbar />
      <MainContainer>
        <CreatePostForm />

        {_.map(postIds, postId => (
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
      </MainContainer>
    </>
  );
};
