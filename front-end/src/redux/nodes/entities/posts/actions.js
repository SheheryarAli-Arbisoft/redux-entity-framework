import axios from 'axios';
import queryString from 'query-string';

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
    dispatch(postsLoaded(posts));

    const usersList = [];
    posts.forEach(post => {
      if (!usersList.includes(post.user)) {
        usersList.push(post.user);
      }
    });

    const url = `/api/users?list=${encodeURIComponent(
      queryString.stringify({
        users: usersList,
      })
    )}`;

    const { data: users } = await axios.get(url);

    console.log('Users:', users);
  } catch (err) {
    dispatch(errorOccurred());
  }
};
