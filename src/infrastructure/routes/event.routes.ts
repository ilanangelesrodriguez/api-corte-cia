import { Router } from 'express';
import EventController from '../../application/controller/event.controller';

const router = Router();

router.post('/events', EventController.createEvent);
router.get('/events/:id', EventController.getEventById);
router.put('/events/:id', EventController.updateEvent);
router.delete('/events/:id', EventController.deleteEvent);
router.get('/events', EventController.getAllEvents);

export default router;
