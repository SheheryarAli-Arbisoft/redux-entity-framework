import axios from 'axios';
import queryString from 'query-string';

export const GET_USERS_REQUEST = 'users/GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'users/GET_USERS_ERROR';

const setIsLoading = () => ({
  type: GET_USERS_REQUEST,
});

const usersLoaded = data => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

const errorOccurred = err => ({
  type: GET_USERS_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const loadUsers = usersList => async dispatch => {
  dispatch(setIsLoading());
  try {
    const url = `/api/users?list=${encodeURIComponent(
      queryString.stringify({
        users: usersList,
      })
    )}`;

    const { data: users } = await axios.get(url);
    dispatch(usersLoaded(users));
  } catch (err) {
    dispatch(errorOccurred());
  }
};
