import { initialState, loadRequest, loadSuccess, error } from './state';
import { LOAD_REQUEST, LOAD_SUCCESS, ERROR } from './actions';

export const comments = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
      return loadRequest(state);
    case LOAD_SUCCESS:
      return loadSuccess(state, payload);
    case ERROR:
      return error(state, payload);
    default:
      return state;
  }
};
