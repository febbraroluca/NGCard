import { IPost } from '../../interfaces/post.interface';

export interface IPostState {
    posts: IPost[];
    isLoading: boolean;
}