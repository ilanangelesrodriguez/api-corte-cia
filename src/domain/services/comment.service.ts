import CommentRepository from '../repositories/comment.repository';
import { IComment } from '../models/comment';

class CommentService {
    async createComment(commentData: IComment): Promise<IComment> {
        return await CommentRepository.createComment(commentData);
    }

    async getCommentById(commentId: string): Promise<IComment | null> {
        return await CommentRepository.getCommentById(commentId);
    }

    async updateComment(commentId: string, commentData: Partial<IComment>): Promise<IComment | null> {
        return await CommentRepository.updateComment(commentId, commentData);
    }

    async deleteComment(commentId: string): Promise<IComment | null> {
        return await CommentRepository.deleteComment(commentId);
    }

    async getAllComments(): Promise<IComment[]> {
        return await CommentRepository.getAllComments();
    }
}

export default new CommentService();
