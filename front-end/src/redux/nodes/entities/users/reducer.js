import { initialState, isLoading, loadUsers, errorOccurred } from './state';
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from './actions';

export const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_REQUEST:
      return isLoading(state);
    case GET_USERS_SUCCESS:
      return loadUsers(state, payload);
    case GET_USERS_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
