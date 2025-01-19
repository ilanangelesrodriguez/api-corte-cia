import TicketRepository from '../repositories/ticket.repository';
import { ITicket } from '../models/ticket';

class TicketService {
    async createTicket(ticketData: ITicket): Promise<ITicket> {
        return await TicketRepository.createTicket(ticketData);
    }

    async getTicketById(ticketId: string): Promise<ITicket | null> {
        return await TicketRepository.getTicketById(ticketId);
    }

    async updateTicket(ticketId: string, ticketData: Partial<ITicket>): Promise<ITicket | null> {
        return await TicketRepository.updateTicket(ticketId, ticketData);
    }

    async deleteTicket(ticketId: string): Promise<ITicket | null> {
        return await TicketRepository.deleteTicket(ticketId);
    }

    async getAllTickets(): Promise<ITicket[]> {
        return await TicketRepository.getAllTickets();
    }
}

export default new TicketService();
