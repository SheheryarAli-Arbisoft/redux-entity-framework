import { createSelector } from 'reselect';

export const getUsers = createSelector(
  state => state.entities.users,
  users => ({
    isLoading: users.isLoading,
    data: users.data,
  })
);
