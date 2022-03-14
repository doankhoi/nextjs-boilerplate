import { Post } from '@/models';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { postsApi } from '@/app/services';

const postsAdapter = createEntityAdapter<Post>({
  selectId: post => post.id,
});

const slice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, { payload }) => {
        if (!payload) {
          return;
        }
        postsAdapter.setAll(state, payload);
      },
    );
  },
});

export default slice.reducer;

const globalizedSelectors = postsAdapter.getSelectors<RootState>(
  state => state.posts,
);

// This selector already knows how to find the books entity state
export const getAllPosts = (state: RootState) =>
  globalizedSelectors.selectAll(state);

export const getPostById = (state: RootState, postId: string | undefined) => {
  if (!postId) {
    return null;
  }
  return globalizedSelectors.selectById(state, postId);
};
