import {
  initialState,
  loading,
  loadUserSuccess,
  loadUsersSuccess,
  error,
} from './state';
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  ERROR,
} from './actions';

export const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER_REQUEST:
    case LOAD_USERS_REQUEST:
      return loading(state);
    case LOAD_USER_SUCCESS:
      return loadUserSuccess(state, payload);
    case LOAD_USERS_SUCCESS:
      return loadUsersSuccess(state, payload);
    case ERROR:
      return error(state, payload);
    default:
      return state;
  }
};
