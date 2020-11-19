import { callApi, METHOD_GET } from '../../../api';
import { loadComments } from '../comments/actions';
import { getComments } from '../comments/selectors';
import { loadUsers } from '../users/actions';

const API_URL = '/api/posts';
export const GET_POSTS_REQUEST = 'posts/GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';

const setIsLoading = () => ({
  type: GET_POSTS_REQUEST,
});

const postsLoaded = data => ({
  type: GET_POSTS_SUCCESS,
  payload: data,
});

const errorOccurred = err => ({
  type: GET_POSTS_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

const getCommentList = posts => {
  const result = [];
  posts.forEach(post => {
    post.comments.forEach(comment => {
      if (!result.includes(comment.comment)) {
        result.push(comment.comment);
      }
    });
  });
  return result;
};

const getUsersList = (posts, comments) => {
  const result = [];
  posts.forEach(post => {
    if (!result.includes(post.user)) {
      result.push(post.user);
    }
  });
  comments.forEach(comment => {
    if (!result.includes(comment.user)) {
      result.push(comment.user);
    }
  });
  return result;
};

export const loadPosts = () => async (dispatch, getState) => {
  dispatch(setIsLoading());

  try {
    const posts = await callApi(METHOD_GET, API_URL);

    const commentsList = getCommentList(posts);
    await dispatch(loadComments(commentsList));
    const { data: comments } = getComments(getState());

    const usersList = getUsersList(posts, comments);
    await dispatch(loadUsers(usersList));

    dispatch(postsLoaded(posts));
  } catch (err) {
    dispatch(errorOccurred());
  }
};
