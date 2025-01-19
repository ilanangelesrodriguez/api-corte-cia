import { Request, Response } from 'express';
import AttendeeService from '../../domain/services/attendee.service';

class AttendeeController {
    async createAttendee(req: Request, res: Response): Promise<void> {
        try {
            const attendee = await AttendeeService.createAttendee(req.body);
            res.status(201).json(attendee);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAttendeeById(req: Request, res: Response): Promise<void> {
        try {
            const attendee = await AttendeeService.getAttendeeById(req.params.id);
            if (attendee) {
                res.status(200).json(attendee);
            } else {
                res.status(404).json({ message: 'Attendee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateAttendee(req: Request, res: Response): Promise<void> {
        try {
            const attendee = await AttendeeService.updateAttendee(req.params.id, req.body);
            if (attendee) {
                res.status(200).json(attendee);
            } else {
                res.status(404).json({ message: 'Attendee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteAttendee(req: Request, res: Response): Promise<void> {
        try {
            const attendee = await AttendeeService.deleteAttendee(req.params.id);
            if (attendee) {
                res.status(200).json({ message: 'Attendee deleted successfully' });
            } else {
                res.status(404).json({ message: 'Attendee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllAttendees(req: Request, res: Response): Promise<void> {
        try {
            const attendees = await AttendeeService.getAllAttendees();
            res.status(200).json(attendees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new AttendeeController();
