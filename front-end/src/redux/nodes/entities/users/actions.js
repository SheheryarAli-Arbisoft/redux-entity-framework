import { callApi, METHOD_GET, METHOD_POST } from '../../../api';

const API_URL = '/api/users';
export const LOAD_USER_REQUEST = 'users/LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'users/LOAD_USER_SUCCESS';
export const LOAD_USERS_REQUEST = 'users/LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'users/LOAD_USERS_SUCCESS';
export const ERROR = 'users/ERROR';

const setIsLoading = type => ({
  type,
});

const loadUserSuccess = user => ({
  type: LOAD_USER_SUCCESS,
  payload: user,
});

const loadUsersSuccess = data => ({
  type: LOAD_USERS_SUCCESS,
  payload: data,
});

const error = err => ({
  type: ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadUser = () => async dispatch => {
  dispatch(setIsLoading(LOAD_USER_REQUEST));

  try {
    const user = await callApi(METHOD_GET, `${API_URL}/current`);
    dispatch(loadUserSuccess(user));
    return user._id;
  } catch (err) {
    dispatch(error(err));
    throw err;
  }
};

export const loadUsers = (userIds = []) => async dispatch => {
  dispatch(setIsLoading(LOAD_USERS_REQUEST));

  try {
    const users = await callApi(METHOD_POST, API_URL, { userIds });
    dispatch(loadUsersSuccess(users));
  } catch (err) {
    dispatch(error(err));
  }
};
