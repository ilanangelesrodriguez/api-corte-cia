import { TicketModel, ITicket } from "../models/ticket";

class TicketRepository {
    async createTicket(ticketData: ITicket): Promise<ITicket> {
        const ticket = new TicketModel(ticketData);
        return await ticket.save();
    }

    async getTicketById(ticketId: string): Promise<ITicket | null> {
        return await TicketModel.findById(ticketId).exec();
    }

    async updateTicket(ticketId: string, ticketData: Partial<ITicket>): Promise<ITicket | null> {
        return await TicketModel.findByIdAndUpdate(ticketId, ticketData, { new: true }).exec();
    }

    async deleteTicket(ticketId: string): Promise<ITicket | null> {
        return await TicketModel.findByIdAndDelete(ticketId).exec();
    }

    async getAllTickets(): Promise<ITicket[]> {
        return await TicketModel.find().exec();
    }
}

export default new TicketRepository();
