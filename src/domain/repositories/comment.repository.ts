import { CommentModel, IComment } from "../models/comment";

class CommentRepository {
    async createComment(commentData: IComment): Promise<IComment> {
        const comment = new CommentModel(commentData);
        return await comment.save();
    }

    async getCommentById(commentId: string): Promise<IComment | null> {
        return await CommentModel.findById(commentId).exec();
    }

    async updateComment(commentId: string, commentData: Partial<IComment>): Promise<IComment | null> {
        return await CommentModel.findByIdAndUpdate(commentId, commentData, { new: true }).exec();
    }

    async deleteComment(commentId: string): Promise<IComment | null> {
        return await CommentModel.findByIdAndDelete(commentId).exec();
    }

    async getAllComments(): Promise<IComment[]> {
        return await CommentModel.find().exec();
    }
}

export default new CommentRepository();
