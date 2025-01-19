import { Router } from 'express';
import SponsorController from '../../application/controller/sponsor.controller';

const router = Router();

router.post('/sponsors', SponsorController.createSponsor);
router.get('/sponsors/:id', SponsorController.getSponsorById);
router.put('/sponsors/:id', SponsorController.updateSponsor);
router.delete('/sponsors/:id', SponsorController.deleteSponsor);
router.get('/sponsors', SponsorController.getAllSponsors);

export default router;
