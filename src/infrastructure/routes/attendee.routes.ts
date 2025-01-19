import { Router } from 'express';
import AttendeeController from '../../application/controller/attendee.controller';

const router = Router();

router.post('/attendees', AttendeeController.createAttendee);
router.get('/attendees/:id', AttendeeController.getAttendeeById);
router.put('/attendees/:id', AttendeeController.updateAttendee);
router.delete('/attendees/:id', AttendeeController.deleteAttendee);
router.get('/attendees', AttendeeController.getAllAttendees);

export default router;
