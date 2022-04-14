import { postController } from '../controllers/post.controller';

const { Router } = require('express');

const router = Router();

router.get('/:userId', postController.getPost);
router.patch('/:userId', postController.updatePost);

export const postRouter = router;
