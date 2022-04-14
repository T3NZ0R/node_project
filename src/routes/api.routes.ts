import { userRouter } from './user.router';
import { postRouter } from './post.router';
import { commentRouter } from './comment.router';
import { authRouter } from './auth.router';

const { Router } = require('express');

const router = Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/auth', authRouter);

export const apiRouter = router;
