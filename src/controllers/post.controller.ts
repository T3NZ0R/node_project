import { Request, Response } from 'express';
import { IPost } from '../entity/post.entity';
import { postService } from '../services/post.service';

class PostController {
    public async getPost(req: Request, res: Response): Promise<Response<IPost>> {
        const { userId } = req.params;
        const getPost = await postService.getPost(+userId);
        return res.json(getPost);
    }

    public async updatePost(req: Request, res: Response): Promise<Response<IPost>> {
        const { userId } = req.params;
        const updatePost = await postService.updatePost(req.body, +userId);
        return res.json(updatePost);
    }
}

export const postController = new PostController();
