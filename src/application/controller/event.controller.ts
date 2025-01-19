import { Request, Response } from 'express';
import EventService from '../../domain/services/event.service';

class EventController {
    async createEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = await EventService.createEvent(req.body);
            res.status(201).json(event);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getEventById(req: Request, res: Response): Promise<void> {
        try {
            const event = await EventService.getEventById(req.params.id);
            if (event) {
                res.status(200).json(event);
            } else {
                res.status(404).json({ message: 'Event not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = await EventService.updateEvent(req.params.id, req.body);
            if (event) {
                res.status(200).json(event);
            } else {
                res.status(404).json({ message: 'Event not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteEvent(req: Request, res: Response): Promise<void> {
        try {
            const event = await EventService.deleteEvent(req.params.id);
            if (event) {
                res.status(200).json({ message: 'Event deleted successfully' });
            } else {
                res.status(404).json({ message: 'Event not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllEvents(req: Request, res: Response): Promise<void> {
        try {
            const events = await EventService.getAllEvents();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new EventController();