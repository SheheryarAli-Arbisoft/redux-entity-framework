import React, { useEffect } from 'react';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
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
import { LoadingIndicator } from '../components/LoadingIndicator';

export const Home = () => {
  const dispatch = useDispatch();
  const {
    postIds,
    pagination: { hasMoreRecords },
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

        <InfiniteScroll
          dataLength={postIds.length}
          loader={<LoadingIndicator />}
          hasMore={hasMoreRecords}
          next={() => dispatch(loadMorePosts())}
        >
          {_.map(postIds, postId => (
            <Card key={postId} post={posts[postId]} />
          ))}
        </InfiniteScroll>
      </MainContainer>
    </>
  );
};
