import {IToken, TokenEntity} from "../../entity/token.entity";
import {EntityRepository, getManager} from "typeorm";

@EntityRepository(TokenEntity)

class TokenRepository {
    public async createToken(token: any): Promise<IToken> {
        return getManager().getRepository(TokenEntity).save(token)
    }

    public async findTokenByUserId(userId:number):Promise<IToken | undefined>{
        return getManager().getRepository(TokenEntity).findOne({userId});
    }

}

export const tokenRepository = new TokenRepository();