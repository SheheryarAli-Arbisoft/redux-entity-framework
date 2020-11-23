import { createSelector } from 'reselect';

export const getUsers = createSelector(
  state => state.entities.users,
  users => ({
    users: users.data,
  })
);
