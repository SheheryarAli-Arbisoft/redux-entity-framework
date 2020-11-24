import {
  initialState,
  loading,
  loadSuccess,
  loadMoreSuccess,
  error,
} from './state';
import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_MORE_REQUEST,
  LOAD_MORE_SUCCESS,
  ERROR,
} from './actions';

export const postFeed = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
    case LOAD_MORE_REQUEST:
      return loading(state);
    case LOAD_SUCCESS:
      return loadSuccess(state, payload);
    case LOAD_MORE_SUCCESS:
      return loadMoreSuccess(state, payload);
    case ERROR:
      return error(state, payload);
    default:
      return state;
  }
};
