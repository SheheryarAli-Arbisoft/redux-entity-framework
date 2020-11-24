import { createSelector } from 'reselect';

export const getPostFeed = createSelector(
  state => state.features.postFeed,
  postFeed => ({
    isLoading: postFeed.isLoading,
    postIds: postFeed.postIds,
    pagination: postFeed.pagination,
  })
);
