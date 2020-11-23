import {
  initialState,
  loadRequest,
  loadSuccess,
  likedStatusChanged,
  error,
} from './state';
import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LIKED_STATUS_CHANGED,
  ERROR,
} from './actions';

export const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
      return loadRequest(state);
    case LOAD_SUCCESS:
      return loadSuccess(state, payload);
    case LIKED_STATUS_CHANGED:
      return likedStatusChanged(state, payload);
    case ERROR:
      return error(state, payload);
    default:
      return state;
  }
};
