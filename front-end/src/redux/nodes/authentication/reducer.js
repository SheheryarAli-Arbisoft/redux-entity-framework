import {
  initialState,
  isLoading,
  authenticationSuccess,
  logout,
  errorOccurred,
} from './state';
import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_LOGOUT,
  AUTHENTICATION_ERROR,
} from './actions';

export const authentication = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATION_REQUEST:
      return isLoading(state);
    case AUTHENTICATION_SUCCESS:
      return authenticationSuccess(state, payload);
    case AUTHENTICATION_LOGOUT:
      return logout(state);
    case AUTHENTICATION_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
