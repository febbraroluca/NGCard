import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import * as fromPosts from './index';
import { PostService } from '../post/services/post.service';
import { IPost } from '../../interfaces/post.interface';
import { PostResponse } from './interfaces/post.interface';

@Injectable()
export class PostsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly postService: PostService
  ) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPosts.getPosts.type),
      switchMap(() => this.postService.getPost()),
      map((posts: IPost[]) => fromPosts.getPostSuccess({ posts }))
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPosts.createPost),
      switchMap(({ post }) => this.postService.insertPost(post)),
      map((response: PostResponse) =>
        fromPosts.createPostSuccess({ post: response })
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPosts.updatePost),
      switchMap(({ post }) =>
        this.postService
          .updatePost(post, post.id)
          .pipe(map(() => fromPosts.updatePostSuccess({ post })))
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPosts.deletePost),
      switchMap(({ post }) =>
        this.postService
          .deletePost(post.id)
          .pipe(map(() => fromPosts.deletePostSuccess({ post })))
      )
    )
  );
}
