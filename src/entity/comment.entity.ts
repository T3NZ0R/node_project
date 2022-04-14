import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { CommonFields } from './commonFields';
import { UserEntity } from './user.entity';
import { PostEntity } from './post.entity';

export interface IComment {
    text: string;
    authorId: number;
    postId: number;
    like: number;
    dislike: number;
}

@Entity('comments', { database: 'okten' })
export class CommentEntity extends CommonFields {
    @PrimaryGeneratedColumn()
        id: number;

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
        authorId: number;

    @Column({
        type: 'int',
    })
        postId: number;

    @Column({
        type: 'int',
    })
        like: number;

    @Column({
        type: 'int',
    })
        dislike: number;

    @ManyToOne(() => UserEntity, (user) => user.posts)
    @JoinColumn({ name: 'authorId' })
        user: UserEntity;

    @ManyToOne(() => PostEntity, (post) => post.comments)
    @JoinColumn({ name: 'postId' })
        post: PostEntity;
}
