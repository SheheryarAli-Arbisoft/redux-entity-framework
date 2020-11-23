import { loadPosts } from '../../entities/posts/actions';

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

export const loadPostFeed = (page, pageSize) => async dispatch => {
  dispatch(loadRequest());

  try {
    const postIds = await dispatch(loadPosts(page, pageSize));
    dispatch(loadSuccess(postIds));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};
