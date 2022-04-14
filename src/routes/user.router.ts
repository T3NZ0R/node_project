import { userController } from '../controllers/user.controller';

const { Router } = require('express');

const router = Router();

router.get('/', userController.getUsers);
router.get('/:email', userController.getUserByEmail);
router.post('/', userController.createUser);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

export const userRouter = router;
