import { initialState, isLoading, loadPosts, errorOccurred } from './state';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from './actions';

export const posts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS_REQUEST:
      return isLoading(state);
    case GET_POSTS_SUCCESS:
      return loadPosts(state, payload);
    case GET_POSTS_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
