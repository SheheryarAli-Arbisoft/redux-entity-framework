import { callApi, METHOD_GET } from '../../../api';

const API_URL = '/api/posts';
export const LOAD_REQUEST = 'postFeed/LOAD_REQUEST';
export const LOAD_SUCCESS = 'postFeed/LOAD_SUCCESS';
export const ERROR = 'postFeed/ERROR';

const loadRequest = () => ({
  type: LOAD_REQUEST,
});

const loadSuccess = postIds => ({
  type: LOAD_SUCCESS,
  payload: postIds,
});

const errorOccurred = err => ({
  type: ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadPosts = (page, pageSize) => async dispatch => {
  dispatch(loadRequest());

  try {
    const posts = await callApi(
      METHOD_GET,
      API_URL,
      {},
      { page, limit: pageSize }
    );

    const postIds = Object.keys(posts);
    dispatch(loadSuccess(postIds));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};
