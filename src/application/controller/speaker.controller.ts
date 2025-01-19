import { Request, Response } from 'express';
import SpeakerService from '../../domain/services/speaker.service';

class SpeakerController {
    async createSpeaker(req: Request, res: Response): Promise<void> {
        try {
            const speaker = await SpeakerService.createSpeaker(req.body);
            res.status(201).json(speaker);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getSpeakerById(req: Request, res: Response): Promise<void> {
        try {
            const speaker = await SpeakerService.getSpeakerById(req.params.id);
            if (speaker) {
                res.status(200).json(speaker);
            } else {
                res.status(404).json({ message: 'Speaker not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateSpeaker(req: Request, res: Response): Promise<void> {
        try {
            const speaker = await SpeakerService.updateSpeaker(req.params.id, req.body);
            if (speaker) {
                res.status(200).json(speaker);
            } else {
                res.status(404).json({ message: 'Speaker not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteSpeaker(req: Request, res: Response): Promise<void> {
        try {
            const speaker = await SpeakerService.deleteSpeaker(req.params.id);
            if (speaker) {
                res.status(200).json({ message: 'Speaker deleted successfully' });
            } else {
                res.status(404).json({ message: 'Speaker not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllSpeakers(req: Request, res: Response): Promise<void> {
        try {
            const speakers = await SpeakerService.getAllSpeakers();
            res.status(200).json(speakers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new SpeakerController();
