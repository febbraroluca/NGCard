import { createReducer, on } from '@ngrx/store';
import * as fromPosts from './index';
import { IPost } from './interfaces/post.interface';

export interface PostListState {
  posts: IPost[];
  currentPage: number;
  searchQuery: string;
}

export const initialState: PostListState = {
  posts: [],
  currentPage: 1,
  searchQuery: '',
};

export const postListReducer = createReducer<PostListState>(
  initialState,

  on(fromPosts.getPosts, (state) => state),
  on(fromPosts.getPosts, (state) => {
    console.log('Reducer: getPosts action is dispatched');
    return state;
  }),

  on(fromPosts.getPostSuccess, (state, { posts }) => {
    console.log(
      'Reducer: getPostSuccess action is dispatched with posts:',
      posts
    );
    return { ...state, posts };
  }),

  on(fromPosts.deletePost, (state, { postId }) => ({
    ...state,
    posts: state.posts.filter((post) => post.id !== postId),
  })),

  on(fromPosts.updatePostList, (state) => state),

  on(fromPosts.searchPosts, (state, { query }) => ({
    ...state,
    searchQuery: query,
  })),
  on(fromPosts.searchPostsSuccess, (state, { searchResults }) => ({
    ...state,
    searchResults,
  }))
);
