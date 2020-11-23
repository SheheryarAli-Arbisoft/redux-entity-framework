import { callApi, METHOD_GET, METHOD_POST, METHOD_PUT } from '../../../api';
// import { loadComments } from '../comments/actions';
// import { getComments } from '../comments/selectors';
// import { loadUsers } from '../users/actions';
// import { getUsers } from '../users/selectors';

const API_URL = '/api/posts';
export const LOAD_REQUEST = 'posts/LOAD_REQUEST';
export const LOAD_SUCCESS = 'posts/LOAD_SUCCESS';
export const LIKED_STATUS_CHANGED = 'posts/LIKED_STATUS_CHANGED';
export const ERROR = 'posts/ERROR';

const loadRequest = () => ({
  type: LOAD_REQUEST,
});

const loadSuccess = posts => ({
  type: LOAD_SUCCESS,
  payload: posts,
});

const likedStatusChanged = post => ({
  type: LIKED_STATUS_CHANGED,
  payload: post,
});

const error = err => ({
  type: ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

// const getCommentList = posts => {
//   const result = [];
//   posts.forEach(post => {
//     post.comments.forEach(comment => {
//       if (!result.includes(comment.comment)) {
//         result.push(comment.comment);
//       }
//     });
//   });
//   return result;
// };

// const getUsersList = (posts, comments, getState) => {
//   const { data: users } = getUsers(getState());
//   const loadedUsers = users.map(user => user._id);

//   const result = [];
//   posts.forEach(post => {
//     if (!result.includes(post.user) && !loadedUsers.includes(post.user)) {
//       result.push(post.user);
//     }
//     post.likes.forEach(like => {
//       if (!result.includes(like.user) && !loadedUsers.includes(like.user)) {
//         result.push(like.user);
//       }
//     });
//   });
//   comments.forEach(comment => {
//     if (!result.includes(comment.user) && !loadedUsers.includes(comment.user)) {
//       result.push(comment.user);
//     }
//   });
//   return result;
// };

export const loadPosts = (page, limit) => async dispatch => {
  dispatch(loadRequest());

  try {
    const posts = await callApi(METHOD_GET, API_URL, {}, { page, limit });

    // const commentsList = getCommentList(posts);
    // await dispatch(loadComments(commentsList));
    // const { data: comments } = getComments(getState());

    // const usersList = getUsersList(posts, comments, getState);
    // await dispatch(loadUsers(usersList));

    dispatch(loadSuccess(posts));
    return Object.keys(posts);
  } catch (err) {
    dispatch(error(err));
  }
};

export const createPost = (values, history) => async dispatch => {
  try {
    await callApi(METHOD_POST, `${API_URL}/create`, values);
    history.goBack();
  } catch (err) {
    dispatch(error(err));
  }
};

export const likePost = postId => async dispatch => {
  try {
    const post = await callApi(METHOD_PUT, `${API_URL}/like/${postId}`);
    dispatch(likedStatusChanged(post));
  } catch (err) {
    dispatch(error(err));
  }
};

export const unlikePost = postId => async dispatch => {
  try {
    const post = await callApi(METHOD_PUT, `${API_URL}/unlike/${postId}`);
    dispatch(likedStatusChanged(post));
  } catch (err) {
    dispatch(error(err));
  }
};
