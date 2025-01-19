import { Router } from 'express';
import LocationController from '../../application/controller/location.controller';

const router = Router();

router.post('/locations', LocationController.createLocation);
router.get('/locations/:id', LocationController.getLocationById);
router.put('/locations/:id', LocationController.updateLocation);
router.delete('/locations/:id', LocationController.deleteLocation);
router.get('/locations', LocationController.getAllLocations);

export default router;
