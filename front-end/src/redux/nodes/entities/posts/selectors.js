import { createSelector } from 'reselect';

export const getPosts = createSelector(
  state => state.entities.posts,
  posts => ({
    isLoading: posts.isLoading,
    data: posts.data,
  })
);
