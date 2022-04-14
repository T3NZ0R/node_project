import {
    Column, Entity, JoinColumn, OneToOne,
} from 'typeorm';

import { CommonFields, ICommonFields } from './commonFields';
import { UserEntity } from './user.entity';

export interface IToken extends ICommonFields{
    refreshToken: string;
    userId: number;
}

@Entity('tokens', { database: 'okten' })
export class TokenEntity extends CommonFields implements IToken {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    refreshToken: string;

    @Column({
        type: 'int',
    })
    userId: number;

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'userId' })
    user: UserEntity;
}
