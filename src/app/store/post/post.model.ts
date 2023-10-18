import { IPost } from '../../interfaces/post.interface';

export interface IPostState {
  posts: IPost[];
  pages: number[];
  isLoading: boolean;
  postsPerPage: number;
}
