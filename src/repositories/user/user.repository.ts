import { EntityRepository, getManager, Repository } from 'typeorm';
import { IUser, UserEntity } from '../../entity/user.entity';
import { IUserRepositoryInterface } from './userRepository.interface';

@EntityRepository(UserEntity)

class UserRepository extends Repository<UserEntity> implements IUserRepositoryInterface {
    public async createUser(user: IUser): Promise<IUser> {
        return getManager().getRepository(UserEntity).save(user);
    }

    public async getUsers(): Promise<IUser[]> {
        return getManager().getRepository(UserEntity).find({ relations: ['posts'] });
    }

    public async getUserByEmail(email:string):Promise<IUser | undefined> {
        return getManager().getRepository(UserEntity).createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }

    public async updateUser(user: IUser, userId: number): Promise<any> {
        const { password, email } = user;
        return getManager()
            .getRepository(UserEntity)
            .update({ id: Number(userId) }, {
                email,
                password,
            });
    }

    public async deleteUser(userId: number): Promise<any> {
        return getManager()
            .getRepository(UserEntity)
            .softDelete({ id: Number(userId) });
    }
}

export const userRepository = new UserRepository();
