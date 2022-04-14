import { IPost } from '../../entity/post.entity';

export interface IPostRepositoryInterface{
    getPost(userId: number): Promise<IPost[]>;
    updatePost(post: IPost, userId: number): Promise<any>;
}
