import { createSelector } from 'reselect';

export const getComments = createSelector(
  state => state.entities.comments,
  comments => ({
    isLoading: comments.isLoading,
    data: comments.data,
  })
);
