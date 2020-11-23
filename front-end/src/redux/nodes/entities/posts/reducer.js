import {
  initialState,
  loadRequest,
  loadSuccess,
  postLikedStatusChanged,
  errorOccurred,
} from './state';
import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  POST_LIKED_STATUS_CHANGED,
  POSTS_ERROR,
} from './actions';

export const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
      return loadRequest(state);
    case LOAD_SUCCESS:
      return loadSuccess(state, payload);
    case POST_LIKED_STATUS_CHANGED:
      return postLikedStatusChanged(state, payload);
    case POSTS_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
