import { IPost } from '../entity/post.entity';
import { postRepository } from '../repositories/post/post.repository';

class PostService {
    public async getPost(userId:number):Promise<IPost[]> {
        const getPost = await postRepository.getPost(userId);
        return getPost;
    }

    public async updatePost(post:IPost, userId:number) {
        const updatePost = await postRepository.updatePost(post, userId);
        return updatePost;
    }
}

export const postService = new PostService();
