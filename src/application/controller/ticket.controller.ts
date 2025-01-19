import { Request, Response } from 'express';
import TicketService from '../../domain/services/ticket.service';

class TicketController {
    async createTicket(req: Request, res: Response): Promise<void> {
        try {
            const ticket = await TicketService.createTicket(req.body);
            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTicketById(req: Request, res: Response): Promise<void> {
        try {
            const ticket = await TicketService.getTicketById(req.params.id);
            if (ticket) {
                res.status(200).json(ticket);
            } else {
                res.status(404).json({ message: 'Ticket not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateTicket(req: Request, res: Response): Promise<void> {
        try {
            const ticket = await TicketService.updateTicket(req.params.id, req.body);
            if (ticket) {
                res.status(200).json(ticket);
            } else {
                res.status(404).json({ message: 'Ticket not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteTicket(req: Request, res: Response): Promise<void> {
        try {
            const ticket = await TicketService.deleteTicket(req.params.id);
            if (ticket) {
                res.status(200).json({ message: 'Ticket deleted successfully' });
            } else {
                res.status(404).json({ message: 'Ticket not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllTickets(req: Request, res: Response): Promise<void> {
        try {
            const tickets = await TicketService.getAllTickets();
            res.status(200).json(tickets);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new TicketController();
