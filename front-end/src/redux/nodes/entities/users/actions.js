import { callApi, METHOD_GET, METHOD_POST } from '../../../api';

const API_URL = '/api/users';
export const GET_USER_REQUEST = 'users/GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'users/GET_USER_SUCCESS';
export const GET_USERS_REQUEST = 'users/GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
export const USERS_ERROR = 'users/USERS_ERROR';

const setIsLoading = type => ({
  type,
});

const userLoaded = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

const usersLoaded = data => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

const errorOccurred = err => ({
  type: USERS_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadUser = () => async dispatch => {
  dispatch(setIsLoading(GET_USER_REQUEST));

  try {
    const user = await callApi(METHOD_GET, `${API_URL}/current`);
    dispatch(userLoaded(user));
  } catch (err) {
    dispatch(errorOccurred(err));
    throw err;
  }
};

export const loadUsers = (usersList = []) => async dispatch => {
  dispatch(setIsLoading(GET_USERS_REQUEST));

  const body = {
    users: usersList,
  };

  try {
    const users = await callApi(METHOD_POST, API_URL, body);
    dispatch(usersLoaded(users));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};
