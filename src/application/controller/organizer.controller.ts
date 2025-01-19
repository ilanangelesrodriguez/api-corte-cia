import { Request, Response } from 'express';
import OrganizerService from '../../domain/services/organizer.service';

class OrganizerController {
    async createOrganizer(req: Request, res: Response): Promise<void> {
        try {
            const organizer = await OrganizerService.createOrganizer(req.body);
            res.status(201).json(organizer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getOrganizerById(req: Request, res: Response): Promise<void> {
        try {
            const organizer = await OrganizerService.getOrganizerById(req.params.id);
            if (organizer) {
                res.status(200).json(organizer);
            } else {
                res.status(404).json({ message: 'Organizer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateOrganizer(req: Request, res: Response): Promise<void> {
        try {
            const organizer = await OrganizerService.updateOrganizer(req.params.id, req.body);
            if (organizer) {
                res.status(200).json(organizer);
            } else {
                res.status(404).json({ message: 'Organizer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteOrganizer(req: Request, res: Response): Promise<void> {
        try {
            const organizer = await OrganizerService.deleteOrganizer(req.params.id);
            if (organizer) {
                res.status(200).json({ message: 'Organizer deleted successfully' });
            } else {
                res.status(404).json({ message: 'Organizer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllOrganizers(req: Request, res: Response): Promise<void> {
        try {
            const organizers = await OrganizerService.getAllOrganizers();
            res.status(200).json(organizers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new OrganizerController();
