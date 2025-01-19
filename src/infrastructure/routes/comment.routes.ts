import { Router } from 'express';
import CommentController from '../../application/controller/comment.controller';

const router = Router();

router.post('/comments', CommentController.createComment);
router.get('/comments/:id', CommentController.getCommentById);
router.put('/comments/:id', CommentController.updateComment);
router.delete('/comments/:id', CommentController.deleteComment);
router.get('/comments', CommentController.getAllComments);

export default router;
