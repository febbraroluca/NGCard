import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IPostState } from './post.model';

export const selectPostState = createFeatureSelector<IPostState>('post');
export const selectPostsList = createSelector(selectPostState, (state) => state.posts);
export const selectPostIsLoading = createSelector(selectPostState, (state) => state.isLoading);