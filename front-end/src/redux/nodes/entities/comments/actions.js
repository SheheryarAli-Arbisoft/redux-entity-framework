import axios from 'axios';

export const GET_COMMENTS_REQUEST = 'comments/GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'comments/GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_ERROR = 'comments/GET_COMMENTS_ERROR';

const setIsLoading = () => ({
  type: GET_COMMENTS_REQUEST,
});

const commentsLoaded = data => ({
  type: GET_COMMENTS_SUCCESS,
  payload: data,
});

const errorOccurred = err => ({
  type: GET_COMMENTS_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadComments = (commentsList = []) => async dispatch => {
  dispatch(setIsLoading());

  const body = JSON.stringify({ comments: commentsList });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data: comments } = await axios.post('/api/comments', body, config);
    dispatch(commentsLoaded(comments));
  } catch (err) {
    dispatch(errorOccurred());
  }
};
