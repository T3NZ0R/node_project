import { IUser } from '../../entity/user.entity';

export interface IUserRepositoryInterface{
    createUser(user:IUser): Promise<IUser>;
    getUsers(): Promise<IUser[]>;
    updateUser(user: IUser, userId: number):Promise<any>
    deleteUser(userId: number):Promise<any>
}
