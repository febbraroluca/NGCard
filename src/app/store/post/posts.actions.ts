import { createAction, props } from '@ngrx/store';
import { IPost } from '../../interfaces/post.interface';

const prefix = '[Posts]';

export const getPosts = createAction(
  `${prefix} Get Posts`,
);

export const getPostSuccess = createAction(
  `${getPosts.type} Success`,
  props<{ posts: IPost[] }>()
);

export const deletePost = createAction(
  `${prefix} Delete Post`,
  props<{
    postId: string;
  }>()
);

export const searchPosts = createAction(
  `${prefix}  Search Posts`,
  props<{ query: string }>()
);

export const searchPostsSuccess = createAction(
  `${prefix} Search Posts Success`,
  props<{ searchResults: IPost[] }>()
);

export const updatePostList = createAction(
  `${prefix} Update Post List`
);

