import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { IPost, PostEntity } from './post.entity';
import { CommentEntity, IComment } from './comment.entity';

export interface IUser {
    id:number;
    firstName: string;
    lastName: string;
    age?: number;
    phone: string;
    email: string;
    password: string;
    posts: IPost[];
    comments: IComment[];
}

@Entity('users', { database: 'okten' })
export class UserEntity extends CommonFields {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
    })
        age?: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        password: string;

    @OneToMany(() => PostEntity, (post) => post.user)
        posts: PostEntity[];

    @OneToMany(() => CommentEntity, (comment) => comment.user)
        comments: CommentEntity[];
}
