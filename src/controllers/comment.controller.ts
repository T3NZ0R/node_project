import { Request, Response } from 'express';
import { IComment } from '../entity/comment.entity';
import { commentService } from '../services/comment.service';

class CommentController {
    public async getComment(req: Request, res: Response): Promise<Response<IComment>> {
        const { userId } = req.params;
        const getComment = await commentService.getComment(+userId);
        return res.json(getComment);
    }

    public async postComment(req: Request, res: Response): Promise<Response<IComment>> {
        const { commentId } = req.body;
        const { action } = req.params;
        const postComment = await commentService.postComment(+commentId, action);
        res.json(postComment);
        return res.sendStatus(201);
    }
}

export const commentController = new CommentController();
