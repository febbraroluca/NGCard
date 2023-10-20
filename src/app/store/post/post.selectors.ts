import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostListState } from './post.model';

export const selectPostListState = createFeatureSelector<PostListState>('post');

export const selectPosts = createSelector(
  selectPostListState,
  (state) => state.posts
);

export const selectFilteredPosts = createSelector(
  selectPosts,
  selectPostListState,
  (posts, state) => {
    if (
      !state.searchQuery ||
      state.searchQuery.trim() === '' ||
      state.searchQuery.length < 3
    ) {
      return posts;
    }
    const query = state.searchQuery.toLowerCase();
    return posts.filter((post) => post.title.toLowerCase().includes(query));
  }
);

export const selectCurrentPage = createSelector(
  selectPostListState,
  (state) => state.currentPage
);

export const selectSearchQuery = createSelector(
  selectPostListState,
  (state) => state.searchQuery
);
