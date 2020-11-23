import {
  initialState,
  isLoading,
  loadUser,
  loadUsers,
  errorOccurred,
} from './state';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  USERS_ERROR,
} from './actions';

export const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_REQUEST:
    case GET_USER_REQUEST:
      return isLoading(state);
    case GET_USER_SUCCESS:
      return loadUser(state, payload);
    case GET_USERS_SUCCESS:
      return loadUsers(state, payload);
    case USERS_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
