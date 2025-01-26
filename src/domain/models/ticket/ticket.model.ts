import mongoose, { Schema } from 'mongoose';
import { ITicket } from './ticket.interface';
import { TicketType } from '../../enums';

/**
 * @swagger
 * components:
 *   schemas:
 *     ITicket:
 *       type: object
 *       properties:
 *         eventId:
 *           type: string
 *           format: ObjectId
 *           description: ID del evento asociado al ticket.
 *         ticketType:
 *           type: string
 *           description: Tipo de ticket.
 *         price:
 *           type: number
 *           description: Precio del ticket.
 *         availability:
 *           type: number
 *           description: Disponibilidad del ticket.
 *         issuedDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de emisión del ticket.
 *         attendeeId:
 *           type: string
 *           format: ObjectId
 *           description: ID del asistente asociado al ticket.
 */
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
