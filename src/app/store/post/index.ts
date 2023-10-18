export * from './posts.actions';
export * from './post.selectors';
export * from './post.effects';
export * from './post.reducers';
export * from './post.model';

export function getPostsFailure(arg0: { error: any; }): any {
  throw new Error('Function not implemented.');
}

