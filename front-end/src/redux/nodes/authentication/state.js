export const initialState = {
  isAuthenticated: false,
  isLoading: true,
  error: null,
  userId: null,
};

export const isLoading = state => ({
  ...state,
  isLoading: true,
});

export const authenticationSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  error: null,
  isAuthenticated: true,
  userId: payload,
});

export const logout = state => ({
  ...state,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  userId: null,
});

export const errorOccurred = (state, payload) => ({
  ...state,
  isLoading: false,
  isAuthenticated: false,
  error: payload,
  userId: null,
});
