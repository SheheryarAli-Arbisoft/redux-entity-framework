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

export const postLikedStatusChanged = (state, post) => ({
  ...state,
  data: [
    ...state.data.map(item => {
      if (item._id === post._id) {
        item.likes = post.likes;
      }
      return item;
    }),
  ],
});

export const errorOccurred = (state, payload) => ({
  ...state,
  isLoading: false,
  error: payload,
});
