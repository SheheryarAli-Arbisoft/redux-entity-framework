import { createSelector } from 'reselect';

export const getData = createSelector(
  state => state.authentication,
  authentication => ({
    isLoading: authentication.isLoading,
    isAuthenticated: authentication.isAuthenticated,
  })
);
