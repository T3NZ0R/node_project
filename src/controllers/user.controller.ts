import { Request, Response } from 'express';
import { IUser } from '../entity/user.entity';
import { userService } from '../services/user.service';

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response<IUser>> {
        const createUser = userService.createUser(req.body);
        return res.json(createUser);
    }

    public async getUsers(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        return res.json(users);
    }

    public async getUserByEmail(req: Request, res: Response): Promise<Response<IUser>> {
        const { email } = req.body;
        const getUserByEmail = await userService.getUserByEmail(email);
        return res.json(getUserByEmail);
    }

    public async updateUser(req: Request, res: Response): Promise<Response<IUser>> {
        const { userId } = req.params;
        const updateUser = await userService.updateUser(req.body, +userId);
        return res.json(updateUser);
    }

    public async deleteUser(req: Request, res: Response): Promise<Response<IUser>> {
        const { userId } = req.params;
        const deleteUser = await userService.deleteUser(+userId);
        return res.json(deleteUser);
    }
}

export const userController = new UserController();
