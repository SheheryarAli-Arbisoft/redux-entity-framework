import { getPostFeed } from './selectors';
import { loadPosts, createPost } from '../../entities/posts/actions';

export const LOAD_REQUEST = 'postFeed/LOAD_REQUEST';
export const LOAD_SUCCESS = 'postFeed/LOAD_SUCCESS';
export const LOAD_MORE_REQUEST = 'postFeed/LOAD_MORE_REQUEST';
export const LOAD_MORE_SUCCESS = 'postFeed/LOAD_MORE_SUCCESS';
export const CREATE_REQUEST = 'postFeed/CREATE_REQUEST';
export const CREATE_SUCCESS = 'postFeed/CREATE_SUCCESS';
export const ERROR = 'postFeed/ERROR';

const loadRequest = () => ({
  type: LOAD_REQUEST,
});

const loadSuccess = (postIds, pagination) => ({
  type: LOAD_SUCCESS,
  payload: { postIds, pagination },
});

const loadMoreRequest = () => ({
  type: LOAD_MORE_REQUEST,
});

const loadMoreSuccess = (postIds, pagination) => ({
  type: LOAD_MORE_SUCCESS,
  payload: { postIds, pagination },
});

const createRequest = () => ({
  type: CREATE_REQUEST,
});

const createSuccess = postId => ({
  type: CREATE_SUCCESS,
  payload: postId,
});

const error = err => ({
  type: ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadInitialPosts = () => async dispatch => {
  dispatch(loadRequest());

  try {
    const { postIds, pagination } = await dispatch(loadPosts());
    dispatch(loadSuccess(postIds, pagination));
  } catch (err) {
    dispatch(error(err));
  }
};

export const loadMorePosts = () => async (dispatch, getState) => {
  dispatch(loadMoreRequest());
  const { pagination } = getPostFeed(getState());
  const params = {
    currentPage: pagination.currentPage + 1,
    pageSize: pagination.pageSize,
    totalRecords: pagination.totalRecords,
  };

  try {
    const { postIds, pagination } = await dispatch(loadPosts(params));
    dispatch(loadMoreSuccess(postIds, pagination));
  } catch (err) {
    dispatch(error(err));
  }
};

export const createNewPost = values => async dispatch => {
  dispatch(createRequest());

  try {
    const postId = await dispatch(createPost(values));
    dispatch(createSuccess(postId));
  } catch (err) {
    dispatch(error(err));
  }
};
