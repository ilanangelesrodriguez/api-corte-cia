import { Document, Types } from 'mongoose';
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
export interface ITicket extends Document {
  eventId: Types.ObjectId;
  ticketType: TicketType;
  price: number;
  availability: number;
  issuedDate: Date;
  attendeeId: Types.ObjectId;
}
