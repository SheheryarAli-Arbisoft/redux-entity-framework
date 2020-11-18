export const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

export const isLoading = state => ({
  ...state,
  isLoading: true,
});

export const loadComments = (state, payload) => ({
  ...state,
  data: payload,
  isLoading: false,
  error: null,
});

export const errorOccurred = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
