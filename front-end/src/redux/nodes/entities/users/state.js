export const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export const loading = state => ({
  ...state,
  isLoading: true,
});

export const loadUserSuccess = (state, payload) => ({
  ...state,
  data: { ...state.data, [payload._id]: payload },
  isLoading: false,
  error: null,
});

export const loadUsersSuccess = (state, payload) => ({
  ...state,
  data: { ...state.data, ...payload },
  isLoading: false,
  error: null,
});

export const error = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
