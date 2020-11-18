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

export const replyAdded = (state, { commentId, replyId }) => ({
  ...state,
  data: {
    ...state.data,
    [commentId]: {
      ...state.data[commentId],
      replies: [...state.data[commentId].replies, replyId],
    },
  },
});

export const error = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
