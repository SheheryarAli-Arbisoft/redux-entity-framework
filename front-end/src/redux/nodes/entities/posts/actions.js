import axios from 'axios';
import { loadComments } from '../comments/actions';
import { getComments } from '../comments/selectors';
import { loadUsers } from '../users/actions';

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

export const loadPosts = () => async (dispatch, getState) => {
  dispatch(setIsLoading());
  try {
    const { data: posts } = await axios.get('/api/posts');

    const commentsList = [];
    posts.forEach(post => {
      post.comments.forEach(comment => {
        if (!commentsList.includes(comment.comment)) {
          commentsList.push(comment.comment);
        }
      });
    });

    await dispatch(loadComments(commentsList));

    const { data: comments } = getComments(getState());

    // Generating the lists of users to fetch
    const usersList = [];
    comments.forEach(comment => {
      if (!usersList.includes(comment.user)) {
        usersList.push(comment.user);
      }
    });
    posts.forEach(post => {
      if (!usersList.includes(post.user)) {
        usersList.push(post.user);
      }
    });

    await dispatch(loadUsers(usersList));
    dispatch(postsLoaded(posts));
  } catch (err) {
    dispatch(errorOccurred());
  }
};
