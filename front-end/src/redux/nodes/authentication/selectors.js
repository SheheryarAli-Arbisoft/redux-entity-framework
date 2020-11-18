import { createSelector } from 'reselect';

export const getAuthData = createSelector(
  state => state.authentication,
  authentication => ({
    isLoading: authentication.isLoading,
    isAuthenticated: authentication.isAuthenticated,
    userId: authentication.userId,
  })
);
