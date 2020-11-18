import { createSelector } from 'reselect';

export const getPosts = createSelector(
  state => state.entities.posts,
  posts => ({
    posts: posts.data,
  })
);
