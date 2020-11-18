import {
  initialState,
  loadRequest,
  loadSuccess,
  createSuccess,
  likedStatusChanged,
  commentAdded,
  error,
} from './state';
import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  LIKED_STATUS_CHANGED,
  COMMENT_ADDED,
  ERROR,
} from './actions';

export const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
    case CREATE_REQUEST:
      return loadRequest(state);
    case LOAD_SUCCESS:
      return loadSuccess(state, payload);
    case CREATE_SUCCESS:
      return createSuccess(state, payload);
    case LIKED_STATUS_CHANGED:
      return likedStatusChanged(state, payload);
    case COMMENT_ADDED:
      return commentAdded(state, payload);
    case ERROR:
      return error(state, payload);
    default:
      return state;
  }
};
