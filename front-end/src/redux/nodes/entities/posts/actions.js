import axios from 'axios';
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

export const loadPosts = () => async dispatch => {
  dispatch(setIsLoading());
  try {
    const { data: posts } = await axios.get('/api/posts');

    const usersList = [];
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
