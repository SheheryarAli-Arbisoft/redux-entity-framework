export const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

export const isLoading = state => ({
  ...state,
  isLoading: true,
});

export const loadUser = (state, payload) => ({
  ...state,
  data: [...state.data, payload],
  isLoading: false,
  error: null,
});

export const loadUsers = (state, payload) => ({
  ...state,
  data: [...state.data, ...payload],
  isLoading: false,
  error: null,
});

export const errorOccurred = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
