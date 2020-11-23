import { callApi, METHOD_POST } from '../../../api';

const API_URL = '/api/comments';
export const GET_COMMENTS_REQUEST = 'comments/GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'comments/GET_COMMENTS_SUCCESS';
export const COMMENTS_ERROR = 'comments/COMMENTS_ERROR';

const setIsLoading = () => ({
  type: GET_COMMENTS_REQUEST,
});

const commentsLoaded = data => ({
  type: GET_COMMENTS_SUCCESS,
  payload: data,
});

const errorOccurred = err => ({
  type: COMMENTS_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadComments = (commentsList = []) => async dispatch => {
  dispatch(setIsLoading());

  const body = {
    comments: commentsList,
  };

  try {
    const comments = await callApi(METHOD_POST, API_URL, body);
    dispatch(commentsLoaded(comments));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};

export const createComment = (postId, values) => async dispatch => {
  try {
    await callApi(METHOD_POST, `${API_URL}/create/${postId}`, values);
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};
