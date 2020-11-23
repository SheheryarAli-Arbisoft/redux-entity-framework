export const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export const loading = state => ({
  ...state,
  isLoading: true,
});

export const loadSuccess = (state, payload) => ({
  ...state,
  data: { ...state.data, ...payload },
  isLoading: false,
  error: null,
});

export const createSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  error: null,
  data: { ...state.data, [payload._id]: payload },
});

export const error = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
