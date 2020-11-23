import { callApi, METHOD_POST } from '../../../api';
import { commentAdded } from '../posts/actions';

const API_URL = '/api/comments';
export const LOAD_REQUEST = 'comments/LOAD_REQUEST';
export const LOAD_SUCCESS = 'comments/LOAD_SUCCESS';
export const CREATE_REQUEST = 'comments/CREATE_REQUEST';
export const CREATE_SUCCESS = 'comments/CREATE_SUCCESS';
export const ERROR = 'comments/ERROR';

const loadRequest = () => ({
  type: LOAD_REQUEST,
});

const loadSuccess = data => ({
  type: LOAD_SUCCESS,
  payload: data,
});

const createRequest = () => ({
  type: CREATE_REQUEST,
});

const createSuccess = data => ({
  type: CREATE_SUCCESS,
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
  dispatch(createRequest());

  try {
    const comment = await callApi(
      METHOD_POST,
      `${API_URL}/create/${postId}`,
      values
    );

    dispatch(createSuccess(comment));
    dispatch(commentAdded(postId, comment._id));
  } catch (err) {
    dispatch(error(err));
  }
};
