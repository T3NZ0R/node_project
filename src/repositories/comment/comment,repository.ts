import { EntityRepository, getManager, Repository } from 'typeorm';
import { CommentEntity, IComment } from '../../entity/comment.entity';
import { ICommentRepositoryInterface } from './commentRepository.interface';

@EntityRepository(CommentEntity)

class CommentRepository extends Repository<CommentEntity> implements ICommentRepositoryInterface {
    public async getComment(userId:number): Promise<IComment[]> {
        return getManager().getRepository(CommentEntity)
            .createQueryBuilder('comment')
            .where('comment.authorId = :id', { id: userId })
            .leftJoinAndSelect('comment.user', 'user')
            .leftJoinAndSelect('comment.post', 'post')
            .getMany();
    }

    public async postComment(commentId:number, action:string): Promise<IComment> {
        const queryRunner = getManager().getRepository(CommentEntity);
        const comment = await queryRunner.createQueryBuilder('comment')
            .where(
                'comment.id = :commentId',
                { commentId },
            )
            .getOne();

        if (!comment) {
            throw new Error('Wrong comment ID');
        }

        if (action === 'like') {
            await queryRunner.update({ id: commentId }, { like: +comment.like + 1 });
        }

        if (action === 'dislike') {
            await queryRunner.update({ id: commentId }, { dislike: +comment.dislike + 1 });
        }
        return comment;
    }
}
export const commentRepository = new CommentRepository();
