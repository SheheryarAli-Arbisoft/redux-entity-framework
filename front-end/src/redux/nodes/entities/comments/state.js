export const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export const loadRequest = state => ({
  ...state,
  isLoading: true,
});

export const loadSuccess = (state, payload) => ({
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
