import { Request, Response } from 'express';
import LocationService from '../../domain/services/location.service';

class LocationController {
    async createLocation(req: Request, res: Response): Promise<void> {
        try {
            const location = await LocationService.createLocation(req.body);
            res.status(201).json(location);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getLocationById(req: Request, res: Response): Promise<void> {
        try {
            const location = await LocationService.getLocationById(req.params.id);
            if (location) {
                res.status(200).json(location);
            } else {
                res.status(404).json({ message: 'Location not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateLocation(req: Request, res: Response): Promise<void> {
        try {
            const location = await LocationService.updateLocation(req.params.id, req.body);
            if (location) {
                res.status(200).json(location);
            } else {
                res.status(404).json({ message: 'Location not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteLocation(req: Request, res: Response): Promise<void> {
        try {
            const location = await LocationService.deleteLocation(req.params.id);
            if (location) {
                res.status(200).json({ message: 'Location deleted successfully' });
            } else {
                res.status(404).json({ message: 'Location not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllLocations(req: Request, res: Response): Promise<void> {
        try {
            const locations = await LocationService.getAllLocations();
            res.status(200).json(locations);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new LocationController();
