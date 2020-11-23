export const initialState = {
  postIds: [],
  isLoading: true,
  error: null,
  pagination: {
    page: 1,
    pageSize: 10,
    finished: false,
  },
};

export const loadRequest = state => ({
  ...state,
  isLoading: true,
});

export const loadSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  error: null,
  postIds: [...state.postIds, ...payload],
});

export const error = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
