import { Action, createReducer, on } from '@ngrx/store';

import { IPostState } from './post.model';
import * as fromPosts from './index';

export const initialPostsState: IPostState = {
  posts: [],
  isLoading: false,
};

const reducer = createReducer<IPostState>(
  initialPostsState,
  on(fromPosts.getPosts, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromPosts.getPostSuccess, (state, { posts }) => {
    return {
      ...state,
      isLoading: false,
      posts,
    };
  }),
  on(fromPosts.createPost, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromPosts.createPostSuccess, (state, { post }) => {
    return {
      ...state,
      posts: [...state.posts, post],
      isLoading: false,
    };
  }),
  on(fromPosts.updatePost, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromPosts.updatePostSuccess, (state, { post }) => {
    return {
      ...state,
      posts: state.posts.map((b) => (b.id === post.id ? post : b)),
      isLoading: false,
    };
  }),
  on(fromPosts.deletePost, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromPosts.deletePostSuccess, (state, { post }) => {
    return {
      ...state,
      isLoading: false,
      posts: state.posts.filter((b) => b.id !== post.id),
    };
  })
);

export function postsReducer(state = initialPostsState, actions: Action): IPostState {
  return reducer(state, actions);
}
