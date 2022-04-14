import { IComment } from '../entity/comment.entity';
import { commentRepository } from '../repositories/comment/comment,repository';

class CommentService {
    public async getComment(userId:number): Promise<IComment[]> {
        const getComment = await commentRepository.getComment(userId);
        return getComment;
    }

    public async postComment(commentId:number, action:string): Promise<IComment> {
        const postComment = await commentRepository.postComment(commentId, action);
        return postComment;
    }
}

export const commentService = new CommentService();
