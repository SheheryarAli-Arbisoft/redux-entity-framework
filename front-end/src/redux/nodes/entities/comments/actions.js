import { callApi, METHOD_POST } from '../../../api';

const API_URL = '/api/comments';
export const LOAD_REQUEST = 'comments/LOAD_REQUEST';
export const LOAD_SUCCESS = 'comments/LOAD_SUCCESS';
export const ERROR = 'comments/ERROR';

const loadRequest = () => ({
  type: LOAD_REQUEST,
});

const loadSuccess = data => ({
  type: LOAD_SUCCESS,
  payload: data,
});

const error = err => ({
  type: ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadComments = (commentsList = []) => async dispatch => {
  dispatch(loadRequest());

  const body = {
    comments: commentsList,
  };

  try {
    const comments = await callApi(METHOD_POST, API_URL, body);
    dispatch(loadSuccess(comments));
  } catch (err) {
    dispatch(error(err));
  }
};

export const createComment = (postId, values) => async dispatch => {
  try {
    await callApi(METHOD_POST, `${API_URL}/create/${postId}`, values);
  } catch (err) {
    dispatch(error(err));
  }
};
