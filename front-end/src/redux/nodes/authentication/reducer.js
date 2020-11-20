import {
  initialState,
  isLoading,
  registerSuccess,
  errorOccurred,
} from './state';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from './actions';

export const authentication = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_REQUEST:
      return isLoading(state);
    case REGISTER_SUCCESS:
      return registerSuccess(state, payload);
    case REGISTER_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
