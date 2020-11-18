import { createSelector } from 'reselect';

export const getComments = createSelector(
  state => state.entities.comments,
  comments => ({
    comments: comments.data,
  })
);
