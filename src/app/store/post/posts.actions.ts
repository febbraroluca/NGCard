import { createAction, props } from '@ngrx/store';
import { IPost } from '../../interfaces/post.interface';

const prefix = '[Posts]';

export const getPosts = createAction(
  `${prefix} Get Posts`,
  props<{ posts: IPost[] }>()
);

export const getPostSuccess = createAction(
  `${getPosts.type} Success`,
  props<{
    posts: IPost[];
    postsPerPage: number;
  }>()
);

export const createPost = createAction(
  `${prefix} Create Post`,
  props<{
    post: Partial<IPost>;
  }>()
);

export const createPostSuccess = createAction(
  `${createPost.type} Success`,
  props<{
    post: IPost;
  }>()
);

export const updatePost = createAction(
  `${prefix} Update Post`,
  props<{
    post: IPost;
  }>()
);

export const updatePostSuccess = createAction(
  `${updatePost.type} Success`,
  props<{
    post: IPost;
  }>()
);

export const deletePost = createAction(
  `${prefix} Delete Post`,
  props<{
    post: IPost;
  }>()
);
export const deletePostSuccess = createAction(
  `${deletePost.type} Success`,
  props<{
    post: IPost;
  }>()
);
