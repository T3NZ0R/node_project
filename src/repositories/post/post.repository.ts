import { EntityRepository, getManager, Repository } from 'typeorm';
import { IPost, PostEntity } from '../../entity/post.entity';
import { IPostRepositoryInterface } from './postRepository.interface';

@EntityRepository(PostEntity)

class PostRepository extends Repository<PostEntity> implements IPostRepositoryInterface {
    public async getPost(userId: number): Promise<IPost[]> {
        return getManager().getRepository(PostEntity).find({ userId: Number(userId) });
    }

    public async updatePost(post: IPost, userId: number): Promise<any> {
        const { text } = post;
        return getManager()
            .getRepository(PostEntity)
            .update({ id: Number(userId) }, {
                text,
            });
    }
}

export const postRepository = new PostRepository();
