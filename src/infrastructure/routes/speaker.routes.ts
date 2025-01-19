import { Router } from 'express';
import SpeakerController from '../../application/controller/speaker.controller';

const router = Router();

router.post('/speakers', SpeakerController.createSpeaker);
router.get('/speakers/:id', SpeakerController.getSpeakerById);
router.put('/speakers/:id', SpeakerController.updateSpeaker);
router.delete('/speakers/:id', SpeakerController.deleteSpeaker);
router.get('/speakers', SpeakerController.getAllSpeakers);

export default router;
