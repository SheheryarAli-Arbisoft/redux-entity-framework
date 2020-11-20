export const initialState = {
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const isLoading = state => ({
  ...state,
  isLoading: true,
});

export const authenticationSuccess = (state, payload) => {
  localStorage.setItem('auth-token', payload);
  return {
    ...state,
    isLoading: false,
    error: null,
    isAuthenticated: true,
  };
};

export const logout = state => ({
  ...state,
  isLoading: false,
  error: null,
  isAuthenticated: false,
});

export const errorOccurred = (state, payload) => {
  localStorage.removeItem('auth-token');
  return {
    ...state,
    isLoading: false,
    isAuthenticated: false,
    error: payload,
  };
};
