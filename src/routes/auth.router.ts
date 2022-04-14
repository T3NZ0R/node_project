import { authController } from '../controllers/auth.controller';

const { Router } = require('express');

const router = Router();

router.post('/registration', authController.registration);
// router.post('/login', authController);
// router.post('/logout', authController);
// router.post('/refresh', authController);

export const authRouter = router;
