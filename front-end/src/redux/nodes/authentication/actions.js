import { callApi, METHOD_POST } from '../../api';

const API_URL = '/api/users';
export const REGISTER_REQUEST = 'authentication/REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'authentication/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'authentication/REGISTER_ERROR';

const setIsLoading = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
});

const errorOccurred = err => ({
  type: REGISTER_ERROR,
  payload: {
    msg: err.response.statusText,
    status: err.response.status,
  },
});

export const registerUser = values => async dispatch => {
  dispatch(setIsLoading());
  try {
    const res = await callApi(METHOD_POST, `${API_URL}/register`, values);
    dispatch(registerSuccess(res.token));
  } catch (err) {
    dispatch(errorOccurred(err));
  }
};
