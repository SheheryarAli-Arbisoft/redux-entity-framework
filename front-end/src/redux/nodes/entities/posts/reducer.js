import {
  initialState,
  isLoading,
  loadPosts,
  postLikedStatusChanged,
  errorOccurred,
} from './state';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  POST_LIKED_STATUS_CHANGED,
  POSTS_ERROR,
} from './actions';

export const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_REQUEST:
      return isLoading(state);
    case GET_POSTS_SUCCESS:
      return loadPosts(state, payload);
    case POST_LIKED_STATUS_CHANGED:
      return postLikedStatusChanged(state, payload);
    case POSTS_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
