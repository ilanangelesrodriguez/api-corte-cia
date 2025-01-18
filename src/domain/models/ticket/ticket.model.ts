import mongoose, { Schema } from 'mongoose';
import { ITicket } from './ticket.interface';
import { TicketType } from '../../enums';

const TicketSchema: Schema<ITicket> = new Schema(
  {
    eventId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Event', // Referencia al modelo Event
      required: true
    },
    ticketType: { 
      type: String, 
      enum: Object.values(TicketType), // Usamos el enum TicketType
      required: true 
    },
    price: { type: Number, required: true },
    availability: { type: Number, required: true },
    issuedDate: { type: Date, required: true },
    attendeeId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Attendee', // Referencia al modelo Attendee
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<ITicket>('Ticket', TicketSchema);
