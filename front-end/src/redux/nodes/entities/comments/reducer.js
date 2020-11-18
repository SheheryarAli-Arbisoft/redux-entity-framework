import { initialState, isLoading, loadComments, errorOccurred } from './state';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from './actions';

export const comments = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COMMENTS_REQUEST:
      return isLoading(state);
    case GET_COMMENTS_SUCCESS:
      return loadComments(state, payload);
    case GET_COMMENTS_ERROR:
      return errorOccurred(state, payload);
    default:
      return state;
  }
};
