import { commentController } from '../controllers/comment.controller';

const { Router } = require('express');

const router = Router();

router.get('/:userId', commentController.getComment);
router.post('/action', commentController.postComment);

export const commentRouter = router;
