import bcrypt from 'bcrypt';
import { IUser } from '../entity/user.entity';
import { userRepository } from '../repositories/user/user.repository';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };
        const createUser = await userRepository.createUser(dataToSave);
        return createUser;
    }

    public async getUserByEmail(email:string): Promise<IUser | undefined> {
        const getUserByEmail = await userRepository.getUserByEmail(email);
        return getUserByEmail;
    }

    public async getUsers(): Promise<IUser[]> {
        const getUsers = await userRepository.getUsers();
        return getUsers;
    }

    public async updateUser(user: IUser, userId: number): Promise<IUser> {
        const updateUser = await userRepository.updateUser(user, userId);
        return updateUser;
    }

    public async deleteUser(userId: number): Promise<IUser> {
        const deleteUser = await userRepository.deleteUser(userId);
        return deleteUser;
    }

    private async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();
