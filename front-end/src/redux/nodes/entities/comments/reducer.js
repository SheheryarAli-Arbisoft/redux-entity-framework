import {
  initialState,
  loading,
  loadSuccess,
  createSuccess,
  error,
} from './state';
import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  ERROR,
} from './actions';

export const comments = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
    case CREATE_REQUEST:
      return loading(state);
    case LOAD_SUCCESS:
      return loadSuccess(state, payload);
    case CREATE_SUCCESS:
      return createSuccess(state, payload);
    case ERROR:
      return error(state, payload);
    default:
      return state;
  }
};
