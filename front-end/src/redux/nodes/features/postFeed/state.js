export const initialState = {
  postIds: [],
  isLoading: true,
  error: null,
  pagination: {
    isPaginationLoading: true,
    hasMoreRecords: true,
  },
};

export const loading = state => ({
  ...state,
  isLoading: true,
  pagination: { ...state.pagination, isPaginationLoading: true },
});

export const loadSuccess = (state, { postIds, pagination }) => ({
  ...state,
  isLoading: false,
  error: null,
  postIds,
  pagination: {
    ...state.pagination,
    isPaginationLoading: false,
    ...pagination,
  },
});

export const loadMoreSuccess = (state, { postIds, pagination }) => ({
  ...state,
  isLoading: false,
  error: null,
  postIds: [...state.postIds, ...postIds],
  pagination: {
    ...state.pagination,
    isPaginationLoading: false,
    ...pagination,
  },
});

export const createSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  error: null,
  postIds: [payload, ...state.postIds],
});

export const error = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
