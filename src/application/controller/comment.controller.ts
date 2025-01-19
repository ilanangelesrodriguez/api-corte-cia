import { Request, Response } from 'express';
import CommentService from '../../domain/services/comment.service';

class CommentController {
    async createComment(req: Request, res: Response): Promise<void> {
        try {
            const comment = await CommentService.createComment(req.body);
            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCommentById(req: Request, res: Response): Promise<void> {
        try {
            const comment = await CommentService.getCommentById(req.params.id);
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({ message: 'Comment not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateComment(req: Request, res: Response): Promise<void> {
        try {
            const comment = await CommentService.updateComment(req.params.id, req.body);
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({ message: 'Comment not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteComment(req: Request, res: Response): Promise<void> {
        try {
            const comment = await CommentService.deleteComment(req.params.id);
            if (comment) {
                res.status(200).json({ message: 'Comment deleted successfully' });
            } else {
                res.status(404).json({ message: 'Comment not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllComments(req: Request, res: Response): Promise<void> {
        try {
            const comments = await CommentService.getAllComments();
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new CommentController();
