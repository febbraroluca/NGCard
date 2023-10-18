import { Action, createReducer, on } from '@ngrx/store';
import { IPostState } from './post.model';
import * as fromPosts from './index';
import { IPost } from './interfaces/post.interface';

export const initialPostsState: IPostState = {
  posts: [],
  pages: [],
  isLoading: false,
  postsPerPage: 0,
};

const reducer = createReducer<IPostState>(
  initialPostsState,

  on(
    fromPosts.getPosts,
    fromPosts.createPost,
    fromPosts.updatePost,
    fromPosts.deletePost,
    (state) => ({ ...state, isLoading: true })
  ),

  on(fromPosts.getPostSuccess, (state, { posts, postsPerPage }) => ({
    ...state,
    posts,
    pages: createPagesArray(posts, postsPerPage),
    isLoading: false,
  })),

  on(fromPosts.createPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
    isLoading: false,
  })),

  on(fromPosts.updatePostSuccess, (state, { post }) => ({
    ...state,
    posts: state.posts.map((p) => (p.id === post.id ? post : p)),
    isLoading: false,
  })),

  on(fromPosts.deletePostSuccess, (state, { post }) => ({
    ...state,
    isLoading: false,
    posts: state.posts.filter((p) => p.id !== post.id),
  }))
);

function createPagesArray(posts: IPost[], postsPerPage: number): number[] {
  return Array.from(
    { length: Math.ceil(posts.length / postsPerPage) },
    (_, index) => index + 1
  );
}

export function postsReducer(
  state = initialPostsState,
  action: Action
): IPostState {
  return reducer(state, action);
}
