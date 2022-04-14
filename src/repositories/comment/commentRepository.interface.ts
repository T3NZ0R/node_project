import { IComment } from '../../entity/comment.entity';

export interface ICommentRepositoryInterface{
    getComment(userId:number): Promise<IComment[]>;
    postComment(commentId:number, action:string): Promise<IComment>;

}
