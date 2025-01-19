import { Router } from 'express';
import OrganizerController from '../../application/controller/organizer.controller';

const router = Router();

router.post('/organizers', OrganizerController.createOrganizer);
router.get('/organizers/:id', OrganizerController.getOrganizerById);
router.put('/organizers/:id', OrganizerController.updateOrganizer);
router.delete('/organizers/:id', OrganizerController.deleteOrganizer);
router.get('/organizers', OrganizerController.getAllOrganizers);

export default router;
