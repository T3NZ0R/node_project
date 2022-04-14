import {userService} from './user.service';
import {IUser} from '../entity/user.entity';
import {tokenService} from './token.service';

class AuthService {
    public async registration(body: IUser) {
        const {email} = body;

        const userFromDb = await userService.getUserByEmail(email);
        if (userFromDb) {
            throw new Error(`User with email: ${email} is already exists.`);
        }
        const createUser = await userService.createUser(body);
        return this._getTokenData(createUser);
    }

    private async _getTokenData(userData: IUser) {
        const {id, email} = userData;
        const tokenPair = await tokenService
            .generateTokenPair({userId: id, userEmail: email});
        await tokenService.saveToken(id, tokenPair.refreshToken);

        return {
            ...tokenPair,
            userId: id,
            userEmail: email,
        }
    }
}

export const authService = new AuthService();
