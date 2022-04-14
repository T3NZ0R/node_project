import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany,
} from 'typeorm';
import { CommonFields } from './commonFields';
import { UserEntity } from './user.entity';
import { CommentEntity, IComment } from './comment.entity';

export interface IPost {
    title: string;
    text: string;
    userId: number;
    comments: IComment[];
}

@Entity('posts', { database: 'okten' })
export class PostEntity extends CommonFields {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        title: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        text: string;

    @Column({
        type: 'int',
    })
        userId: number;

    @OneToMany(() => CommentEntity, (comment) => comment.post)
        comments: CommentEntity[];

    @ManyToOne(() => UserEntity, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
        user: UserEntity;
}
